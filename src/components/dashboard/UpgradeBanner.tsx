import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Zap } from "lucide-react";

export function UpgradeBanner() {
  return (
    <Card className="bg-charcoal text-white">
      <CardContent className="p-6">
        <Zap className="h-6 w-6 text-yellow-400 mb-2" />
        <h3 className="font-semibold text-lg">Upgrade to Pro</h3>
        <p className="text-sm text-gray-300 mt-1 mb-4">
          Unlock advanced analysis and unlimited uploads.
        </p>
        <Button variant="secondary" className="w-full text-charcoal">
          Upgrade Now
        </Button>
      </CardContent>
    </Card>
  );
}