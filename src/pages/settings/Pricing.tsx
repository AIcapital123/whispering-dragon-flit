import { PricingCard } from "@/components/pricing/PricingCard";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const plans = [
  {
    title: "Basic",
    price: "$19/mo",
    description: "For individuals and small teams.",
    features: [
      "5 Document Analyses/mo",
      "Basic Risk Assessment",
      "Standard Templates",
      "Email Support",
    ],
  },
  {
    title: "Pro",
    price: "$49/mo",
    description: "For growing businesses and professionals.",
    features: [
      "50 Document Analyses/mo",
      "Advanced Risk Assessment",
      "Customizable Templates",
      "Priority Email Support",
      "AI Legal Chatbot",
    ],
    isFeatured: true,
  },
  {
    title: "Enterprise",
    price: "Contact Us",
    description: "For large organizations with custom needs.",
    features: [
      "Unlimited Analyses",
      "Full API Access",
      "Dedicated Account Manager",
      "24/7 Phone Support",
      "On-premise Deployment",
    ],
  },
];

const Pricing = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight">Our Pricing</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Choose the plan that's right for you.
        </p>
        <div className="flex items-center justify-center flex-wrap gap-2 mt-4">
          <Label htmlFor="billing-cycle">Monthly</Label>
          <Switch id="billing-cycle" />
          <Label htmlFor="billing-cycle">Annually (Save 20%)</Label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <PricingCard key={plan.title} {...plan} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;