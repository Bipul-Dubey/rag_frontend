import { cn } from "@/lib/utils";
import React from "react";

interface AIThinkingProps {
  className?: string;
}

const AIThinking: React.FC<AIThinkingProps> = ({ className }) => {
  return (
    <div
      className={cn("flex items-center gap-3 text-muted-foreground", className)}
    >
      <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      <span className="text-sm">AI is thinking...</span>
    </div>
  );
};

export default AIThinking;
