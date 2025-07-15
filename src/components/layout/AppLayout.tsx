import { Outlet } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Nav } from "@/components/layout/Nav";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { CurrencySwitcher } from "@/components/layout/CurrencySwitcher";

export function AppLayout() {
  return (
    <div className="min-h-screen w-full bg-muted/40 font-sans">
      <aside className="hidden lg:flex fixed inset-y-0 left-0 z-20 w-[280px] flex-col border-r bg-charcoal text-white">
        <Nav />
      </aside>

      <div className="flex flex-col lg:pl-[280px]">
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="lg:hidden shrink-0 h-11 w-11"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="p-0 w-[280px] bg-charcoal text-white border-r-0"
            >
              <Nav />
            </SheetContent>
          </Sheet>

          <div className="flex-1">
            {/* Breadcrumbs or page title can go here */}
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <LanguageSwitcher />
            <CurrencySwitcher />
          </div>
        </header>

        <main className="flex-1 p-4 md:p-6">
          <div className="max-w-6xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}