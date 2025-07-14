import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FileCheck, FileClock, FileWarning } from "lucide-react";

const statuses = [
  {
    title: "Documents Analyzed",
    value: "32",
    icon: FileCheck,
    color: "text-green-500",
  },
  {
    title: "Pending Review",
    value: "4",
    icon: FileClock,
    color: "text-yellow-500",
  },
  {
    title: "Action Required",
    value: "2",
    icon: FileWarning,
    color: "text-red-500",
  },
];

export function StatusCards() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {statuses.map((status) => (
        <Card key={status.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {status.title}
            </CardTitle>
            <status.icon className={`h-4 w-4 text-muted-foreground ${status.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{status.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}