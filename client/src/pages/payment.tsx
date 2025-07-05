import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, ArrowRight, CheckCircle, Key } from "lucide-react";

export default function Payment() {
  const handlePayment = () => {
    // In a real implementation, this would redirect to Stripe Checkout
    window.open("https://buy.stripe.com/test_payment_link", "_blank");
  };

  return (
    <div className="landing-backdrop">
      <div className="landing-content max-w-3xl mx-auto px-6 pt-20 pb-16 page-transition">
        <div className="text-center mb-12">
          <div className="mb-6">
            <Badge variant="secondary" className="px-4 py-2 bg-slate-100 text-slate-700 text-sm font-medium rounded-full mb-4">
              Secure Payment
            </Badge>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900 tracking-tight leading-tight">
            Complete Your Payment
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-6">
            Secure payment processing for your eazyrev service
          </p>
        </div>

        <Card className="metric-card rounded-2xl p-10 enterprise-shadow-lg">
          <CardContent className="p-0">
            {/* Clean Payment Card */}
            <div className="relative group cursor-pointer">
              <Card className="metric-card rounded-2xl p-8 enterprise-shadow-lg transition-all duration-200 group-hover:shadow-xl">
                <CardContent className="p-0">
                  {/* Header Section */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-[#635BFF] rounded-xl flex items-center justify-center">
                        <Shield className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900">Secure Payment</h3>
                        <p className="text-slate-600 text-sm font-medium">Powered by Stripe</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200">
                      SSL Secured
                    </Badge>
                  </div>

                  {/* Payment Details */}
                  <div className="bg-slate-50 rounded-xl p-6 mb-8 border border-slate-100">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-slate-700 font-medium">Eazyrev Service</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-slate-500">
                      <Shield className="h-3 w-3" />
                      <span>End-to-end encryption</span>
                      <span>•</span>
                      <span>PCI DSS compliant</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="relative">
                    <Button 
                      onClick={handlePayment}
                      className="w-full bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-sm"
                    >
                      <span className="flex items-center justify-center space-x-2">
                        <span>Continue to Payment</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Button>
                  </div>

                  {/* Trust Indicators */}
                  <div className="flex items-center justify-center space-x-6 mt-6 pt-6 border-t border-slate-100">
                    <div className="flex items-center space-x-2 text-slate-500 text-sm">
                      <CheckCircle className="h-3 w-3" />
                      <span>Verified by Stripe</span>
                    </div>
                    <div className="flex items-center space-x-2 text-slate-500 text-sm">
                      <Key className="h-3 w-3" />
                      <span>256-bit SSL</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Additional Information */}
            <div className="text-center space-y-2 mt-8">
              <p className="text-slate-600 font-medium">
                Secure payment processing for your eazyrev service
              </p>
              <p className="text-sm text-slate-500">
                Your payment information is encrypted and never stored on our servers
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
