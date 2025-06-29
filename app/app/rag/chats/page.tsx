"use client";
import { Typography } from "@/components/common/Typography";
import InputContainer from "@/components/chats/InputContainer";
import React, { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { queryDocuments } from "@/services/apis";
import { useAuth } from "@clerk/nextjs";
import { IMessage } from "@/types";
import Conversations from "@/components/chats/Conversations";
import { useRouter } from "next/navigation";
import { PATHS } from "@/constants/paths";

const NewChats = () => {
  const router = useRouter();
  const { userId } = useAuth();
  const [messages, setMessages] = useState<IMessage[]>([]);
  const handleAsk = async (val: string) => {
    if (!val.trim()) return;
    setMessages(() => [
      {
        message_id: "init-message",
        content: val,
        role: "user",
        references: [],
        timestamp: "",
      },
    ]);
    const value = await queryDocuments({
      user_id: userId!,
      query: val,
      chat_id: "",
      doc_ids: [],
    });

    setMessages((prevState) => [
      ...prevState,
      {
        message_id: value.message_id,
        content: value.content,
        role: "assistant",
        references: value.references,
        timestamp: value.timestamp,
      },
    ]);

    router.push(`${PATHS.RAG_CHATS}/${value.chat_id}`);
  };

  return messages.length === 0 ? (
    <ScrollArea className="max-h-[calc(100vh-48px)] w-full flex flex-col">
      <div className="h-[calc(100vh-48px)] flex justify-center items-center py-1 px-5 md:px-10 lg:px-20 ">
        <div className="flex flex-col items-center gap-y-12 w-full">
          <Typography variant="h3" className="text-2xl text-center">
            {`I’m here to help with your documents — just ask.`}
          </Typography>
          <InputContainer onSubmit={handleAsk} />
        </div>
      </div>
    </ScrollArea>
  ) : (
    <div className="h-[calc(100vh-50px)] flex flex-col items-center pb-6">
      <div className="flex-1 min-h-0 w-full">
        <Conversations messages={messages} />
      </div>
      <div className="shrink-0 w-full flex justify-center px-5 md:px-10 lg:px-60">
        <InputContainer onSubmit={(val) => console.log(val)} />
      </div>
    </div>
  );
};

export default NewChats;
