import Conversations from "@/components/chats/Conversations";
import InputContainer from "@/components/chats/InputContainer";
import React from "react";

const ConversationPage = () => {
  return (
    <div className="max-h-[calc(100vh-50px)] flex flex-col items-center pb-6">
      <div className="flex-1 min-h-0 w-full">
        <Conversations />
      </div>
      <div className="shrink-0 w-full flex justify-center">
        <InputContainer />
      </div>
    </div>
  );
};

export default ConversationPage;
