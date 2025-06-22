import React from "react";
import { Messages } from "@/constants/dummy";
import MessageItem from "./MessageItem";

const Conversations = () => {
  return (
    <div className="w-full h-full px-5 md:px-10 lg:px-60 overflow-y-auto">
      {Messages.map((msg) => (
        <MessageItem key={msg.id} message={msg} />
      ))}
    </div>
  );
};

export default Conversations;
