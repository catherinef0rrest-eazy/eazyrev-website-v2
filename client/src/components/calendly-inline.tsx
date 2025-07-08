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
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div
      className={`calendly-inline-widget ${className} mx-auto`}
      data-url={url}
      style={{ minWidth: "320px", height, overflow: "hidden", margin: "0 auto" }}
    />
  );
}
