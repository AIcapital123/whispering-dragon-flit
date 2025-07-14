import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CircleDollarSign } from "lucide-react";

export function CurrencySwitcher() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <CircleDollarSign className="h-5 w-5" />
          <span className="sr-only">Change currency</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>USD</DropdownMenuItem>
        <DropdownMenuItem>THB</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}