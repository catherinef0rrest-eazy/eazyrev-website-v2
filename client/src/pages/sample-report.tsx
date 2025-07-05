import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CalendlyInline } from "@/components/calendly-inline";
import { 
  ExternalLink, 
  Building2, 
  Phone, 
  MapPin, 
  DollarSign, 
  Users, 
  ChartLine, 
  Shield, 
  Cloud, 
  Zap,
  TrendingUp,
  Database,
  AlertTriangle,
  CheckCircle,
  Calendar,
  Target,
  Server,
  Activity,
  Code,
  MessageSquare,
  BarChart3,
  Network
} from "lucide-react";
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
        <Card className="metric-card rounded-2xl p-8 mb-12 enterprise-shadow-lg bg-white border border-slate-200">
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
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed">
                TechForward Regional Bank demonstrates sophisticated technology adoption that significantly exceeds typical community bank standards, with advanced cloud 
                infrastructure (AWS/Azure), enterprise-grade security, and modern DevOps practices. However, critical gaps exist in customer-facing digital banking platforms and real-time 
                analytics capabilities that could limit competitive positioning. The bank is positioned as a "Progressive Adopter" in the regional banking sector.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Overview Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="text-center p-6 bg-slate-50 border border-slate-200">
            <CardContent className="p-0">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Cloud className="h-6 w-6 text-blue-500" />
              </div>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">Cloud Adoption</p>
              <p className="font-bold text-2xl text-slate-900 mb-1">Advanced</p>
              <p className="text-xs text-slate-600">AWS + Azure Hybrid</p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6 bg-slate-50 border border-slate-200">
            <CardContent className="p-0">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-green-500" />
              </div>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">Security Posture</p>
              <p className="font-bold text-2xl text-slate-900 mb-1">Strong</p>
              <p className="text-xs text-slate-600">Enterprise SIEM</p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6 bg-slate-50 border border-slate-200">
            <CardContent className="p-0">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-6 w-6 text-purple-500" />
              </div>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">Investment Required</p>
              <p className="font-bold text-2xl text-slate-900 mb-1">$2.5M-4.2M</p>
              <p className="text-xs text-slate-600">ROI: 18-24 months</p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6 bg-slate-50 border border-slate-200">
            <CardContent className="p-0">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-orange-500" />
              </div>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">Opportunities</p>
              <p className="font-bold text-2xl text-slate-900 mb-1">3</p>
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
                <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
                  <Zap className="h-5 w-5 text-yellow-900" />
                </div>
                <h2 className="text-xl font-medium text-white">Primary Recommendation</h2>
              </div>
              
              <div className="bg-white/8 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <p className="text-base leading-relaxed text-slate-100 mb-6">
                  TechForward Regional Bank is using Microsoft Azure for cloud infrastructure, you should cross-sell Microsoft Defender for Cloud to enhance their 
                  existing Azure security posture and address critical gaps in real-time threat detection.
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
        </div>

        {/* Actionable Seller Recommendations */}
        <Card className="metric-card rounded-2xl p-8 mb-12 enterprise-shadow-lg">
          <CardContent className="p-0">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-slate-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Actionable Seller Recommendations</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Cross-sell Opportunity */}
              <Card className="bg-white border border-slate-200 rounded-xl p-6">
                <CardContent className="p-0">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm text-slate-700 font-medium">Cross-sell Opportunity</span>
                    <Badge className="bg-green-500 text-white text-xs">HIGH</Badge>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-3">Microsoft Defender for Cloud</h4>
                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-xs text-slate-500 font-medium">• BUSINESS RATIONALE</p>
                      <p className="text-sm text-slate-700">Enhance existing Azure security posture</p>
                    </div>
                  </div>
                  <div className="bg-green-50 rounded p-3">
                    <p className="text-xs text-green-600 font-medium">• REVENUE IMPACT</p>
                    <p className="text-sm text-slate-900 font-semibold">$150K-250K ARR</p>
                  </div>
                </CardContent>
              </Card>

              {/* Upsell Opportunity */}
              <Card className="bg-white border border-slate-200 rounded-xl p-6">
                <CardContent className="p-0">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <TrendingUp className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm text-slate-700 font-medium">Upsell Opportunity</span>
                    <Badge className="bg-blue-500 text-white text-xs">MEDIUM</Badge>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-3">AWS Analytics Suite</h4>
                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-xs text-slate-500 font-medium">• BUSINESS RATIONALE</p>
                      <p className="text-sm text-slate-700">Address real-time analytics gap</p>
                    </div>
                  </div>
                  <div className="bg-blue-50 rounded p-3">
                    <p className="text-xs text-blue-600 font-medium">• REVENUE IMPACT</p>
                    <p className="text-sm text-slate-900 font-semibold">$200K-350K ARR</p>
                  </div>
                </CardContent>
              </Card>

              {/* Co-sell Opportunity */}
              <Card className="bg-white border border-slate-200 rounded-xl p-6">
                <CardContent className="p-0">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                      <Users className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm text-slate-700 font-medium">Co-sell Opportunity</span>
                    <Badge className="bg-purple-500 text-white text-xs">MEDIUM</Badge>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-3">Fintech Partnership Platform</h4>
                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-xs text-slate-500 font-medium">• BUSINESS RATIONALE</p>
                      <p className="text-sm text-slate-700">Enable third-party integrations</p>
                    </div>
                  </div>
                  <div className="bg-purple-50 rounded p-3">
                    <p className="text-xs text-purple-600 font-medium">• REVENUE IMPACT</p>
                    <p className="text-sm text-slate-900 font-semibold">$100K-200K ARR</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Critical Technology Gaps */}
        <Card className="metric-card rounded-2xl p-8 mb-12 enterprise-shadow-lg">
          <CardContent className="p-0">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <AlertTriangle className="h-5 w-5 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Critical Technology Gaps</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Cloud Infrastructure Gap */}
              <Card className="bg-white border border-slate-200 rounded-xl p-6">
                <CardContent className="p-0">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <Cloud className="h-4 w-4 text-blue-500" />
                    </div>
                    <span className="text-sm font-medium text-slate-700">Cloud Infrastructure & Platforms</span>
                    <Badge className="bg-red-500 text-white text-xs">HIGH</Badge>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-4">Limited digital banking customer experience</h4>
                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-xs text-slate-500 font-medium">• IMPACT AREA</p>
                      <p className="text-sm text-slate-700">Customer Experience</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium">• GAP ANALYSIS</p>
                      <p className="text-sm text-slate-700">Missing modern digital banking interface and mobile-first customer experience platform.</p>
                    </div>
                  </div>
                  <div className="bg-red-50 rounded p-3">
                    <p className="text-xs text-red-600 font-medium">• RECOMMENDED ACTION</p>
                    <p className="text-sm text-slate-700">Implement comprehensive digital banking solution</p>
                  </div>
                </CardContent>
              </Card>

              {/* Integration & API Management Gap */}
              <Card className="bg-white border border-slate-200 rounded-xl p-6">
                <CardContent className="p-0">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                      <Network className="h-4 w-4 text-orange-500" />
                    </div>
                    <span className="text-sm font-medium text-slate-700">Integration & API Management</span>
                    <Badge className="bg-red-500 text-white text-xs">HIGH</Badge>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-4">Insufficient real-time analytics capabilities</h4>
                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-xs text-slate-500 font-medium">• IMPACT AREA</p>
                      <p className="text-sm text-slate-700">Regulatory Compliance</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium">• GAP ANALYSIS</p>
                      <p className="text-sm text-slate-700">Limited API infrastructure for third-party integrations and open banking compliance requirements.</p>
                    </div>
                  </div>
                  <div className="bg-red-50 rounded p-3">
                    <p className="text-xs text-red-600 font-medium">• RECOMMENDED ACTION</p>
                    <p className="text-sm text-slate-700">Deploy enterprise API gateway and management platform</p>
                  </div>
                </CardContent>
              </Card>

              {/* Analytics & Intelligence Gap */}
              <Card className="bg-white border border-slate-200 rounded-xl p-6">
                <CardContent className="p-0">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                      <BarChart3 className="h-4 w-4 text-purple-500" />
                    </div>
                    <span className="text-sm font-medium text-slate-700">Analytics & Intelligence</span>
                    <Badge className="bg-orange-500 text-white text-xs">MEDIUM</Badge>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-4">API management and open banking readiness</h4>
                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-xs text-slate-500 font-medium">• IMPACT AREA</p>
                      <p className="text-sm text-slate-700">Risk Management</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium">• GAP ANALYSIS</p>
                      <p className="text-sm text-slate-700">Insufficient real-time processing capabilities for fraud prevention and customer analytics.</p>
                    </div>
                  </div>
                  <div className="bg-orange-50 rounded p-3">
                    <p className="text-xs text-orange-600 font-medium">• RECOMMENDED ACTION</p>
                    <p className="text-sm text-slate-700">Integrate real-time analytics and fraud detection system</p>
                  </div>
                </CardContent>
              </Card>

              {/* Data Management Gap */}
              <Card className="bg-white border border-slate-200 rounded-xl p-6">
                <CardContent className="p-0">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <Database className="h-4 w-4 text-green-500" />
                    </div>
                    <span className="text-sm font-medium text-slate-700">Data Management & Storage</span>
                    <Badge className="bg-orange-500 text-white text-xs">MEDIUM</Badge>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-4">Customer data platform fragmentation</h4>
                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-xs text-slate-500 font-medium">• IMPACT AREA</p>
                      <p className="text-sm text-slate-700">Data Strategy</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium">• GAP ANALYSIS</p>
                      <p className="text-sm text-slate-700">Fragmented customer data platforms limiting unified view and personalization capabilities.</p>
                    </div>
                  </div>
                  <div className="bg-orange-50 rounded p-3">
                    <p className="text-xs text-orange-600 font-medium">• RECOMMENDED ACTION</p>
                    <p className="text-sm text-slate-700">Consolidate customer data into unified platform</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Current Technology Stack */}
        <Card className="metric-card rounded-2xl p-8 mb-12 enterprise-shadow-lg">
          <CardContent className="p-0">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                <Server className="h-5 w-5 text-slate-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Current Technology Stack</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Cloud Infrastructure & Platforms */}
              <Card className="bg-white border border-slate-200 rounded-xl p-6">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Cloud className="h-4 w-4 text-blue-500" />
                    </div>
                    <h4 className="font-bold text-slate-900">Cloud Infrastructure & Platforms</h4>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-2">IT Infrastructure</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">AWS EC2</Badge>
                        <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">Azure Virtual Machines</Badge>
                        <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">VMware ESXi</Badge>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-2">Hosting</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">AWS</Badge>
                        <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">Microsoft Azure</Badge>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-2">Cloud Computing Platforms</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">AWS Lambda</Badge>
                        <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">Azure Functions</Badge>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-2">Content Delivery Network (CDN)</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">Cloudflare</Badge>
                        <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">Amazon CloudFront</Badge>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-2">Virtual Private Cloud (VPC)</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">AWS VPC</Badge>
                        <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">Azure Virtual Network</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Data Management & Storage */}
              <Card className="bg-white border border-slate-200 rounded-xl p-6">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <Database className="h-4 w-4 text-green-500" />
                    </div>
                    <h4 className="font-bold text-slate-900">Data Management & Storage</h4>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold text-green-600 uppercase tracking-wide mb-2">Database Software</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">SQL Server</Badge>
                        <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">Oracle Database</Badge>
                        <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">PostgreSQL</Badge>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-xs font-semibold text-green-600 uppercase tracking-wide mb-2">Data Warehouse</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">Amazon Redshift</Badge>
                        <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">Azure Synapse</Badge>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-xs font-semibold text-green-600 uppercase tracking-wide mb-2">Big Data</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">Apache Hadoop</Badge>
                        <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">Spark</Badge>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-xs font-semibold text-green-600 uppercase tracking-wide mb-2">NoSQL Databases</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">Redis</Badge>
                        <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">MongoDB</Badge>
                        <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">DynamoDB</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Analytics & Intelligence */}
              <Card className="bg-white border border-slate-200 rounded-xl p-6">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <BarChart3 className="h-4 w-4 text-purple-500" />
                    </div>
                    <h4 className="font-bold text-slate-900">Analytics & Intelligence</h4>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold text-purple-600 uppercase tracking-wide mb-2">Analytics Tools & Software</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-xs bg-purple-50 text-purple-700 border-purple-200">Tableau</Badge>
                        <Badge variant="outline" className="text-xs bg-purple-50 text-purple-700 border-purple-200">Power BI</Badge>
                        <Badge variant="outline" className="text-xs bg-purple-50 text-purple-700 border-purple-200">Python Analytics</Badge>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-xs font-semibold text-purple-600 uppercase tracking-wide mb-2">Business Intelligence</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-xs bg-purple-50 text-purple-700 border-purple-200">IBM Cognos</Badge>
                        <Badge variant="outline" className="text-xs bg-purple-50 text-purple-700 border-purple-200">Microsoft BI</Badge>
                        <Badge variant="outline" className="text-xs bg-purple-50 text-purple-700 border-purple-200">Qlik Sense</Badge>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-xs font-semibold text-purple-600 uppercase tracking-wide mb-2">Artificial Intelligence</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-xs bg-purple-50 text-purple-700 border-purple-200">Azure AI</Badge>
                        <Badge variant="outline" className="text-xs bg-purple-50 text-purple-700 border-purple-200">AWS Machine Learning</Badge>
                        <Badge variant="outline" className="text-xs bg-purple-50 text-purple-700 border-purple-200">TensorFlow</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Additional Technology Categories */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {/* Integration & API Management */}
              <Card className="bg-white border border-slate-200 rounded-xl p-6">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Network className="h-4 w-4 text-orange-500" />
                    </div>
                    <h4 className="font-bold text-slate-900">Integration & API Management</h4>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold text-orange-600 uppercase tracking-wide mb-2">Data Integration Tools</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-xs bg-orange-50 text-orange-700 border-orange-200">Azure Data Factory</Badge>
                        <Badge variant="outline" className="text-xs bg-orange-50 text-orange-700 border-orange-200">AWS Glue</Badge>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-xs font-semibold text-orange-600 uppercase tracking-wide mb-2">API Management</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-xs bg-orange-50 text-orange-700 border-orange-200">Azure API Management</Badge>
                        <Badge variant="outline" className="text-xs bg-orange-50 text-orange-700 border-orange-200">AWS API Gateway</Badge>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-xs font-semibold text-orange-600 uppercase tracking-wide mb-2">API Design</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-xs bg-orange-50 text-orange-700 border-orange-200">Plaid API</Badge>
                        <Badge variant="outline" className="text-xs bg-orange-50 text-orange-700 border-orange-200">RESTful APIs</Badge>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-xs font-semibold text-orange-600 uppercase tracking-wide mb-2">Cross-Stack Integration Technologies</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-xs bg-orange-50 text-orange-700 border-orange-200">MuleSoft</Badge>
                        <Badge variant="outline" className="text-xs bg-orange-50 text-orange-700 border-orange-200">Zapier</Badge>
                        <Badge variant="outline" className="text-xs bg-orange-50 text-orange-700 border-orange-200">Microsoft Power Automate</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Development & Operations */}
              <Card className="bg-white border border-slate-200 rounded-xl p-6">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <Code className="h-4 w-4 text-yellow-600" />
                    </div>
                    <h4 className="font-bold text-slate-900">Development & Operations</h4>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold text-yellow-600 uppercase tracking-wide mb-2">Development</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-xs bg-yellow-50 text-yellow-700 border-yellow-200">Node.js</Badge>
                        <Badge variant="outline" className="text-xs bg-yellow-50 text-yellow-700 border-yellow-200">Python</Badge>
                        <Badge variant="outline" className="text-xs bg-yellow-50 text-yellow-700 border-yellow-200">React</Badge>
                        <Badge variant="outline" className="text-xs bg-yellow-50 text-yellow-700 border-yellow-200">Angular</Badge>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-xs font-semibold text-yellow-600 uppercase tracking-wide mb-2">DevOps</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-xs bg-yellow-50 text-yellow-700 border-yellow-200">Jenkins</Badge>
                        <Badge variant="outline" className="text-xs bg-yellow-50 text-yellow-700 border-yellow-200">Ansible</Badge>
                        <Badge variant="outline" className="text-xs bg-yellow-50 text-yellow-700 border-yellow-200">Terraform</Badge>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-xs font-semibold text-yellow-600 uppercase tracking-wide mb-2">CI/CD Tools</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-xs bg-yellow-50 text-yellow-700 border-yellow-200">GitHub Actions</Badge>
                        <Badge variant="outline" className="text-xs bg-yellow-50 text-yellow-700 border-yellow-200">Azure DevOps</Badge>
                        <Badge variant="outline" className="text-xs bg-yellow-50 text-yellow-700 border-yellow-200">Docker</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">Get Your Custom Technology Analysis</h2>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Schedule a demo to see how eazyrev can transform your tech sales process with detailed insights like this.
          </p>
        </div>

        {/* Calendly Widget */}
        <CalendlyInline 
          url="https://calendly.com/ashwin-eazy/eazy-strategy-call"
          height="700px"
          className="w-full"
        />
      </div>
    </div>
  );
}
