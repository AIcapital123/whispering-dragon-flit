import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isFeatured?: boolean;
}

export function PricingCard({ title, price, description, features, isFeatured }: PricingCardProps) {
  return (
    <Card className={cn("flex flex-col", isFeatured && "border-thai-blue border-2")}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <p className="text-4xl font-bold">{price}</p>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="h-5 w-5 text-green-500 mr-2" />
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className={cn("w-full", isFeatured ? "bg-thai-blue hover:bg-blue-700" : "bg-primary")}>
          {isFeatured ? "Get Started" : "Choose Plan"}
        </Button>
      </CardFooter>
    </Card>
  );
}