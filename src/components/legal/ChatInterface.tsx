import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bot, Send, User } from "lucide-react";
import { cn } from "@/lib/utils";

const initialMessages = [
  {
    sender: "ai",
    text: "Hello! I am your AI legal assistant. How can I help you with your lease questions today?",
  },
];

const chatHistory = [
  "Lease renewal clauses",
  "Security deposit rules",
  "Early termination penalties",
];

export function ChatInterface() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: "user", text: input.trim() }]);
      // Mock AI response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "ai", text: "This is a mock response regarding your query." },
        ]);
      }, 1000);
      setInput("");
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[600px]">
      <div className="hidden lg:block lg:col-span-1 border rounded-lg p-4">
        <h3 className="font-semibold mb-4">Chat History</h3>
        <ScrollArea className="h-[520px]">
          <div className="space-y-2">
            {chatHistory.map((chat, index) => (
              <Button key={index} variant="ghost" className="w-full justify-start">
                {chat}
              </Button>
            ))}
          </div>
        </ScrollArea>
      </div>
      <div className="col-span-1 lg:col-span-3 flex flex-col border rounded-lg">
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={cn(
                  "flex items-start gap-3",
                  msg.sender === "user" && "justify-end"
                )}
              >
                {msg.sender === "ai" && (
                  <Avatar className="h-8 w-8">
                    <AvatarFallback><Bot size={20} /></AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={cn(
                    "p-3 rounded-lg max-w-xs md:max-w-md",
                    msg.sender === "user"
                      ? "bg-thai-blue text-white"
                      : "bg-muted"
                  )}
                >
                  {msg.text}
                </div>
                 {msg.sender === "user" && (
                  <Avatar className="h-8 w-8">
                    <AvatarFallback><User size={20} /></AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
        <div className="p-4 border-t">
          <div className="relative">
            <Input
              placeholder="Ask about lease clauses, tenant rights..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              className="pr-12"
            />
            <Button
              size="icon"
              className="absolute top-1/2 right-1.5 -translate-y-1/2"
              onClick={handleSend}
            >
              <Send className="h-4 w-4" />
              <span className="sr-only">Send message</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}