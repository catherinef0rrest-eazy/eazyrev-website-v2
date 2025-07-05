import { Card, CardContent } from "@/components/ui/card";
import { CalendlyInline } from "@/components/calendly-inline";

export default function Contact() {
  return (
    <div className="landing-backdrop">
      <div className="landing-content max-w-3xl mx-auto px-6 pt-20 pb-16 fade-in">
        <div className="text-center mb-12">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-slate-100 text-slate-700 text-sm font-medium rounded-full mb-4">
            Contact Sales
          </span>
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900 tracking-tight leading-tight">Get in Touch</h1>
        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Ready to revolutionize your tech sales process? Schedule a demo with our team.
        </p>
      </div>

      <CalendlyInline 
        url="https://calendly.com/ashwin-eazy/eazy-strategy-call"
        height="700px"
        className="w-full"
      />
      </div>
    </div>
  );
}