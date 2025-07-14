import { MadeWithDyad } from "@/components/made-with-dyad";
import { StatusCards } from "@/components/dashboard/StatusCards";
import { UploadArea } from "@/components/dashboard/UploadArea";
import { RiskMeter } from "@/components/dashboard/RiskMeter";
import { QuickLinks } from "@/components/dashboard/QuickLinks";
import { UpgradeBanner } from "@/components/dashboard/UpgradeBanner";

const Index = () => {
  return (
    <>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        
        <StatusCards />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <UploadArea />
          </div>
          <div className="lg:col-span-1 space-y-6">
            <RiskMeter />
            <QuickLinks />
            <UpgradeBanner />
          </div>
        </div>
      </div>
      <MadeWithDyad />
    </>
  );
};

export default Index;