"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { toast } from "sonner";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

type Message = {
  id: number;
  type: "user" | "bot";
  text: string;
};

type MessageItemProps = {
  message: Message;
};

const markdownComponents = {
  code({
    inline,
    className,
    children,
    ...props
  }: React.HTMLAttributes<HTMLElement> & { inline?: boolean }) {
    const language = className?.replace("language-", "") || "bash";

    if (inline) {
      return (
        <code className="bg-muted px-1 py-0.5 rounded text-sm font-mono">
          {children}
        </code>
      );
    }

    return (
      <SyntaxHighlighter
        language={language}
        style={oneDark}
        wrapLongLines
        customStyle={{
          borderRadius: "8px",
          padding: "16px",
          fontSize: "0.85rem",
          backgroundColor: "#282c34",
          overflowX: "auto",
        }}
        PreTag="div"
      >
        {String(children).trim()}
      </SyntaxHighlighter>
    );
  },
};

const MessageItem: React.FC<MessageItemProps> = ({ message }) => {
  const isUser = message.type === "user";
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(message.text);
    toast.success("Message copied to clipboard");
  };

  return (
    <div
      className={`flex px-4 py-2 ${isUser ? "justify-end" : "justify-start"}`}
    >
      <Card
        className={`w-[95%] sm:w-[90%] text-sm rounded-[8px] p-0 whitespace-pre-wrap relative ${
          isUser
            ? "bg-muted/20 text-foreground"
            : "bg-transparent border border-border"
        }`}
      >
        <CardContent className="p-4 prose prose-sm dark:prose-invert max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={markdownComponents}
          >
            {message.text}
          </ReactMarkdown>

          {/* Bottom-left copy button */}
          {!isUser && (
            <div className="mt-4">
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 p-1 text-muted-foreground hover:bg-muted"
                onClick={handleCopy}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default MessageItem;
