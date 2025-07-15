import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function CurrentPlan() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Current Plan</CardTitle>
        <CardDescription>You are currently on the Pro plan.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p className="font-bold text-2xl">$49/month</p>
          <p className="text-sm text-muted-foreground">Your next billing date is July 31, 2024.</p>
        </div>
      </CardContent>
      <CardFooter className="border-t pt-6">
        <Button>Change Plan</Button>
      </CardFooter>
    </Card>
  );
}