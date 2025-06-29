"use client";
import Conversations from "@/components/chats/Conversations";
import InputContainer from "@/components/chats/InputContainer";
import React from "react";
import { useChat } from "./chatcontext";
import { v4 as uuid } from "uuid";
const ConversationPage = () => {
  const { messages, addMessage, botLoading } = useChat();

  const handleSubmitMessage = (value: string) => {
    if (!value.trim()) return;
    addMessage({
      content: value,
      message_id: uuid(),
      references: [],
      role: "user",
      timestamp: new Date().toISOString(),
    });
  };

  return (
    <div className="h-[calc(100vh-50px)] flex flex-col items-center pb-6">
      <div className="flex-1 min-h-0 w-full">
        <Conversations messages={messages} botLoading={botLoading} />
      </div>
      <div className="shrink-0 w-full flex justify-center px-5 md:px-10 lg:px-60">
        <InputContainer onSubmit={handleSubmitMessage} disabled={botLoading} />
      </div>
    </div>
  );
};

export default ConversationPage;
