import { Outlet } from "react-router-dom";
import { Nav } from "@/components/layout/Nav";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { CurrencySwitcher } from "@/components/layout/CurrencySwitcher";
import { BottomNav } from "@/components/layout/BottomNav";

export function AppLayout() {
  return (
    <div className="min-h-screen w-full bg-muted/40 font-sans">
      <aside className="hidden lg:flex fixed inset-y-0 left-0 z-20 w-[280px] flex-col border-r bg-charcoal text-white">
        <Nav />
      </aside>

      <div className="flex flex-col lg:pl-[280px]">
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 lg:border-none">
          <div className="flex-1">
            {/* Breadcrumbs or page title can go here */}
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <LanguageSwitcher />
            <CurrencySwitcher />
          </div>
        </header>

        <main className="flex-1 p-4 md:p-6 pb-20 lg:pb-6">
          <div className="max-w-6xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
      
      <BottomNav />
    </div>
  );
}