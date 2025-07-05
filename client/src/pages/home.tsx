import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendlyInline } from "@/components/calendly-inline";
import { Network, Zap, Crosshair, Calendar, Building2, DollarSign, Cloud, Shield, Target, Activity, BarChart3 } from "lucide-react";

export default function Home() {
  const [typewriterText, setTypewriterText] = useState("");
  const [typewriterComplete, setTypewriterComplete] = useState(false);

  const fullText = "eazyrev leverages advanced AI and the world's largest and most accurate technology intelligence data available to analyze your prospect tech stacks and uncover sales insights.";

  useEffect(() => {
    let currentIndex = 0;
    const typeSpeed = 30; // milliseconds per character

    const typeInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setTypewriterText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
        setTypewriterComplete(true);
      }
    }, typeSpeed);

    return () => clearInterval(typeInterval);
  }, []);

  return (
    <div className="landing-backdrop">
      <div className="landing-content max-w-5xl mx-auto px-6 pt-20 pb-16 page-transition">
        {/* Hero Section */}
        <div className="text-center mb-20 slide-up">
          <div className="mb-6 pt-10"></div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900 tracking-tight leading-tight">
            Bespoke Sales Insights for{" "}
            <span className="text-slate-700 whitespace-nowrap">IT Services & Tech Vendors</span>
          </h1>
          <p className="text-xl text-slate-600 mb-6 max-w-3xl mx-auto leading-relaxed">
            Engineered to help you target prospects with organizational fit, tech compatibility, urgency, and adoption readiness.
          </p>
          <p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto">
            From 500 Possibilities to 5 Perfect Recommendations
          </p>
          
          <div className="flex justify-center gap-8 mb-10">
            <div className="text-center stats-appear" style={{ animationDelay: '0.1s' }}>
              <div className="text-2xl font-bold text-slate-900 gradient-text">20.7M</div>
              <div className="text-sm text-slate-600 font-medium">Companies</div>
            </div>
            <div className="w-px bg-slate-200 mx-4"></div>
            <div className="text-center stats-appear" style={{ animationDelay: '0.2s' }}>
              <div className="text-2xl font-bold text-slate-900 gradient-text">220K</div>
              <div className="text-sm text-slate-600 font-medium">Products</div>
            </div>
            <div className="w-px bg-slate-200 mx-4"></div>
            <div className="text-center stats-appear" style={{ animationDelay: '0.3s' }}>
              <div className="text-2xl font-bold text-slate-900 gradient-text">158K</div>
              <div className="text-sm text-slate-600 font-medium">Vendors</div>
            </div>
          </div>

          <Link href="/sample-report">
            <Button className="bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 btn-advanced shadow-lg">
              See Sample Report
            </Button>
          </Link>
        </div>

        {/* Value Proposition */}
        <div className="mb-20">
          <Card className="metric-card rounded-2xl p-10 mb-12 enterprise-shadow-lg float-animation">
            <CardContent className="p-0">
              <p className="text-xl text-slate-700 leading-relaxed font-light tracking-tight min-h-[2.5rem]">
                {typewriterText}
                {!typewriterComplete && (
                  <span className="typewriter-cursor text-slate-400">|</span>
                )}
              </p>
            </CardContent>
          </Card>

          {/* 3-Column Benefits */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="metric-card rounded-xl p-8 group card-hover-effect" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-slate-200 transition-colors icon-hover-rotate">
                  <Network className="h-6 w-6 text-slate-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900 tracking-tight">
                  Multi-Signal Intelligence
                </h3>
                <p className="text-slate-600 leading-relaxed text-base">
                  Combines technographics, job postings, buyer intent, case studies, and CRM data
                </p>
              </CardContent>
            </Card>
            <Card className="metric-card rounded-xl p-8 group card-hover-effect" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-slate-200 transition-colors icon-hover-rotate">
                  <Zap className="h-6 w-6 text-slate-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900 tracking-tight">
                  Plug-and-Play Recommendations
                </h3>
                <p className="text-slate-600 leading-relaxed text-base">
                  Automated filtering from broad possibilities to targeted opportunities
                </p>
              </CardContent>
            </Card>
            <Card className="metric-card rounded-xl p-8 group card-hover-effect" style={{ animationDelay: '0.3s' }}>
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-slate-200 transition-colors icon-hover-rotate">
                  <Crosshair className="h-6 w-6 text-slate-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900 tracking-tight">
                  Opportunity Precision
                </h3>
                <p className="text-slate-600 leading-relaxed text-base">
                  Target prospects with organizational fit, tech compatibility, urgency, and tech readiness
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Sample Report Preview */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-900 tracking-tight">
              See How It Works
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Experience our AI-powered analysis in action. This sample report shows how we transform 
              complex technology data into clear, actionable sales opportunities.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
            {/* Browser Header */}
            <div className="bg-gray-50 px-4 py-3 flex items-center gap-3 border-b border-gray-200">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <span className="text-sm text-gray-600 font-medium">Analysis Report - TechCorp Solutions</span>
            </div>

            <div className="p-12 space-y-8">
              {/* Company Header Card */}
              <Card className="bg-white border border-slate-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-slate-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xl">T</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">TechForward Regional Bank</h3>
                      <div className="flex items-center gap-8 text-sm text-slate-600">
                        <span className="flex items-center gap-3">
                          <Building2 className="h-4 w-4" />
                          Depository Credit Intermediation
                        </span>
                        <span className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          47 products analyzed
                        </span>
                        <span className="flex items-center gap-3">
                          <DollarSign className="h-4 w-4" />
                          $450K+ revenue potential identified
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Metrics Grid */}
              <div className="grid grid-cols-4 gap-6">
                <Card className="bg-white border border-slate-200 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Cloud className="h-6 w-6 text-blue-600" />
                    </div>
                    <p className="text-sm text-slate-500 mb-2">Cloud Adoption</p>
                    <p className="text-lg font-bold text-slate-900">Advanced</p>
                  </CardContent>
                </Card>
                <Card className="bg-white border border-slate-200 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Shield className="h-6 w-6 text-green-600" />
                    </div>
                    <p className="text-sm text-slate-500 mb-2">Security</p>
                    <p className="text-lg font-bold text-slate-900">Moderate</p>
                  </CardContent>
                </Card>
                <Card className="bg-white border border-slate-200 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <DollarSign className="h-6 w-6 text-purple-600" />
                    </div>
                    <p className="text-sm text-slate-500 mb-2">Investment</p>
                    <p className="text-lg font-bold text-slate-900">$2.5M</p>
                  </CardContent>
                </Card>
                <Card className="bg-white border border-slate-200 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Target className="h-6 w-6 text-orange-600" />
                    </div>
                    <p className="text-sm text-slate-500 mb-2">Opportunities</p>
                    <p className="text-lg font-bold text-slate-900">3</p>
                  </CardContent>
                </Card>
              </div>

              {/* Primary Recommendation Card */}
              <Card className="bg-slate-800 text-white rounded-xl border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
                      <Zap className="h-5 w-5 text-yellow-900" />
                    </div>
                    <span className="text-lg font-semibold">Primary Recommendation</span>
                  </div>
                  
                  <p className="text-slate-200 mb-6 leading-relaxed">
                    Cross-sell <strong className="text-white">Microsoft Defender for Cloud</strong> to enhance their existing 
                    Azure security posture and address critical gaps in real-time threat detection.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-slate-700 rounded-lg">
                      <p className="text-sm text-slate-300 mb-2">Est. Value</p>
                      <p className="text-xl font-bold text-white">$150K-250K</p>
                    </div>
                    <div className="text-center p-4 bg-slate-700 rounded-lg">
                      <p className="text-sm text-slate-300 mb-2">Timeline</p>
                      <p className="text-xl font-bold text-white">3-6 months</p>
                    </div>
                    <div className="text-center p-4 bg-slate-700 rounded-lg">
                      <p className="text-sm text-slate-300 mb-2">Priority</p>
                      <p className="text-xl font-bold text-white">High</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Sections */}
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-8 h-8 bg-orange-100 rounded flex items-center justify-center">
                        <Activity className="h-5 w-5 text-orange-600" />
                      </div>
                      <span className="text-lg font-semibold text-slate-900">Integration & API Management</span>
                      <Badge className="bg-red-100 text-red-700 text-xs font-medium">HIGH</Badge>
                    </div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-4">API management and open banking readiness</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Limited API infrastructure for third-party integrations and 
                      open banking compliance requirements.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                        <BarChart3 className="h-5 w-5 text-blue-600" />
                      </div>
                      <span className="text-lg font-semibold text-slate-900">Revenue Opportunities</span>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-2">
                        <span className="text-slate-700 font-medium">Microsoft Defender</span>
                        <Badge className="bg-red-100 text-red-700 text-xs">High</Badge>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-slate-700 font-medium">Azure Backup</span>
                        <Badge className="bg-orange-100 text-orange-700 text-xs">Medium</Badge>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-slate-700 font-medium">Power BI Premium</span>
                        <Badge className="bg-orange-100 text-orange-700 text-xs">Medium</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Call to Action */}
              <div className="text-center pt-6">
                <Link href="/sample-report">
                  <Button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 text-base font-medium rounded-lg btn-advanced shadow-lg">
                    View Full Report
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-3 text-slate-900 tracking-tight">
            Ready to Transform Your IT Services Sales?
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
            Schedule a demo with our team and see immediate results in your tech sales process.
          </p>
        </div>

        {/* Calendly Widget */}
        <Card className="metric-card rounded-2xl p-6 enterprise-shadow-lg">
          <CardContent className="p-0">
            <CalendlyInline 
              url="https://calendly.com/ashwin-eazy/eazy-strategy-call"
              height="700px"
              className="w-full"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
