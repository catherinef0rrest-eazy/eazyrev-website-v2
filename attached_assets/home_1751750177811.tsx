import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Typewriter } from "@/components/typewriter";
import { SampleAnalysisMockup } from "@/components/sample-analysis-mockup";
import { CalendlyInline } from "@/components/calendly-inline";
import { Network, Zap, Crosshair } from "lucide-react";

export default function Home() {
  const [animateElements, setAnimateElements] = useState(false);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    // Trigger initial hero animations
    setTimeout(() => setAnimateElements(true), 100);

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="landing-backdrop">
      <div className="landing-content max-w-5xl mx-auto px-6 pt-20 pb-16">
        {/* Hero Section */}
        <div className={`text-center mb-20 ${animateElements ? 'slide-up' : ''}`}>
          <div className="mb-6 pt-10"></div>
        <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900 tracking-tight leading-tight">
          Bespoke Sales Insights for <span className="text-slate-700 whitespace-nowrap">IT Services & Tech Vendors</span>
        </h1>
        <p className="text-xl text-slate-600 mb-6 max-w-3xl mx-auto leading-relaxed">
          Engineered to help you target prospects with organizational fit, tech compatibility, urgency, and adoption readiness.
        </p>
        <p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto">
          From 500 Possibilities to 5 Perfect Recommendations
        </p>
        
        <div className={`flex justify-center gap-8 mb-10 ${animateElements ? 'stagger-fade-in' : ''}`}>
          <div className="text-center stagger-fade-in">
            <div className="text-2xl font-bold text-slate-900 counter-animate">20.7M</div>
            <div className="text-sm text-slate-600 font-medium">Companies</div>
          </div>
          <div className="w-px bg-slate-200 mx-4"></div>
          <div className="text-center stagger-fade-in">
            <div className="text-2xl font-bold text-slate-900 counter-animate">220K</div>
            <div className="text-sm text-slate-600 font-medium">Products</div>
          </div>
          <div className="w-px bg-slate-200 mx-4"></div>
          <div className="text-center stagger-fade-in">
            <div className="text-2xl font-bold text-slate-900 counter-animate">158K</div>
            <div className="text-sm text-slate-600 font-medium">Vendors</div>
          </div>
        </div>

        <Link href="/sample-analysis">
          <Button className="bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            See Sample Report
          </Button>
        </Link>
        </div>

        {/* Value Proposition */}
        <div 
          ref={addToRefs}
          className="mb-20 animate-on-scroll"
        >
          <Card className="metric-card rounded-2xl p-10 mb-12 enterprise-shadow-lg pulse-glow">
            <CardContent className="p-0">
              <p className="text-xl text-slate-700 leading-relaxed font-medium tracking-tight">
                <Typewriter 
                  text="eazyrev leverages advanced AI and the world's largest and most accurate technology intelligence data available to analyze your prospect tech stacks and uncover sales insights."
                  speed={30}
                  delay={1000}
                />
              </p>
            </CardContent>
          </Card>

          {/* Sample Report Mockup */}
          <div 
            ref={addToRefs}
            className="mb-20 animate-on-scroll"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-slate-900 tracking-tight">
                See How It Works
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Experience our AI-powered analysis in action. This sample report shows how we transform 
                complex technology data into clear, actionable sales opportunities.
              </p>
            </div>
            <SampleAnalysisMockup />
          </div>

          {/* 3-Column Benefits */}
          <div 
            ref={addToRefs}
            className="grid md:grid-cols-3 gap-8 animate-on-scroll"
          >
            <Card className="metric-card rounded-xl p-8 group">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-slate-200 transition-colors">
                  <Network className="w-6 h-6 text-slate-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900 tracking-tight">
                  Multi-Signal Intelligence
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Combines technographics, job postings, buyer intent, case
                  studies, and CRM data
                </p>
              </CardContent>
            </Card>
            <Card className="metric-card rounded-xl p-8 group">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-slate-200 transition-colors">
                  <Zap className="w-6 h-6 text-slate-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900 tracking-tight">
                  Plug-and-Play Recommendations
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Automated filtering from broad possibilities to targeted
                  opportunities
                </p>
              </CardContent>
            </Card>
            <Card className="metric-card rounded-xl p-8 group">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-slate-200 transition-colors">
                  <Crosshair className="w-6 h-6 text-slate-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900 tracking-tight">
                  Opportunity Precision
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Target prospects with organizational fit, tech compatibility,
                  urgency, and tech readiness
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact Section */}
        <div ref={addToRefs} className="animate-on-scroll scale-in">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3 text-slate-900 tracking-tight">
              Ready to Transform Your IT Services Sales?
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
              Schedule a demo with our team and see immediate results in your tech
              sales process.
            </p>
          </div>

          <CalendlyInline 
            url="https://calendly.com/ashwin-eazy/eazy-strategy-call"
            height="650px"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
