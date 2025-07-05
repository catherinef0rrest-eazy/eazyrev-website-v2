import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Building, ChartLine, CreditCard, Mail, Home } from "lucide-react";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Sample Report", href: "/sample-report", icon: ChartLine },
  { name: "Payment", href: "/payment", icon: CreditCard },
  { name: "Contact", href: "/contact", icon: Mail },
];

export default function Sidebar() {
  const [location] = useLocation();

  return (
    <nav className="sidebar-enhanced fixed left-0 top-0 h-full w-64 z-40 hidden lg:block">
      <div className="p-6">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">E</span>
          </div>
          <span className="font-bold text-xl text-slate-900">eazyrev</span>
        </div>

        {/* Navigation Links */}
        <div className="space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = location === item.href;
            
            return (
              <Link key={item.name} href={item.href}>
                <div
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
                    isActive
                      ? "bg-slate-200 text-slate-900"
                      : "text-slate-700 hover:bg-slate-100"
                  )}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Bottom Company Info */}
      <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-slate-200">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            <Building className="w-4 h-4 text-gray-600" />
          </div>
          <div className="text-sm">
            <div className="font-medium text-slate-900">eazy</div>
            <div className="text-slate-500">Enterprise</div>
          </div>
        </div>
      </div>
    </nav>
  );
}
