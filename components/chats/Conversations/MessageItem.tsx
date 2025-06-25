"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { toast } from "sonner";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { IMessage } from "@/types";

type MessageItemProps = {
  message: IMessage;
};

const markdownComponents = {
  code({
    inline,
    className,
    children,
  }: React.HTMLAttributes<HTMLElement> & { inline?: boolean }) {
    const language = className?.replace("language-", "") || "text";
    const codeContent = String(children).replace(/\n$/, "");

    if (inline) {
      return (
        <code className="bg-muted px-1 py-0.5 rounded text-sm font-mono">
          {children}
        </code>
      );
    }

    return (
      <div className="relative my-4">
        <div className="absolute top-2 left-3 text-xs text-white/60 uppercase z-10">
          {language}
        </div>
        <Button
          onClick={() => {
            navigator.clipboard.writeText(codeContent);
            toast.success("Code copied to clipboard");
          }}
          variant="ghost"
          size="icon"
          className="absolute top-1 right-1 z-10 h-6 w-6 p-1 text-muted-foreground hover:bg-muted"
        >
          <Copy className="h-4 w-4" />
        </Button>

        <SyntaxHighlighter
          language={language}
          style={oneDark}
          PreTag="pre"
          wrapLongLines
          customStyle={{
            margin: 0,
            borderRadius: "8px",
            padding: "1.75rem 1rem 1rem 1rem",
            fontSize: "0.85rem",
            backgroundColor: "#282c34",
            overflowX: "auto",
          }}
        >
          {codeContent}
        </SyntaxHighlighter>
      </div>
    );
  },
};

const MessageItem: React.FC<MessageItemProps> = ({ message }) => {
  const isUser = message.type === "user";

  const handleCopy = () => {
    navigator.clipboard.writeText(message.text);
    toast.success("Message copied to clipboard");
  };

  const referenceLinks = message.referenceLinks || []; // optional field like: [{ label: "Docs", url: "https://..." }]

  return (
    <div className="px-4 py-2">
      <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
        <Card
          className={`w-[95%] sm:w-[90%] text-sm rounded-[8px] p-0 whitespace-pre-wrap relative ${
            isUser
              ? "bg-muted/20 text-foreground"
              : "bg-transparent border border-border"
          }`}
        >
          <CardContent className="p-3 prose prose-sm dark:prose-invert max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={markdownComponents}
            >
              {message.text}
            </ReactMarkdown>
          </CardContent>
        </Card>
      </div>

      {/* Copy + Reference Links (Always show, position based on isUser) */}
      <div
        className={`mt-1 flex items-center gap-2 px-4 ${
          isUser ? "justify-end" : "justify-start"
        }`}
      >
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6 p-1 text-muted-foreground hover:bg-muted"
          onClick={handleCopy}
        >
          <Copy className="h-4 w-4" />
        </Button>

        {referenceLinks.length > 0 && (
          <div className="flex gap-2 flex-wrap">
            {referenceLinks.map((ref, idx) => (
              <a
                key={idx}
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground underline hover:text-primary"
              >
                {ref.label || `Ref ${idx + 1}`}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageItem;
