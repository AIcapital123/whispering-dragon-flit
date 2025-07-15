import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const faqs = [
  {
    q: "What is the standard notice period for lease termination in Thailand?",
    a: "The standard notice period is typically 30 days, but it should be clearly stated in your lease agreement.",
  },
  {
    q: "Can a landlord increase rent during the lease term?",
    a: "No, a landlord cannot unilaterally increase the rent during a fixed-term lease unless there is a specific clause in the agreement allowing for it.",
  },
  {
    q: "Is the security deposit refundable?",
    a: "Yes, the security deposit is refundable at the end of the lease, minus any deductions for damages beyond normal wear and tear or unpaid rent.",
  },
];

export function FaqLibrary() {
  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input placeholder="Search FAQs..." className="pl-10" />
      </div>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.q}</AccordionTrigger>
            <AccordionContent>{faq.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}