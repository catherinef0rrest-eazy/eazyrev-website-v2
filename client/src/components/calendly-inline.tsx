import { useEffect } from "react";

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
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    
    script.onload = () => {
      if (window.Calendly) {
        window.Calendly.initInlineWidget({
          url: url,
          parentElement: document.querySelector('.calendly-widget-container')
        });
      }
    };
    
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [url]);

  return (
    <div
      className={`calendly-widget-container ${className}`}
      style={{ 
        minWidth: "320px", 
        height,
        minHeight: height,
        width: "100%",
        overflow: "visible"
      }}
    />
  );
}
