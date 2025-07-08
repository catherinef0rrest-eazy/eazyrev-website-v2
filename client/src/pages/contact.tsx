import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendlyInline } from "@/components/calendly-inline";

export default function Contact() {
  return (
    <div className="landing-backdrop">
      <div className="landing-content max-w-5xl mx-auto px-4 sm:px-6 pt-20 pb-16 page-transition">
        <div className="text-center mb-12">
          <div className="mb-6">
            <Badge variant="secondary" className="px-4 py-2 bg-slate-100 text-slate-700 text-sm font-medium rounded-full mb-4">
              Contact Sales
            </Badge>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-slate-900 tracking-tight leading-tight">Get in Touch</h1>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto px-2">
            Ready to revolutionize your tech sales process? Schedule a demo with our team.
          </p>
        </div>

        <Card className="metric-card rounded-2xl p-4 sm:p-6 enterprise-shadow-lg card-hover-effect mx-auto">
          <CardContent className="p-0 flex justify-center">
            <CalendlyInline 
              url="https://calendly.com/ashwin-eazy/eazy-strategy-call"
              height="920px"
              className="w-full max-w-full"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
