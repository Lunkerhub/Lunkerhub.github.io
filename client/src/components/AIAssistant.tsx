import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface AIAssistantProps {
  onSendMessage?: (message: string) => void;
}

export default function AIAssistant({ onSendMessage }: AIAssistantProps) {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Привет! Я AI помощник. Чем могу помочь?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage: Message = { role: "user", content: input };
    setMessages([...messages, newMessage]);
    setInput("");

    if (onSendMessage) {
      onSendMessage(input);
    }

    setTimeout(() => {
      setMessages(prev => [...prev, {
        role: "assistant",
        content: "Я обработаю ваш запрос через OpenRouter API..."
      }]);
    }, 500);
  };

  const suggestedPrompts = [
    "Объясни этот код",
    "Найди ошибку",
    "Оптимизируй код",
    "Добавь комментарии"
  ];

  return (
    <div className="flex flex-col h-full bg-card">
      <div className="p-4 border-b border-card-border">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-primary" />
          <h3 className="font-semibold">AI Помощник</h3>
        </div>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <Card
                className={`max-w-xs p-3 ${
                  msg.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted"
                }`}
                data-testid={`message-${msg.role}-${idx}`}
              >
                <p className="text-sm">{msg.content}</p>
              </Card>
            </div>
          ))}
        </div>

        {messages.length === 1 && (
          <div className="mt-6 space-y-2">
            <p className="text-xs text-muted-foreground">Предложения:</p>
            <div className="flex flex-wrap gap-2">
              {suggestedPrompts.map((prompt, idx) => (
                <Badge
                  key={idx}
                  variant="secondary"
                  className="cursor-pointer hover-elevate"
                  onClick={() => setInput(prompt)}
                  data-testid={`suggestion-${idx}`}
                >
                  {prompt}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </ScrollArea>

      <div className="p-4 border-t border-card-border">
        <div className="flex gap-2">
          <Input
            data-testid="input-message"
            placeholder="Спросите AI..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
          />
          <Button
            data-testid="button-send"
            size="icon"
            onClick={handleSend}
            disabled={!input.trim()}
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
