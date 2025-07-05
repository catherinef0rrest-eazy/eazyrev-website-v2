import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ExternalLink, Building2, Phone, MapPin, DollarSign, Users, ChartLine, Shield, Cloud, Zap } from "lucide-react";
import sampleData from "@/data/sample-analysis.json";

export default function SampleReport() {
  const { company, results, metadata, analysis_outputs } = sampleData;
  const executiveSummary = analysis_outputs.phase_3_strategy.output.executive_summary;

  return (
    <div className="landing-backdrop">
      <div className="landing-content max-w-7xl mx-auto px-6 pt-20 pb-16 fade-in min-h-screen">
        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <Badge variant="secondary" className="px-4 py-2 bg-slate-100 text-slate-700 text-sm font-medium rounded-full mb-4">
              Sample Technology Intelligence Report
            </Badge>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900 tracking-tight leading-tight">
            Sales Insights Made Eazy
          </h1>
          <p className="text-xl text-slate-600 mb-6 leading-relaxed max-w-4xl mx-auto">
            This sample analysis for TechForward Regional Bank demonstrates how our AI-powered insights engine surfaces high-value cross-sell, upsell, and net new opportunities in minutes, not weeks.
          </p>
          <Link href="/contact">
            <Button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 text-base font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
              Get Your Custom Analysis
            </Button>
          </Link>
        </div>

        {/* Company Account Summary */}
        <Card className="metric-card rounded-2xl p-8 mb-12 enterprise-shadow-lg bg-slate-50/50 border border-slate-200">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column - Company Identity */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">T</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-2xl font-bold text-slate-900 mb-2 truncate">
                      {company.name}
                    </h2>
                    <a 
                      href={`https://${company.domain}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                    >
                      {company.domain}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Building2 className="h-4 w-4 text-slate-500" />
                  <span className="text-slate-700 font-medium">{company.industry}</span>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-3">
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>{metadata.products_analyzed} products analyzed</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>$450K+ revenue potential identified</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Business Details */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-3 w-3 text-slate-500" />
                      <span className="text-sm font-medium text-slate-600 uppercase tracking-wide">Location</span>
                    </div>
                    <p className="text-slate-900 font-medium">{company.city}, {company.state}</p>
                    <p className="text-sm text-slate-600">{company.country} {company.postalCode}</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Phone className="h-3 w-3 text-slate-500" />
                      <span className="text-sm font-medium text-slate-600 uppercase tracking-wide">Phone</span>
                    </div>
                    <p className="text-slate-900 font-medium">{company.phone}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <DollarSign className="h-3 w-3 text-slate-500" />
                      <span className="text-sm font-medium text-slate-600 uppercase tracking-wide">Revenue</span>
                    </div>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                      {company.revenueRange}
                    </Badge>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-3 w-3 text-slate-500" />
                      <span className="text-sm font-medium text-slate-600 uppercase tracking-wide">Employees</span>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                      {company.employeeRange}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Executive Summary */}
        <Card className="metric-card rounded-2xl p-10 mb-12 enterprise-shadow-lg">
          <CardContent className="p-0">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                <ChartLine className="h-5 w-5 text-slate-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Executive Summary</h2>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-700 leading-relaxed">
                {executiveSummary.company_position}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Overview Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="text-center p-4 bg-slate-50 border border-slate-200">
            <CardContent className="p-0">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Cloud className="h-5 w-5 text-blue-500" />
              </div>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">Cloud Adoption</p>
              <p className="font-medium text-xl text-slate-900 mb-1">Advanced</p>
              <p className="text-xs text-slate-600">AWS + Azure Hybrid</p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-4 bg-slate-50 border border-slate-200">
            <CardContent className="p-0">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Shield className="h-5 w-5 text-green-500" />
              </div>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">Security Posture</p>
              <p className="font-medium text-xl text-slate-900 mb-1">Strong</p>
              <p className="text-xs text-slate-600">Enterprise SIEM</p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-4 bg-slate-50 border border-slate-200">
            <CardContent className="p-0">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <DollarSign className="h-5 w-5 text-purple-500" />
              </div>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">Investment Required</p>
              <p className="font-medium text-xl text-slate-900 mb-1">{results.investment_required}</p>
              <p className="text-xs text-slate-600">ROI: {results.expected_roi}</p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-4 bg-slate-50 border border-slate-200">
            <CardContent className="p-0">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Zap className="h-5 w-5 text-orange-500" />
              </div>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">Opportunities</p>
              <p className="font-medium text-xl text-slate-900 mb-1">{results.top_opportunities.length}</p>
              <p className="text-xs text-slate-600">High-value targets</p>
            </CardContent>
          </Card>
        </div>

        {/* Primary Recommendation */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white rounded-2xl mb-8 overflow-hidden border border-slate-700/50">
          <div className="relative p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Zap className="h-5 w-5 text-yellow-500" />
                </div>
                <h2 className="text-xl font-medium text-white">Primary Recommendation</h2>
              </div>
              
              <div className="bg-white/8 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <p className="text-base leading-relaxed text-slate-100 mb-6">
                  <span className="font-medium text-white">{company.name}</span> is using{" "}
                  <span className="font-medium text-white">Microsoft Azure</span> for{" "}
                  <span className="font-medium text-white">cloud infrastructure</span>, you should{" "}
                  <span className="font-medium text-white">cross-sell {results.top_opportunities[0].product}</span> to enhance their existing Azure security posture 
                  and address critical gaps in real-time threat detection.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                    <p className="text-sm font-medium text-slate-300 mb-2">Estimated Value</p>
                    <p className="text-lg font-medium text-white mb-1">{results.top_opportunities[0].estimated_value}</p>
                    <p className="text-xs text-slate-400">Annual Recurring Revenue</p>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                    <p className="text-sm font-medium text-slate-300 mb-2">Implementation</p>
                    <p className="text-lg font-medium text-white mb-1">3-6 months</p>
                    <p className="text-xs text-slate-400">Timeline</p>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                    <p className="text-sm font-medium text-slate-300 mb-2">Confidence</p>
                    <p className="text-lg font-medium text-white mb-1">{metadata.confidence_scores.strategy}%</p>
                    <p className="text-xs text-slate-400">Success Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Analysis */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Technology Stack */}
          <Card className="metric-card rounded-2xl p-8 enterprise-shadow-lg">
            <CardContent className="p-0">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                  <Building2 className="h-5 w-5 text-slate-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Technology Stack</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h4 className="font-semibold text-slate-900 mb-2">Cloud Infrastructure</h4>
                  <div className="flex flex-wrap gap-2">
                    {metadata.technology_stack.cloud["IT Infrastructure"].map((tech, index) => (
                      <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <h4 className="font-semibold text-slate-900 mb-2">Security & Compliance</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">Enterprise SIEM</Badge>
                    <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">SOX Compliance</Badge>
                    <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">PCI-DSS</Badge>
                  </div>
                </div>
                
                <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                  <h4 className="font-semibold text-slate-900 mb-2">Development & Analytics</h4>
                  <div className="flex flex-wrap gap-2">
                    {metadata.technology_stack.development.Development.slice(0, 3).map((tech, index) => (
                      <Badge key={index} variant="secondary" className="bg-purple-100 text-purple-800 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Analysis Progress */}
          <Card className="metric-card rounded-2xl p-8 enterprise-shadow-lg">
            <CardContent className="p-0">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                  <ChartLine className="h-5 w-5 text-slate-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Analysis Confidence</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-slate-700">Infrastructure Analysis</span>
                    <span className="text-sm text-slate-500">{metadata.confidence_scores.infrastructure}%</span>
                  </div>
                  <Progress value={metadata.confidence_scores.infrastructure} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-slate-700">Pattern Recognition</span>
                    <span className="text-sm text-slate-500">{metadata.confidence_scores.pattern}%</span>
                  </div>
                  <Progress value={metadata.confidence_scores.pattern} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-slate-700">Strategic Recommendations</span>
                    <span className="text-sm text-slate-500">{metadata.confidence_scores.strategy}%</span>
                  </div>
                  <Progress value={metadata.confidence_scores.strategy} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Revenue Opportunities */}
        <Card className="metric-card rounded-2xl p-8 mb-12 enterprise-shadow-lg">
          <CardContent className="p-0">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                <DollarSign className="h-5 w-5 text-slate-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Revenue Opportunities</h3>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-6">
              {results.top_opportunities.map((opportunity, index) => {
                const bgColors = ["bg-gradient-to-br from-blue-50 to-blue-100", "bg-gradient-to-br from-green-50 to-green-100", "bg-gradient-to-br from-purple-50 to-purple-100"];
                const borderColors = ["border-blue-200", "border-green-200", "border-purple-200"];
                const badgeColors = ["bg-blue-500", "bg-green-500", "bg-purple-500"];
                const textColors = ["text-blue-700", "text-green-700", "text-purple-700"];
                const valueColors = ["text-blue-600", "text-green-600", "text-purple-600"];

                return (
                  <div key={index} className={`${bgColors[index]} rounded-xl p-6 border ${borderColors[index]}`}>
                    <div className="flex items-center justify-between mb-4">
                      <Badge className={`${badgeColors[index]} text-white text-xs font-medium`}>
                        {opportunity.category}
                      </Badge>
                      <span className={`text-sm font-medium ${textColors[index]}`}>{opportunity.priority} Priority</span>
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{opportunity.product}</h4>
                    <p className="text-sm text-slate-600 mb-4">{opportunity.rationale}</p>
                    <div className={`text-lg font-bold ${valueColors[index]}`}>{opportunity.estimated_value}</div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">Ready to Get Your Custom Analysis?</h2>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            See how our AI-powered insights can transform your sales process and uncover hidden revenue opportunities.
          </p>
          <Link href="/contact">
            <Button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 text-base font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
              Schedule Your Demo
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
