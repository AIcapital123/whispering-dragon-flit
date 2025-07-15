import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, ClipboardList, Plus, MessageCircleQuestion, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/templates", label: "Templates", icon: ClipboardList },
  { href: "/legal-qa", label: "Legal Q&A", icon: MessageCircleQuestion },
  { href: "/settings/account", label: "Settings", icon: Settings },
];

export function BottomNav() {
  const { pathname } = useLocation();

  return (
    <div className="lg:hidden fixed bottom-0 left-0 z-50 w-full h-16 bg-background border-t border-border">
      <div className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">
        {navItems.slice(0, 2).map(({ href, label, icon: Icon }) => (
          <Link
            key={label}
            to={href}
            className={cn(
              "inline-flex flex-col items-center justify-center px-5 hover:bg-muted group",
              (pathname === href || (href !== "/" && pathname.startsWith(href))) ? "text-thai-blue" : "text-muted-foreground"
            )}
          >
            <Icon className="w-6 h-6 mb-1" />
            <span className="text-xs">{label}</span>
          </Link>
        ))}
        
        <div className="flex items-center justify-center">
            <Link to="/upload" aria-label="Upload Document" className="inline-flex items-center justify-center w-14 h-14 font-medium bg-thai-blue text-white rounded-full hover:bg-blue-700 -mt-6 shadow-lg">
                <Plus className="w-8 h-8" />
            </Link>
        </div>

        {navItems.slice(2, 4).map(({ href, label, icon: Icon }) => (
          <Link
            key={label}
            to={href}
            className={cn(
              "inline-flex flex-col items-center justify-center px-5 hover:bg-muted group",
              (pathname === href || (href !== "/" && pathname.startsWith(href))) ? "text-thai-blue" : "text-muted-foreground"
            )}
          >
            <Icon className="w-6 h-6 mb-1" />
            <span className="text-xs">{label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}