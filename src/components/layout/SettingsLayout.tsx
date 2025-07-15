import { Link, Outlet, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const sidebarNavItems = [
  { title: "Account", href: "/settings/account" },
  { title: "Billing", href: "/settings/billing" },
  { title: "Pricing", href: "/settings/pricing" },
];

export function SettingsLayout() {
  const { pathname } = useLocation();

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="lg:w-1/5">
          <nav className="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1">
            {sidebarNavItems.map((item) => (
              <Link
                key={item.title}
                to={item.href}
                className={cn(
                  "inline-flex items-center justify-start rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted focus:outline-none",
                  pathname.startsWith(item.href)
                    ? "bg-muted"
                    : "hover:bg-transparent hover:underline"
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </aside>
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
}