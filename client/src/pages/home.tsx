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
    let isActive = true;

    const typeInterval = setInterval(() => {
      if (!isActive) return;
      
      if (currentIndex < fullText.length) {
        setTypewriterText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
        setTypewriterComplete(true);
      }
    }, typeSpeed);

    return () => {
      isActive = false;
      clearInterval(typeInterval);
    };
  }, []); // Empty dependency array - only runs once on mount

  return (
    <div className="landing-backdrop">
      <div className="landing-content max-w-5xl mx-auto px-4 sm:px-6 pt-20 pb-16 page-transition overflow-hidden">
        {/* Hero Section */}
        <div className="text-center mb-20 slide-up">
          <div className="mb-6 pt-10"></div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-slate-900 tracking-tight leading-tight">
            Bespoke Sales Insights for{" "}
            <span className="text-slate-700 sm:whitespace-nowrap">IT Services & Tech Vendors</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 mb-6 max-w-3xl mx-auto leading-relaxed px-2">
            Engineered to help you target prospects with organizational fit, tech compatibility, urgency, and adoption readiness.
          </p>
          <p className="text-base sm:text-lg text-slate-500 mb-10 max-w-2xl mx-auto px-2">
            From 500 Possibilities to 5 Perfect Recommendations
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-10 px-4">
            <div className="text-center stats-appear" style={{ animationDelay: '0.1s' }}>
              <div className="text-xl sm:text-2xl font-bold text-slate-900 gradient-text">20.7M</div>
              <div className="text-sm text-slate-600 font-medium">Companies</div>
            </div>
            <div className="hidden sm:block w-px bg-slate-200 mx-4"></div>
            <div className="text-center stats-appear" style={{ animationDelay: '0.2s' }}>
              <div className="text-xl sm:text-2xl font-bold text-slate-900 gradient-text">220K</div>
              <div className="text-sm text-slate-600 font-medium">Products</div>
            </div>
            <div className="hidden sm:block w-px bg-slate-200 mx-4"></div>
            <div className="text-center stats-appear" style={{ animationDelay: '0.3s' }}>
              <div className="text-xl sm:text-2xl font-bold text-slate-900 gradient-text">158K</div>
              <div className="text-sm text-slate-600 font-medium">Vendors</div>
            </div>
          </div>

          <Link href="/sample-report">
            <Button className="bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 btn-advanced shadow-lg rainbow-hover-btn">
              See Sample Report
            </Button>
          </Link>
        </div>

        {/* Value Proposition */}
        <div className="mb-20">
          <Card className="metric-card rounded-2xl p-8 sm:p-10 mb-12 enterprise-shadow-lg float-animation">
            <CardContent className="p-0 flex items-center justify-center min-h-[8rem]">
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-4xl text-center px-4">
                {typewriterText}
                {!typewriterComplete && (
                  <span className="typewriter-cursor text-slate-400 ml-1">|</span>
                )}
              </p>
            </CardContent>
          </Card>

          {/* 3-Column Benefits */}
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="metric-card rounded-xl p-6 sm:p-8 group card-hover-effect" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-slate-200 transition-colors icon-hover-rotate">
                  <Network className="h-6 w-6 text-slate-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-slate-900 tracking-tight">
                  Multi-Signal Intelligence
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Combines technographics, job postings, buyer intent, case studies, and CRM data
                </p>
              </CardContent>
            </Card>
            <Card className="metric-card rounded-xl p-6 sm:p-8 group card-hover-effect" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-slate-200 transition-colors icon-hover-rotate">
                  <Zap className="h-6 w-6 text-slate-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-slate-900 tracking-tight">
                  Plug-and-Play Recommendations
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Automated filtering from broad possibilities to targeted opportunities
                </p>
              </CardContent>
            </Card>
            <Card className="metric-card rounded-xl p-6 sm:p-8 group card-hover-effect" style={{ animationDelay: '0.3s' }}>
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-slate-200 transition-colors icon-hover-rotate">
                  <Crosshair className="h-6 w-6 text-slate-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-slate-900 tracking-tight">
                  Opportunity Precision
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Target prospects with organizational fit, tech compatibility, urgency, and tech readiness
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Sample Report Preview */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900 tracking-tight">
              See How It Works
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto px-4">
              Experience our AI-powered analysis in action. This sample report shows how we transform 
              complex technology data into clear, actionable sales opportunities.
            </p>
          </div>

          <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
            {/* Browser Header */}
            <div className="bg-gray-100 px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2 sm:gap-3 border-b border-gray-200">
              <div className="flex gap-1.5 flex-shrink-0">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-400 rounded-full"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 rounded-full"></div>
              </div>
              <span className="text-xs sm:text-sm text-gray-600 font-medium truncate">Analysis Report - TechCorp Solutions</span>
            </div>

            <div className="p-4 sm:p-8 space-y-6">
              {/* Company Header Card */}
              <Card className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-base sm:text-lg">T</span>
                    </div>
                    <div className="flex-1 min-w-0 overflow-hidden">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-1 break-words">TechForward Regional Bank</h3>
                      <div className="flex flex-col gap-1 sm:gap-2 text-xs sm:text-sm text-slate-600">
                        <span className="flex items-center gap-2">
                          <Building2 className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                          <span className="break-words">Depository Credit Intermediation</span>
                        </span>
                        <span className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                          <span>47 products analyzed</span>
                        </span>
                        <span className="flex items-center gap-2">
                          <DollarSign className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                          <span className="break-words">$450K+ revenue potential</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                <Card className="bg-white border border-slate-200 rounded-lg p-3 sm:p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Cloud className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                    </div>
                    <p className="text-xs text-slate-500 mb-1">Cloud Adoption</p>
                    <p className="font-bold text-slate-900 text-sm sm:text-base">Advanced</p>
                  </CardContent>
                </Card>
                <Card className="bg-white border border-slate-200 rounded-lg p-3 sm:p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                    </div>
                    <p className="text-xs text-slate-500 mb-1">Security</p>
                    <p className="font-bold text-slate-900 text-sm sm:text-base">Moderate</p>
                  </CardContent>
                </Card>
                <Card className="bg-white border border-slate-200 rounded-lg p-3 sm:p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <DollarSign className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600" />
                    </div>
                    <p className="text-xs text-slate-500 mb-1">Investment</p>
                    <p className="font-bold text-slate-900 text-sm sm:text-base">$2.5M</p>
                  </CardContent>
                </Card>
                <Card className="bg-white border border-slate-200 rounded-lg p-3 sm:p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Target className="h-4 w-4 sm:h-5 sm:w-5 text-orange-600" />
                    </div>
                    <p className="text-xs text-slate-500 mb-1">Opportunities</p>
                    <p className="font-bold text-slate-900 text-sm sm:text-base">3</p>
                  </CardContent>
                </Card>
              </div>

              {/* Primary Recommendation Card */}
              <Card className="bg-slate-800 text-white rounded-xl border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
                      <Zap className="h-4 w-4 text-yellow-900" />
                    </div>
                    <span className="font-semibold">Primary Recommendation</span>
                  </div>
                  
                  <p className="text-slate-200 mb-4 leading-relaxed text-sm">
                    Cross-sell <strong className="text-white">Microsoft Defender for Cloud</strong> to enhance their existing 
                    Azure security posture and address critical gaps in real-time threat detection.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-3 bg-slate-700 rounded-lg">
                      <p className="text-xs text-slate-300 mb-1">Est. Value</p>
                      <p className="font-bold text-white">$150K-250K</p>
                    </div>
                    <div className="text-center p-3 bg-slate-700 rounded-lg">
                      <p className="text-xs text-slate-300 mb-1">Timeline</p>
                      <p className="font-bold text-white">3-6 months</p>
                    </div>
                    <div className="text-center p-3 bg-slate-700 rounded-lg">
                      <p className="text-xs text-slate-300 mb-1">Priority</p>
                      <p className="font-bold text-white">High</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Sections */}
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <Card className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-orange-100 rounded flex items-center justify-center">
                          <Activity className="h-4 w-4 text-orange-600" />
                        </div>
                        <span className="font-semibold text-slate-900 text-sm sm:text-base">Integration & API Management</span>
                      </div>
                      <Badge className="bg-red-100 text-red-700 text-xs font-medium self-start sm:self-auto">HIGH</Badge>
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-2 text-sm sm:text-base">API management and open banking readiness</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Limited API infrastructure for third-party integrations and 
                      open banking compliance requirements.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
                        <BarChart3 className="h-4 w-4 text-blue-600" />
                      </div>
                      <span className="font-semibold text-slate-900 text-sm sm:text-base">Revenue Opportunities</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-700">Microsoft Defender</span>
                        <Badge className="bg-red-100 text-red-700 text-xs">High</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-700">Azure Backup</span>
                        <Badge className="bg-orange-100 text-orange-700 text-xs">Medium</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-700">Power BI Premium</span>
                        <Badge className="bg-orange-100 text-orange-700 text-xs">Medium</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Call to Action */}
              <div className="text-center pt-6">
                <Link href="/sample-report">
                  <Button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 text-base font-medium rounded-lg btn-advanced shadow-lg rainbow-hover-btn">
                    View Full Report
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-slate-900 tracking-tight px-4">
            Ready to Transform Your IT Services Sales?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto px-4">
            Schedule a demo with our team and see immediate results in your tech sales process.
          </p>
        </div>

        {/* Calendly Widget */}
        <Card className="metric-card rounded-2xl p-4 sm:p-6 enterprise-shadow-lg">
          <CardContent className="p-0">
            <CalendlyInline 
              url="https://calendly.com/ashwin-eazy/eazy-strategy-call"
              height="600px"
              className="w-full"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
