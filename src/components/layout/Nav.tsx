import { Link, useLocation } from "react-router-dom";
import { Building2, LayoutDashboard, Users, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/listings", label: "Listings", icon: FileText },
  { href: "/tenants", label: "Tenants", icon: Users },
];

export function Nav() {
  const { pathname } = useLocation();

  return (
    <div className="flex h-full max-h-screen flex-col">
      <div className="flex h-16 items-center border-b border-sidebar-border px-6">
        <Link
          to="/"
          className="flex items-center gap-2 font-semibold text-white"
        >
          <Building2 className="h-6 w-6 text-thai-blue" />
          <span>LeaseSmart</span>
        </Link>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid items-start px-4 text-sm font-medium">
          {navItems.map(({ href, label, icon: Icon }) => (
            <Link
              key={label}
              to={href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-3 text-sidebar-foreground transition-all hover:bg-sidebar-accent hover:text-thai-blue min-h-[44px]",
                pathname === href && "bg-sidebar-accent text-thai-blue"
              )}
            >
              <Icon className="h-5 w-5" />
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}