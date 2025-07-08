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

        <Card className="metric-card rounded-2xl p-4 sm:p-6 enterprise-shadow-lg card-hover-effect">
          <CardContent className="p-0">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
              {/* Left Column - Contact Info (only visible on large screens) */}
              <div className="hidden lg:block space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Ready to Get Started?</h3>
                  <p className="text-slate-600 mb-6">
                    Schedule a personalized demo to see how eazyrev can transform your tech sales process with AI-powered insights.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">30-Minute Demo</p>
                      <p className="text-sm text-slate-600">Personalized walkthrough</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Instant ROI Analysis</p>
                      <p className="text-sm text-slate-600">See potential value immediately</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Custom Implementation</p>
                      <p className="text-sm text-slate-600">Tailored to your needs</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Calendly Widget */}
              <div className="w-full">
                <CalendlyInline 
                  url="https://calendly.com/ashwin-eazy/eazy-strategy-call"
                  height="600px"
                  className="w-full"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
