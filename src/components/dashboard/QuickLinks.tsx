import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, FilePlus, FileText, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const links = [
  {
    label: "Analyze New Lease",
    icon: FilePlus,
    href: "#",
  },
  {
    label: "View All Documents",
    icon: FileText,
    href: "#",
  },
  {
    label: "Contact Support",
    icon: MessageSquare,
    href: "#",
  },
];

export function QuickLinks() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Links</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                className="flex items-center justify-between p-3 rounded-md hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <link.icon className="h-5 w-5 text-muted-foreground" />
                  <span className="font-medium">{link.label}</span>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}