import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendlyInline } from "@/components/calendly-inline";
import { 
  TrendingUp, 
  Shield, 
  Cloud, 
  Database, 
  AlertTriangle, 
  CheckCircle,
  DollarSign,
  Calendar,
  Target,
  Zap,
  Server,
  Activity,
  Code,
  MessageSquare,
  BarChart3,
  Network,
  Building2,
  MapPin,
  Users,
  ExternalLink,
  Phone
} from "lucide-react";
import sampleData from "@/data/sample-analysis.json";

export default function SampleAnalysis() {

  const [progressValues, setProgressValues] = useState({
    infrastructure: 0,
    pattern: 0,
    strategy: 0,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgressValues({
        infrastructure: 85,
        pattern: 85,
        strategy: 92,
      });
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const data = sampleData[0];
  const company = data.company;
  const metadata = data.metadata;
  const results = data.results;
  const phase1 = data.analysis_outputs.phase_1_infrastructure.output;
  const phase2 = data.analysis_outputs.phase_2_patterns.output;
  const phase3 = data.analysis_outputs.phase_3_strategy.output;



  return (
    <div className="landing-backdrop">
      <div className="landing-content max-w-7xl mx-auto px-6 pt-20 pb-16 fade-in min-h-screen">
        {/* Page Header */}
      <div className="text-center mb-16">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-slate-100 text-slate-700 text-sm font-medium rounded-full mb-4">
            Sample Technology Intelligence Report
          </span>
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900 tracking-tight leading-tight">
          Sales Insights Made Eazy
        </h1>
        <p className="text-xl text-slate-600 mb-6 leading-relaxed max-w-4xl mx-auto">
          This sample analysis for {company.name} demonstrates how our AI-powered insights engine surfaces high-value cross-sell, upsell, and net new opportunities in minutes, not weeks.
        </p>

        <Button 
          onClick={() => {
            const contactForm = document.querySelector('#contact-form');
            contactForm?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 text-base font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
        >
          Get Your Custom Analysis
        </Button>
      </div>

      {/* Company Account Summary */}
      <Card className="metric-card rounded-2xl p-8 mb-12 enterprise-shadow-lg bg-slate-50/50 border border-slate-200">
        <CardContent className="p-0">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Company Identity */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">
                    {company.name.charAt(0)}
                  </span>
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
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Building2 className="w-5 h-5 text-slate-500" />
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
                    <MapPin className="w-4 h-4 text-slate-500" />
                    <span className="text-sm font-medium text-slate-600 uppercase tracking-wide">Location</span>
                  </div>
                  <p className="text-slate-900 font-medium">
                    {company.city}, {company.state}
                  </p>
                  <p className="text-sm text-slate-600">
                    {company.country} {company.postalCode}
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Phone className="w-4 h-4 text-slate-500" />
                    <span className="text-sm font-medium text-slate-600 uppercase tracking-wide">Phone</span>
                  </div>
                  <p className="text-slate-900 font-medium">
                    {company.phone}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-4 h-4 text-slate-500" />
                    <span className="text-sm font-medium text-slate-600 uppercase tracking-wide">Revenue</span>
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-100">
                    {company.revenueRange}
                  </Badge>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4 text-slate-500" />
                    <span className="text-sm font-medium text-slate-600 uppercase tracking-wide">Employees</span>
                  </div>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-100">
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
        <CardHeader className="p-0 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-slate-600" />
            </div>
            <CardTitle className="text-2xl font-bold text-slate-900 tracking-tight">
              Executive Summary
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-gray-700 leading-relaxed">
              {phase3.executive_summary.company_position}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Overview Cards */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <div className="text-center p-4 bg-slate-50 rounded-xl border border-slate-200">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Cloud className="w-5 h-5 text-blue-500" />
          </div>
          <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">Cloud Adoption</p>
          <p className="font-medium text-xl text-slate-900 mb-1">Advanced</p>
          <p className="text-xs text-slate-600">AWS + Azure Hybrid</p>
        </div>
        
        <div className="text-center p-4 bg-slate-50 rounded-xl border border-slate-200">
          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Shield className="w-5 h-5 text-green-500" />
          </div>
          <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">Security Posture</p>
          <p className="font-medium text-xl text-slate-900 mb-1">Strong</p>
          <p className="text-xs text-slate-600">Enterprise SIEM</p>
        </div>
        
        <div className="text-center p-4 bg-slate-50 rounded-xl border border-slate-200">
          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
            <DollarSign className="w-5 h-5 text-purple-500" />
          </div>
          <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">Investment Required</p>
          <p className="font-medium text-xl text-slate-900 mb-1">$2.5M-4.2M</p>
          <p className="text-xs text-slate-600">ROI: 18-24 months</p>
        </div>
        
        <div className="text-center p-4 bg-slate-50 rounded-xl border border-slate-200">
          <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Target className="w-5 h-5 text-orange-500" />
          </div>
          <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">Opportunities</p>
          <p className="font-medium text-xl text-slate-900 mb-1">3</p>
          <p className="text-xs text-slate-600">High-value targets</p>
        </div>
      </div>

      {/* Primary Recommendation */}
      <Card className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white rounded-2xl mb-8 overflow-hidden border border-slate-700/50">
        <div className="relative p-8">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-yellow-500" />
              </div>
              <h2 className="text-xl font-medium text-white">Primary Recommendation</h2>
            </div>
            
            <div className="bg-white/8 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <p className="text-base leading-relaxed text-slate-100 mb-6">
                <span className="font-medium text-white">{company.name}</span> is using <span className="font-medium text-white">Microsoft Azure</span> for{" "}
                <span className="font-medium text-white">cloud infrastructure</span>, you should{" "}
                <span className="font-medium text-white">cross-sell Microsoft Defender for Cloud</span> to enhance their existing Azure security posture 
                and address critical gaps in real-time threat detection.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                  <p className="text-sm font-medium text-slate-300 mb-2">Estimated Value</p>
                  <p className="text-lg font-medium text-white mb-1">$150K-250K</p>
                  <p className="text-xs text-slate-400">Annual Recurring Revenue</p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                  <p className="text-sm font-medium text-slate-300 mb-2">Implementation</p>
                  <p className="text-lg font-medium text-white mb-1">3-6 months</p>
                  <p className="text-xs text-slate-400">Timeline</p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                  <p className="text-sm font-medium text-slate-300 mb-2">Priority</p>
                  <p className="text-lg font-medium text-white mb-1">High</p>
                  <p className="text-xs text-slate-400">Business Impact</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Detailed Opportunities */}
      <div className="mb-8">
        <h2 className="text-lg font-medium mb-6 flex items-center gap-2 text-slate-900">
          <Target className="w-5 h-5" />
          Actionable Seller Recommendations
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {results.top_opportunities.map((opportunity, index) => {
            const priorityConfig = opportunity.priority === 'High' 
              ? { color: 'bg-gradient-to-r from-emerald-500 to-emerald-600', text: 'text-white', accent: 'bg-emerald-500', bgColor: 'bg-emerald-50' }
              : { color: 'bg-gradient-to-r from-blue-500 to-blue-600', text: 'text-white', accent: 'bg-blue-500', bgColor: 'bg-blue-50' };

            const getCategoryIcon = (category: string) => {
              switch (category.toLowerCase()) {
                case 'cross-sell':
                  return <Target className="w-4 h-4" />;
                case 'upsell':
                  return <TrendingUp className="w-4 h-4" />;
                case 'co-sell':
                  return <Users className="w-4 h-4" />;
                default:
                  return <DollarSign className="w-4 h-4" />;
              }
            };
            
            return (
              <Card key={index} className="group bg-white border border-slate-200/60 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-300 hover:-translate-y-0.5">
                <div className="relative">
                  {/* Top gradient accent */}
                  <div className={`h-1 ${priorityConfig.color}`}></div>
                  
                  {/* Integrated Category Header */}
                  <div className="px-6 pt-4 pb-2 border-b border-slate-100/80">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-slate-600">
                        <div className={`p-1.5 rounded-md ${priorityConfig.bgColor} ${priorityConfig.accent.replace('bg-', 'text-')}`}>
                          {getCategoryIcon(opportunity.category)}
                        </div>
                        <span className="text-sm font-medium text-slate-700">
                          {opportunity.category} Opportunity
                        </span>
                      </div>
                      <div className={`px-2.5 py-1 rounded-full text-xs font-medium ${priorityConfig.color} ${priorityConfig.text} whitespace-nowrap`}>
                        {opportunity.priority.toUpperCase()}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="font-medium text-lg text-slate-900 leading-tight">{opportunity.product}</h3>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center gap-1.5 mb-2">
                          <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                          <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                            Business Rationale
                          </span>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {opportunity.rationale}
                        </p>
                      </div>
                      
                      <div className={`${priorityConfig.bgColor} rounded-lg p-4 border border-slate-200/50`}>
                        <div className="flex items-center gap-1.5 mb-2">
                          <div className={`w-1.5 h-1.5 rounded-full ${priorityConfig.accent}`}></div>
                          <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                            Revenue Impact
                          </span>
                        </div>
                        <p className="text-base font-semibold text-slate-900">
                          {opportunity.estimated_value}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>


      {/* Critical Gaps */}
      <div className="mb-8">
        <h2 className="text-lg font-medium mb-6 flex items-center gap-2 text-slate-900">
          <AlertTriangle className="w-5 h-5" />
          Critical Technology Gaps
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {phase3.executive_summary.critical_gaps.map((gap: string, index: number) => {
            const gapInfo = [
              {
                severity: "High",
                impact: "Customer Experience",
                description: "Missing modern digital banking interface and mobile-first customer experience platform.",
                recommendation: "Implement comprehensive digital banking solution",
                category: "Cloud Infrastructure & Platforms",
                categoryColor: "bg-blue-100 text-blue-800"
              },
              {
                severity: "High", 
                impact: "Regulatory Compliance",
                description: "Limited API infrastructure for third-party integrations and open banking compliance requirements.",
                recommendation: "Deploy enterprise API gateway and management platform",
                category: "Integration & API Management",
                categoryColor: "bg-orange-100 text-orange-800"
              },
              {
                severity: "Medium",
                impact: "Risk Management",
                description: "Insufficient real-time processing capabilities for fraud prevention and customer analytics.",
                recommendation: "Integrate real-time analytics and fraud detection system",
                category: "Analytics & Intelligence",
                categoryColor: "bg-purple-100 text-purple-800"
              },
              {
                severity: "Medium",
                impact: "Data Strategy",
                description: "Fragmented customer data platforms limiting unified view and personalization capabilities.",
                recommendation: "Consolidate customer data into unified platform",
                category: "Data Management & Storage",
                categoryColor: "bg-green-100 text-green-800"
              },
            ];

            const info = gapInfo[index % gapInfo.length];
            const priorityConfig = info.severity === 'High' 
              ? { color: 'bg-gradient-to-r from-red-500 to-red-600', text: 'text-white', accent: 'bg-red-500' }
              : { color: 'bg-gradient-to-r from-amber-500 to-amber-600', text: 'text-white', accent: 'bg-amber-500' };

            // Get category icon based on category
            const getCategoryIcon = (category: string) => {
              switch (category) {
                case 'Cloud Infrastructure & Platforms':
                  return <Cloud className="w-4 h-4" />;
                case 'Data Management & Storage':
                  return <Database className="w-4 h-4" />;
                case 'Analytics & Intelligence':
                  return <BarChart3 className="w-4 h-4" />;
                case 'Integration & API Management':
                  return <Network className="w-4 h-4" />;
                case 'Development & Operations':
                  return <Code className="w-4 h-4" />;
                default:
                  return <Server className="w-4 h-4" />;
              }
            };

            return (
              <Card key={index} className="group bg-white border border-slate-200/60 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-300 hover:-translate-y-0.5">
                <div className="relative">
                  {/* Top gradient accent */}
                  <div className={`h-1 ${priorityConfig.color}`}></div>
                  
                  {/* Integrated Category Header */}
                  <div className="px-6 pt-4 pb-2 border-b border-slate-100/80">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-slate-600">
                        <div className={`p-1.5 rounded-md ${info.categoryColor.replace('text-', 'bg-').replace('800', '50')} ${info.categoryColor.replace('bg-', 'text-')}`}>
                          {getCategoryIcon(info.category)}
                        </div>
                        <span className="text-sm font-medium text-slate-500">
                          {info.category}
                        </span>
                      </div>
                      <div className={`px-2.5 py-1 rounded-full text-xs font-medium ${priorityConfig.color} ${priorityConfig.text} whitespace-nowrap`}>
                        {info.severity.toUpperCase()}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="font-medium text-lg text-slate-900 leading-tight">{gap}</h3>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center gap-1.5 mb-2">
                          <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                          <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                            Impact Area
                          </span>
                        </div>
                        <p className="text-sm font-medium text-slate-800">{info.impact}</p>
                      </div>
                      
                      <div>
                        <div className="flex items-center gap-1.5 mb-2">
                          <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                          <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                            Gap Analysis
                          </span>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {info.description}
                        </p>
                      </div>
                      
                      <div className="bg-slate-50 rounded-lg p-4 border border-slate-200/50">
                        <div className="flex items-center gap-1.5 mb-2">
                          <div className={`w-1.5 h-1.5 rounded-full ${priorityConfig.accent}`}></div>
                          <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                            Recommended Action
                          </span>
                        </div>
                        <p className="text-sm font-medium text-slate-800">
                          {info.recommendation}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Technology Stack */}
      <div className="mb-8">
        <h2 className="text-lg font-medium mb-6 flex items-center gap-2 text-slate-900">
          <Database className="w-5 h-5" />
          Current Technology Stack
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Cloud Infrastructure */}
          <Card className="bg-blue-50/50 border border-blue-200/60 rounded-xl p-6 shadow-md">
            <CardContent className="p-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Cloud className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg text-slate-900">
                  Cloud Infrastructure & Platforms
                </h3>
              </div>
              <div className="space-y-4">
                {Object.entries(metadata.technology_stack.cloud).map(([subcategory, products]: [string, string[]]) => (
                  <div key={subcategory}>
                    <h4 className="text-sm font-medium text-slate-700 uppercase tracking-wide mb-2">
                      {subcategory}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {products.map((product: string, index: number) => (
                        <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                          {product}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Data Management */}
          <Card className="bg-green-50/50 border border-green-200/60 rounded-xl p-6 shadow-md">
            <CardContent className="p-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Database className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg text-slate-900">
                  Data Management & Storage
                </h3>
              </div>
              <div className="space-y-4">
                {Object.entries(metadata.technology_stack.data).map(([subcategory, products]: [string, string[]]) => (
                  <div key={subcategory}>
                    <h4 className="text-sm font-medium text-slate-700 uppercase tracking-wide mb-2">
                      {subcategory}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {products.map((product: string, index: number) => (
                        <Badge key={index} variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-200">
                          {product}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Analytics */}
          <Card className="bg-purple-50/50 border border-purple-200/60 rounded-xl p-6 shadow-md">
            <CardContent className="p-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg text-slate-900">
                  Analytics & Intelligence
                </h3>
              </div>
              <div className="space-y-4">
                {Object.entries(metadata.technology_stack.analytics).map(([subcategory, products]: [string, string[]]) => (
                  <div key={subcategory}>
                    <h4 className="text-sm font-medium text-slate-700 uppercase tracking-wide mb-2">
                      {subcategory}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {products.map((product: string, index: number) => (
                        <Badge key={index} variant="secondary" className="bg-purple-100 text-purple-800 hover:bg-purple-200">
                          {product}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Integrations */}
          <Card className="bg-orange-50/50 border border-orange-200/60 rounded-xl p-6 shadow-md">
            <CardContent className="p-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Network className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-lg text-slate-900">
                  Integration & API Management
                </h3>
              </div>
              <div className="space-y-4">
                {Object.entries(metadata.technology_stack.integrations).map(([subcategory, products]: [string, string[]]) => (
                  <div key={subcategory}>
                    <h4 className="text-sm font-medium text-slate-700 uppercase tracking-wide mb-2">
                      {subcategory}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {products.map((product: string, index: number) => (
                        <Badge key={index} variant="secondary" className="bg-orange-100 text-orange-800 hover:bg-orange-200">
                          {product}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Development & DevOps */}
          <Card className="bg-yellow-50/50 border border-yellow-200/60 rounded-xl p-6 shadow-md">
            <CardContent className="p-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="font-semibold text-lg text-slate-900">
                  Development & Operations
                </h3>
              </div>
              <div className="space-y-4">
                {Object.entries(metadata.technology_stack.development).map(([subcategory, products]: [string, string[]]) => (
                  <div key={subcategory}>
                    <h4 className="text-sm font-medium text-slate-700 uppercase tracking-wide mb-2">
                      {subcategory}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {products.map((product: string, index: number) => (
                        <Badge key={index} variant="secondary" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
                          {product}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact-form" className="pt-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-3 text-slate-900 tracking-tight">
            Get Your Custom Technology Analysis
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
            Schedule a demo to see how eazyrev can transform your tech sales process with detailed insights like this.
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
