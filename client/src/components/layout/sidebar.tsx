import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { ChartLine, CreditCard, Mail, Home } from "lucide-react";
import eazyLogoPath from "@assets/eazy logo black.svg";

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
        <div className="flex items-center mb-8">
          <span className="font-bold text-2xl text-slate-900 tracking-wide brand-font">eazyrev.ai</span>
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
                    "flex items-center gap-3 px-3 py-2 rounded-lg sidebar-item",
                    isActive
                      ? "bg-slate-200 text-slate-900 active"
                      : "text-slate-700 hover:bg-slate-100"
                  )}
                >
                  <Icon className="w-5 h-5 icon-hover-rotate" />
                  <span>{item.name}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Bottom Logo */}
      <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-slate-200 bg-white">
        <div className="flex justify-center">
          <img 
            src={eazyLogoPath} 
            alt="eazy logo" 
            className="w-20 h-20 opacity-80 hover:opacity-100 transition-all duration-300 cursor-pointer hover:scale-105"
          />
        </div>
      </div>
    </nav>
  );
}
