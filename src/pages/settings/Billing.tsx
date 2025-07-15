import { CurrentPlan } from "@/components/billing/CurrentPlan";
import { PaymentHistory } from "@/components/billing/PaymentHistory";

const Billing = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold tracking-tight">Billing</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <CurrentPlan />
        </div>
        <div className="lg:col-span-2">
          <PaymentHistory />
        </div>
      </div>
    </div>
  );
};

export default Billing;