import React, { useRef, useEffect } from "react";
import MessageItem from "./MessageItem";
import { IMessage } from "@/types";
import AIThinking from "@/components/common/AILoading";

const Conversations = ({
  messages,
  botLoading,
}: {
  messages: IMessage[];
  botLoading?: boolean;
}) => {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, botLoading]);

  return (
    <div className="w-full h-full px-5 md:px-10 lg:px-60 overflow-y-auto">
      {messages.map((msg) => (
        <MessageItem key={msg.message_id} message={msg} />
      ))}
      {botLoading ? <AIThinking className="my-2" /> : null}
      <div ref={bottomRef} />
    </div>
  );
};

export default Conversations;
