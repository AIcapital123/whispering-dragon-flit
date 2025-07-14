import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { UploadCloud } from "lucide-react";

export function UploadArea() {
  return (
    <Card className="border-2 border-dashed border-gray-300 hover:border-thai-blue transition-colors h-full flex items-center justify-center">
      <CardContent className="p-6 text-center">
        <div className="flex justify-center">
          <div className="rounded-full bg-gray-100 p-3">
            <UploadCloud className="h-8 w-8 text-thai-blue" />
          </div>
        </div>
        <h3 className="mt-4 text-lg font-semibold text-gray-900">
          Drag & drop your lease agreement
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          or click to browse files on your computer
        </p>
        <Button className="mt-6 bg-thai-blue hover:bg-blue-700 text-white">
          Browse Files
        </Button>
      </CardContent>
    </Card>
  );
}