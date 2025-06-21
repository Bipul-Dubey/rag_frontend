import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

export default function ChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ScrollArea className="max-h-[calc(100vh-48px)] w-full flex flex-col">
      {children}
    </ScrollArea>
  );
}
