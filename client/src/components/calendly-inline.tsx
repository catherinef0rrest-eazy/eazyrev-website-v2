interface CalendlyInlineProps {
  url: string;
  height?: string;
  className?: string;
}

export function CalendlyInline({ url, height = "900px", className = "" }: CalendlyInlineProps) {
  return (
    <iframe
      src={url}
      width="100%"
      height={height}
      frameBorder="0"
      scrolling="no"
      className={className}
      style={{
        border: "none",
        minWidth: "320px",
        borderRadius: "8px"
      }}
      title="Calendly Scheduling"
    />
  );
}
