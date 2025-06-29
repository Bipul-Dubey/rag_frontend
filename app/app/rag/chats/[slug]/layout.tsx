import React from "react";
import { ChatProvider } from "./chatcontext";

export default function ChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ChatProvider>{children}</ChatProvider>;
}
