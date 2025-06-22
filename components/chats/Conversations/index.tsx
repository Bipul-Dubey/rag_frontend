import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { IMessage } from "@/types";
import { Messages } from "@/constants/dummy";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

type MessageItemProps = {
  message: IMessage;
};

const MessageItem: React.FC<MessageItemProps> = ({ message }) => {
  const isUser = message.type === "user";

  return (
    <div>
      <div
        className={`flex px-4 py-2 ${isUser ? "justify-end" : "justify-start"}`}
      >
        <Card
          className={`w-[95%] sm:w-[90%] text-sm rounded-[8px] whitespace-pre-wrap p-0 px-1  ${
            isUser
              ? "bg-muted/20 text-foreground"
              : "bg-transparent border border-border"
          }`}
        >
          <CardContent className="p-3">{message.text}</CardContent>
        </Card>
      </div>
      <div className="flex px-4">
        {!isUser && (
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 p-1 text-muted-foreground hover:bg-muted"
          >
            <Copy className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
};

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
