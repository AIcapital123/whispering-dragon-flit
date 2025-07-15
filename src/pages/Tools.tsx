import { EmptyState } from "@/components/common/EmptyState";
import { Button } from "@/components/ui/button";
import { Wrench } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const toolsAvailable = true;

const Tools = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Tools</h1>

      {toolsAvailable ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Rent Affordability Calculator</CardTitle>
              <CardDescription>
                Determine the maximum rent a potential tenant can afford.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="monthly-income">Monthly Income (THB)</Label>
                <Input id="monthly-income" type="number" placeholder="e.g., 50000" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="debt-to-income">Debt-to-Income Ratio</Label>
                <Select defaultValue="30">
                  <SelectTrigger id="debt-to-income">
                    <SelectValue placeholder="Select ratio" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30">30% (Recommended)</SelectItem>
                    <SelectItem value="40">40%</SelectItem>
                    <SelectItem value="50">50%</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full bg-thai-blue hover:bg-blue-700">Calculate</Button>
            </CardContent>
          </Card>
        </div>
      ) : (
        <EmptyState
          icon={<Wrench className="h-12 w-12 text-muted-foreground" />}
          title="No Tools Available"
          description="More tools are coming soon to help you manage your properties."
          cta={
            <Button variant="outline">
              Suggest a Tool
            </Button>
          }
        />
      )}
    </div>
  );
};

export default Tools;