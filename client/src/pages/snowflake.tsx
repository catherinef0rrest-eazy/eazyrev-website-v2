import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { CalendlyInline } from "@/components/calendly-inline";
import snowflakeLogo from "@assets/snowflake-color.svg";
import { 
  Users, 
  Building2, 
  TrendingUp, 
  CheckCircle2,
  CircleDollarSign,
  BarChart3
} from "lucide-react";

export default function Snowflake() {
  return (
    <div className="landing-backdrop">
      <div className="landing-content max-w-5xl mx-auto px-6 pt-20 pb-16 page-transition">
        {/* Hero Section */}
        <div className="text-center mb-20 slide-up">
          <div className="mb-6 pt-10"></div>
          <div className="text-center">
            {/* Mobile: Logo above text */}
            <div className="block sm:hidden mb-4">
              <img src={snowflakeLogo} alt="Snowflake" className="h-12 w-auto mx-auto" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-slate-900 tracking-tight leading-tight lg:leading-[1.15]">
              Lead Generation Engine for<br />
              <span className="text-slate-700">
                {/* Desktop: Logo inline with text */}
                <span className="hidden sm:flex items-center justify-center gap-3">
                  <img src={snowflakeLogo} alt="Snowflake" className="h-8 sm:h-10 lg:h-12 w-auto" />
                  Snowflake Services
                </span>
                {/* Mobile: Text only */}
                <span className="block sm:hidden">
                  Snowflake Services
                </span>
              </span>
            </h1>
          </div>
          <p className="text-lg sm:text-xl text-slate-600 mb-6 max-w-3xl mx-auto leading-relaxed px-2">
            Sell to the right companies, at the right time, with the right message.
          </p>
        </div>

        {/* Value Proposition Cards */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="metric-card rounded-xl p-8 group card-hover-effect" style={{ animationDelay: '0.1s' }}>
            <CardContent className="p-0">
              <h3 className="text-lg sm:text-xl font-bold mb-4 text-slate-900 tracking-tight">
                Tech Compatibility = Better Deals, Faster
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                You don't need more volume — you need better precision. We help you zero in on customers that are the right 
                technological fit for your services — whether it's Snowflake migration, data modernization, or orchestration. That 
                means more strategic conversations, faster momentum, and stronger win rates.
              </p>
            </CardContent>
          </Card>

          <Card className="metric-card rounded-xl p-8 group card-hover-effect" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-0">
              <h3 className="text-lg sm:text-xl font-bold mb-4 text-slate-900 tracking-tight">
                Unlock a New Level of Targeting
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Even the best GTM teams only see part of the picture. We bring technographic visibility to the front of your sales 
                motion — so your team focuses on accounts with the right signals, timing, and people in place to make the deal real.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* What Are Technographics */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 text-center">
            What Are Technographics?
          </h2>
          <Card className="metric-card rounded-2xl p-8 enterprise-shadow-lg float-animation">
            <CardContent className="p-0">
              <div className="text-center mb-8">
                <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
                  <strong>Technographics = a company's tech DNA</strong> — what software and systems they've adopted, how those tools work 
                  together, and where there's room to grow.
                </p>
              </div>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto text-center">
                We scan for patterns that align with your offering — then surface organizations already positioned to benefit 
                from your services. We pair that with decision-maker and influencer data, so your team connects with the right 
                people, not just the right companies.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* What You Get */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 text-center">
            What You Get
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="metric-card rounded-xl p-6 group card-hover-effect" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-0 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <Building2 className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-slate-600 leading-relaxed text-sm">
                  <strong>20 high-fit accounts</strong> tailored to your ICP
                </p>
              </CardContent>
            </Card>

            <Card className="metric-card rounded-xl p-6 group card-hover-effect" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-0 text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors">
                  <Users className="h-6 w-6 text-emerald-600" />
                </div>
                <p className="text-slate-600 leading-relaxed text-sm">
                  <strong>Contact info</strong> for buyers, influencers, and operators
                </p>
              </CardContent>
            </Card>

            <Card className="metric-card rounded-xl p-6 group card-hover-effect" style={{ animationDelay: '0.3s' }}>
              <CardContent className="p-0 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <BarChart3 className="h-6 w-6 text-purple-600" />
                </div>
                <p className="text-slate-600 leading-relaxed text-sm">
                  <strong>Technographic insights</strong> that show why the account is a match
                </p>
              </CardContent>
            </Card>

            <Card className="metric-card rounded-xl p-6 group card-hover-effect" style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-0 text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition-colors">
                  <TrendingUp className="h-6 w-6 text-yellow-600" />
                </div>
                <p className="text-slate-600 leading-relaxed text-sm">
                  <strong>Conversation starters</strong> your team can use immediately
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* What We Look For */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 text-center">
            What We Look: <span className="text-slate-600">Snowflake Opportunity Signals</span>
          </h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {[
              "Companies on legacy platforms like SQL Server, Oracle, or Teradata",
              "Organizations with Snowflake deployed, but no orchestration layer",
              "BI platforms like Tableau or Power BI without a cloud-native backend",
              "Hiring signals — data architects, engineers, or analytics leadership",
              "Evidence of modernization, transformation, or cloud momentum"
            ].map((item, index) => (
              <Card key={index} className="metric-card rounded-xl p-6 group card-hover-effect" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
                <CardContent className="p-0 flex items-center justify-center text-center">
                  <CheckCircle2 className="h-6 w-6 text-emerald-600 mr-4 flex-shrink-0" />
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Example Opportunities */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 text-center">
            Example Opportunities
          </h2>
          <div className="space-y-6">
            <Card className="metric-card rounded-xl p-8 group card-hover-effect border-l-4 border-l-slate-300" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-0">
                <div className="mb-4">
                  <h4 className="text-base font-semibold text-slate-600 mb-2">Platform Modernization Signal</h4>
                </div>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  A regional healthcare provider still using SQL Server + SSIS. Recently opened 
                  a search for a Data Platform Architect with Snowflake experience.
                </p>
              </CardContent>
            </Card>

            <Card className="metric-card rounded-xl p-8 group card-hover-effect border-l-4 border-l-slate-300" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-0">
                <div className="mb-4">
                  <h4 className="text-base font-semibold text-slate-600 mb-2">Pipeline Optimization Signal</h4>
                </div>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  A retail company using Snowflake for reporting, but still running legacy batch 
                  ingestion pipelines. Hiring data engineers with dbt and Fivetran experience.
                </p>
              </CardContent>
            </Card>

            <Card className="metric-card rounded-xl p-8 group card-hover-effect border-l-4 border-l-slate-300" style={{ animationDelay: '0.3s' }}>
              <CardContent className="p-0">
                <div className="mb-4">
                  <h4 className="text-base font-semibold text-slate-600 mb-2">Modeling & Insights Signal</h4>
                </div>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  A fintech firm running Snowflake + Tableau, but with no modeling layer (no dbt). 
                  Recently posted a 'Head of Data Insights' role focused on decision automation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 text-center">
            Pricing
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <Card className="metric-card rounded-xl p-6 sm:p-8 group card-hover-effect h-full" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-0 flex flex-col items-center text-center h-full">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-slate-200 transition-colors icon-hover-rotate">
                  <CircleDollarSign className="h-6 w-6 text-slate-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-slate-900 tracking-tight">
                  $4,500
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  20 leads for one ICP
                </p>
              </CardContent>
            </Card>

            <Card className="metric-card rounded-xl p-6 sm:p-8 group card-hover-effect h-full" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-0 flex flex-col items-center text-center h-full">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-slate-200 transition-colors icon-hover-rotate">
                  <CircleDollarSign className="h-6 w-6 text-slate-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-slate-900 tracking-tight">
                  $7,500
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  20 leads for two ICPs
                </p>
              </CardContent>
            </Card>
          </div>
          <p className="text-center text-slate-600 mt-6 text-base sm:text-lg">
            Every lead includes contact info, tech insights, and tailored messaging guidance.
          </p>
        </div>

        {/* Perfect For Teams */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 text-center">
            Perfect For Teams That Offer:
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Modern Data Platform Design & Delivery",
              "Data Engineering & Ingestion Pipeline Buildout",
              "Semantic & Analytical Data Modeling",
              "Snowflake Implementation & Optimization",
              "DataOps & ML Platform Scaling",
              "Building High-Functioning Data Teams"
            ].map((service, index) => (
              <Card key={index} className="metric-card rounded-xl p-6 group card-hover-effect" style={{ animationDelay: `${0.05 * (index + 1)}s` }}>
                <CardContent className="p-0 flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                  <p className="text-slate-600 leading-relaxed text-sm">{service}</p>
                </CardContent>
              </Card>
            ))}
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
        <Card className="metric-card rounded-2xl enterprise-shadow-lg mx-auto">
          <CardContent className="pt-6 px-6 pb-8 flex justify-center items-center">
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