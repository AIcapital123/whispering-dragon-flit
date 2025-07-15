import { UploadArea } from "@/components/dashboard/UploadArea";

const Upload = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Upload Document</h1>
      <p className="text-muted-foreground">
        Start by uploading your lease agreement for analysis.
      </p>
      <div className="h-[calc(100vh-250px)]">
        <UploadArea />
      </div>
    </div>
  );
};

export default Upload;