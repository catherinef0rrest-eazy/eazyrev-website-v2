import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const StaticPaymentForm = () => {
  const { toast } = useToast();

  const handleStripePaymentLink = () => {
    toast({
      title: "Opening Stripe Payment",
      description: "Payment window opening in new tab...",
    });
    
    // Open in new tab to avoid navigation issues
    window.open('https://buy.stripe.com/dRm28q6lfeB13GQ3Yg3sI00', '_blank');
  };

  return (
    <div className="space-y-6">
      {/* Clean Payment Card */}
      <div 
        onClick={handleStripePaymentLink}
        className="relative group cursor-pointer"
      >
        <div className="metric-card rounded-2xl p-8 enterprise-shadow-lg transition-all duration-200 group-hover:shadow-xl">
          {/* Header Section */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-[#635BFF] rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900">Secure Payment</h3>
                <p className="text-slate-600 text-sm professional-text">Powered by Stripe</p>
              </div>
            </div>
            <div className="bg-slate-100 text-slate-700 text-xs font-medium px-3 py-1 rounded-full border border-slate-200">
              SSL Secured
            </div>
          </div>

          {/* Payment Details */}
          <div className="bg-slate-50 rounded-xl p-6 mb-8 border border-slate-100">
            <div className="flex justify-between items-center mb-4">
              <span className="text-slate-700 font-medium professional-text">Eazyrev Service</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-slate-500">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
              </svg>
              <span>End-to-end encryption</span>
              <span>•</span>
              <span>PCI DSS compliant</span>
            </div>
          </div>

          {/* Action Button */}
          <div className="relative">
            <Button
              className="w-full bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-sm"
            >
              <span className="flex items-center justify-center space-x-2">
                <span>Continue to Payment</span>
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </span>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center space-x-6 mt-6 pt-6 border-t border-slate-100">
            <div className="flex items-center space-x-2 text-slate-500 text-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span>Verified by Stripe</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-500 text-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd"/>
              </svg>
              <span>256-bit SSL</span>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="text-center space-y-2">
        <p className="text-slate-600 font-medium professional-text">
          Secure payment processing for your eazyrev service
        </p>
        <p className="text-sm text-slate-500">
          Your payment information is encrypted and never stored on our servers
        </p>
      </div>
    </div>
  );
};

export default function Pricing() {
  // Check for success/cancel URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const paymentSuccess = urlParams.get('success');
  const paymentCanceled = urlParams.get('canceled');

  if (paymentSuccess) {
    return (
      <div className="landing-backdrop">
        <div className="landing-content max-w-3xl mx-auto px-6 pt-20 pb-16 fade-in text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-green-100 text-green-700 text-sm font-medium rounded-full mb-4">
              Payment Successful
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900">Thank You!</h1>
          <p className="text-xl text-slate-600 mb-8">
            Your payment has been processed successfully. We'll be in touch soon!
          </p>
          <Link href="/">
            <Button className="bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-800">
              Return Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  if (paymentCanceled) {
    return (
      <div className="landing-backdrop">
        <div className="landing-content max-w-3xl mx-auto px-6 pt-20 pb-16 fade-in text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-700 text-sm font-medium rounded-full mb-4">
              Payment Canceled
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900">Payment Canceled</h1>
          <p className="text-xl text-slate-600 mb-8">
            Your payment was canceled. Feel free to try again or contact us for assistance.
          </p>
          <div className="space-x-4">
            <Button 
              onClick={() => window.location.href = '/pricing'}
              className="bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-800"
            >
              Try Again
            </Button>
            <Link href="/contact">
              <Button variant="outline" className="px-8 py-3 rounded-lg font-semibold">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="landing-backdrop">
      <div className="landing-content max-w-3xl mx-auto px-6 pt-20 pb-16 fade-in">
        <div className="text-center mb-12">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-slate-100 text-slate-700 text-sm font-medium rounded-full mb-4">
              Secure Payment
            </span>
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
            <StaticPaymentForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}