import { useEffect, useRef } from "react";

interface CalendlyInlineProps {
  url: string;
  height?: string;
  className?: string;
}

declare global {
  interface Window {
    Calendly: any;
  }
}

export function CalendlyInline({ url, height = "900px", className = "" }: CalendlyInlineProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);

    // Listen for Calendly widget to load and scroll to bottom
    const scrollToBottom = () => {
      setTimeout(() => {
        if (containerRef.current) {
          const iframe = containerRef.current.querySelector('iframe');
          if (iframe) {
            // Try to scroll the iframe content to bottom
            try {
              iframe.contentWindow?.scrollTo(0, iframe.contentWindow.document.body.scrollHeight);
            } catch (e) {
              // Cross-origin restriction, try scrolling the container instead
              containerRef.current.scrollTop = containerRef.current.scrollHeight;
            }
          }
        }
      }, 2000); // Wait for widget to fully load
    };

    // Listen for Calendly events
    const handleMessage = (event: MessageEvent) => {
      if (event.origin === 'https://calendly.com' && event.data.event === 'calendly.page_height') {
        scrollToBottom();
      }
    };

    window.addEventListener('message', handleMessage);
    scrollToBottom(); // Initial scroll attempt

    return () => {
      document.head.removeChild(script);
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`calendly-inline-widget ${className}`}
      data-url={url}
      style={{ minWidth: "320px", height, overflow: "auto" }}
    />
  );
}
