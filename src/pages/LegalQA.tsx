import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { ChatInterface } from "@/components/legal/ChatInterface";
import { FaqLibrary } from "@/components/legal/FaqLibrary";
import { SubmissionForm } from "@/components/legal/SubmissionForm";

const LegalQA = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Legal Q&A</h1>
      <Tabs defaultValue="chatbot" className="w-full">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
          <TabsTrigger value="chatbot">AI Chatbot</TabsTrigger>
          <TabsTrigger value="faq">FAQ Library</TabsTrigger>
          <TabsTrigger value="submit">Ask a Lawyer</TabsTrigger>
        </TabsList>
        <TabsContent value="chatbot" className="mt-6">
          <ChatInterface />
        </TabsContent>
        <TabsContent value="faq" className="mt-6">
          <FaqLibrary />
        </TabsContent>
        <TabsContent value="submit" className="mt-6">
          <SubmissionForm />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LegalQA;