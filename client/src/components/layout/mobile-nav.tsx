import { useState } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X, ChartLine, CreditCard, Mail, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import eazyLogoPath from "@assets/eazy logo black.svg";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Sample Report", href: "/sample-report", icon: ChartLine },
  { name: "Payment", href: "/payment", icon: CreditCard },
  { name: "Contact", href: "/contact", icon: Mail },
];

export default function MobileNav() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="fixed top-4 left-4 z-50 bg-white shadow-lg border border-gray-200"
          >
            <Menu className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-56 p-0 sidebar-enhanced">
          <div className="p-4">
            {/* Logo */}
            <div className="flex items-center mb-6">
              <span className="font-bold text-lg text-slate-900 tracking-wide brand-font">eazyrev.ai</span>
            </div>

            {/* Navigation Links */}
            <div className="space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = location === item.href;
                
                return (
                  <Link key={item.name} href={item.href}>
                    <div
                      className={cn(
                        "flex items-center gap-2 px-2 py-2 rounded-lg sidebar-item text-sm",
                        isActive
                          ? "bg-slate-200 text-slate-900 active"
                          : "text-slate-700 hover:bg-slate-100"
                      )}
                      onClick={() => setOpen(false)}
                    >
                      <Icon className="w-4 h-4 icon-hover-rotate" />
                      <span>{item.name}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Bottom Logo */}
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-200">
            <div className="flex justify-start">
              <img 
                src={eazyLogoPath} 
                alt="eazy logo" 
                className="w-12 h-12 opacity-40 hover:opacity-60 transition-opacity duration-300 cursor-pointer"
              />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
