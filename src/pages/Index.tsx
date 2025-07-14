import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle>Total Properties</CardTitle>
              <CardDescription>All managed properties</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">150</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Occupancy Rate</CardTitle>
              <CardDescription>Across all properties</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">92%</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Open Tickets</CardTitle>
              <CardDescription>Maintenance requests</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">8</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>New Applicants</CardTitle>
              <CardDescription>Awaiting review</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">12</p>
            </CardContent>
          </Card>
        </div>
      </div>
      <MadeWithDyad />
    </>
  );
};

export default Index;