import { TemplateCard } from "@/components/templates/TemplateCard";
import { EmptyState } from "@/components/common/EmptyState";
import { Button } from "@/components/ui/button";
import { FilePlus, ClipboardList } from "lucide-react";

const templates = [
  {
    title: "Residential Lease Agreement",
    description: "Standard lease for residential properties. Compliant with local laws.",
    category: "Lease Agreements",
  },
  {
    title: "Commercial Lease Agreement",
    description: "For retail, office, or industrial properties.",
    category: "Lease Agreements",
  },
  {
    title: "Lease Termination Notice",
    description: "Formal notice to end a lease agreement.",
    category: "Notices",
  },
  {
    title: "Eviction Notice",
    description: "Official notice for tenant eviction proceedings.",
    category: "Notices",
  },
  {
    title: "Rental Application Form",
    description: "Collect information from prospective tenants.",
    category: "Applications",
  },
];

const Templates = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Templates Library</h1>
        <Button>
          <FilePlus className="mr-2 h-4 w-4" />
          Upload New Template
        </Button>
      </div>

      {templates.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template, index) => (
            <TemplateCard key={index} {...template} />
          ))}
        </div>
      ) : (
        <EmptyState
          icon={<ClipboardList className="h-12 w-12 text-muted-foreground" />}
          title="No Templates Found"
          description="You haven't uploaded any templates yet. Get started by uploading your first one."
          cta={
            <Button>
              <FilePlus className="mr-2 h-4 w-4" />
              Upload Template
            </Button>
          }
        />
      )}
    </div>
  );
};

export default Templates;