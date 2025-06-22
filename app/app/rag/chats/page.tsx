import { Typography } from "@/components/common/Typography";
import InputContainer from "@/components/chats/InputContainer";
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

const NewChats = () => {
  return (
    <ScrollArea className="max-h-[calc(100vh-48px)] w-full flex flex-col">
      <div className="h-[calc(100vh-48px)] flex justify-center items-center py-1 px-5 md:px-10 lg:px-20 ">
        <div className="flex flex-col items-center gap-y-12 w-full">
          <Typography variant="h3" className="text-2xl text-center">
            {`I’m here to help with your documents — just ask.`}
          </Typography>
          <InputContainer />
        </div>
      </div>
    </ScrollArea>
  );
};

export default NewChats;
