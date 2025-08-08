import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Target, Users, Database, TrendingUp, Mail, Globe } from "lucide-react";

export default function SnowflakeOnePager() {
  return (
    <div className="min-h-screen bg-white text-slate-900 print:bg-white">
      {/* Print-specific styles */}
      <style>{`
        @media print {
          body { margin: 0; padding: 0; }
          .no-print { display: none !important; }
          .print-page { page-break-after: always; }
          .print-break { page-break-inside: avoid; }
          * { color-adjust: exact !important; }
        }
      `}</style>

      <div className="max-w-4xl mx-auto p-8 print:p-6 print:max-w-none">
        {/* Header */}
        <div className="text-center mb-12 print-break">
          <div className="mb-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
              <span className="font-medium" style={{ fontFamily: 'Neue Haas Grotesk, Inter, sans-serif', letterSpacing: '-0.02em' }}>
                eazy
              </span>rev Lead Generation Engine
            </h1>
            <div className="text-xl text-slate-600 font-medium mb-2">for Snowflake Services</div>
          </div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Sell to the right companies, at the right time, with the right message.
          </p>
        </div>

        {/* Key Value Proposition */}
        <Card className="mb-8 border border-slate-200 shadow-lg print-break">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Target className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-slate-900">Technology Compatibility = Better Deals, Faster</h2>
            </div>
            <p className="text-base text-slate-700 leading-relaxed">
              You don't need more volume — you need better precision. We help you zero in on customers that are the right 
              technological fit for your services — whether it's Snowflake migration, data modernization, or orchestration. That 
              means more strategic conversations, faster momentum, and stronger win rates.
            </p>
          </CardContent>
        </Card>

        {/* Targeting Section */}
        <Card className="mb-8 border border-slate-200 shadow-lg print-break">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="h-6 w-6 text-emerald-600" />
              <h2 className="text-2xl font-bold text-slate-900">Unlock a New Level of Targeting</h2>
            </div>
            <p className="text-base text-slate-700 leading-relaxed mb-6">
              Even the best GTM teams only see part of the picture. We bring technographic visibility to the front of your sales 
              motion — so your team focuses on accounts with the right signals, timing, and people in place to make the deal real.
            </p>
            
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-3">What Are Technographics?</h3>
              <p className="text-slate-700 leading-relaxed">
                <strong>Technographics = a company's tech DNA</strong> — what software and systems they've adopted, how those tools work 
                together, and where there's room to grow. We scan for patterns that align with your offering — then surface organizations 
                already positioned to benefit from your services. We pair that with decision-maker and influencer data, so your team 
                connects with the right people, not just the right companies.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* What You Get */}
        <Card className="mb-8 border border-slate-200 shadow-lg print-break">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-slate-900">What You Get</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-slate-700">20 high-fit accounts tailored to your ICP</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-slate-700">Contact info for buyers, influencers, and operators</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-slate-700">Technographic insights that show why the account is a match</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-slate-700">Conversation starters your team can use immediately</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What We Look For */}
        <Card className="mb-8 border border-slate-200 shadow-lg print-break">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Database className="h-6 w-6 text-emerald-600" />
              <h2 className="text-2xl font-bold text-slate-900">What We Look For (Snowflake Focused)</h2>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                <span className="text-slate-700">Companies on legacy platforms like SQL Server, Oracle, or Teradata</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                <span className="text-slate-700">Organizations with Snowflake deployed, but no orchestration layer</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                <span className="text-slate-700">BI platforms like Tableau or Power BI without a cloud-native backend</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                <span className="text-slate-700">Hiring signals — data architects, engineers, or analytics leadership</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                <span className="text-slate-700">Evidence of modernization, transformation, or cloud momentum</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Example Opportunities */}
        <Card className="mb-8 border border-slate-200 shadow-lg print-break">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Example Opportunities</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-bold text-slate-900 mb-2">Platform Modernization Signal:</h3>
                <p className="text-slate-700">A regional healthcare provider still using SQL Server + SSIS. Recently opened a search for a Data Platform Architect with Snowflake experience.</p>
              </div>
              <div className="border-l-4 border-emerald-500 pl-4">
                <h3 className="font-bold text-slate-900 mb-2">Pipeline Optimization Signal:</h3>
                <p className="text-slate-700">A retail company using Snowflake for reporting, but still running legacy batch ingestion pipelines. Hiring data engineers with dbt and Fivetran experience.</p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="font-bold text-slate-900 mb-2">Modeling & Insights Signal:</h3>
                <p className="text-slate-700">A fintech firm running Snowflake + Tableau, but with no modeling layer (no dbt). Recently posted a 'Head of Data Insights' role focused on decision automation.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pricing */}
        <Card className="mb-8 border border-slate-200 shadow-lg print-break">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Pricing</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center p-6 border border-slate-200 rounded-lg">
                <div className="text-3xl font-bold text-slate-900 mb-2">$4,500</div>
                <p className="text-slate-600">20 leads for one ICP</p>
              </div>
              <div className="text-center p-6 border border-slate-200 rounded-lg">
                <div className="text-3xl font-bold text-slate-900 mb-2">$7,500</div>
                <p className="text-slate-600">20 leads for two ICPs</p>
              </div>
            </div>
            <p className="text-center text-slate-700 mt-4">
              Every lead includes contact info, tech insights, and tailored messaging guidance.
            </p>
          </CardContent>
        </Card>

        {/* Perfect For Teams */}
        <Card className="mb-8 border border-slate-200 shadow-lg print-break">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-slate-900">Perfect For Teams That Offer:</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-4 w-4 text-emerald-500" />
                <span className="text-slate-700">Modern Data Platform Design & Delivery</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-4 w-4 text-emerald-500" />
                <span className="text-slate-700">Data Engineering & Ingestion Pipeline Buildout</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-4 w-4 text-emerald-500" />
                <span className="text-slate-700">Semantic & Analytical Data Modeling</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-4 w-4 text-emerald-500" />
                <span className="text-slate-700">Snowflake Implementation & Optimization</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-4 w-4 text-emerald-500" />
                <span className="text-slate-700">DataOps & ML Platform Scaling</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-4 w-4 text-emerald-500" />
                <span className="text-slate-700">Building High-Functioning Data Teams</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-4 w-4 text-emerald-500" />
                <span className="text-slate-700">Generating Actionable Business Insights</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card className="border border-slate-200 shadow-lg">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Let's Talk</h2>
            <p className="text-lg text-slate-600 mb-6">Your next best customers are out there — We'll help you find them.</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-600" />
                <a href="mailto:ashwin@eazy.systems" className="text-blue-600 hover:text-blue-700 font-medium">
                  ashwin@eazy.systems
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="h-5 w-5 text-blue-600" />
                <a href="https://eazyrev.ai" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium">
                  eazyrev.ai
                </a>
              </div>
            </div>

            <div className="mt-8 no-print">
              <Button 
                onClick={() => window.print()} 
                className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 text-base font-medium rounded-xl shadow-lg"
              >
                Print or Save as PDF
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}