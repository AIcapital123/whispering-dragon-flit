import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import { AppLayout } from "@/components/layout/AppLayout";
import Templates from "@/pages/Templates";
import Tools from "@/pages/Tools";
import LegalQA from "@/pages/LegalQA";
import { SettingsLayout } from "@/components/layout/SettingsLayout";
import Account from "@/pages/settings/Account";
import Billing from "@/pages/settings/Billing";
import Pricing from "@/pages/settings/Pricing";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/legal-qa" element={<LegalQA />} />
            
            <Route path="/settings" element={<SettingsLayout />}>
              <Route index element={<Navigate to="account" replace />} />
              <Route path="account" element={<Account />} />
              <Route path="billing" element={<Billing />} />
              <Route path="pricing" element={<Pricing />} />
            </Route>

            {/* ADD ALL CUSTOM ROUTES HERE */}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;