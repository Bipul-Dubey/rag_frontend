"use client";
import { getChatHistory, queryDocuments } from "@/services/apis";
import { IMessage } from "@/types";
import { useAuth } from "@clerk/nextjs";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface ChatContextType {
  messages: IMessage[];
  addMessage: (msg: IMessage) => void;
  botLoading: boolean;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const { slug: chatId } = useParams();
  const { userId } = useAuth();
  const [messages, setMessages] = useState<IMessage[]>([]);

  const { data } = useQuery({
    queryKey: ["chatHistory", chatId],
    queryFn: () => getChatHistory(chatId as string),
    enabled: !!chatId,
  });

  const { mutate: askQuestion, isPending } = useMutation({
    mutationKey: ["queryDocuments"],
    mutationFn: (payload: {
      user_id: string;
      query: string;
      doc_ids?: string[];
      chat_id?: string;
    }) => queryDocuments(payload),
    onSuccess(data) {
      setMessages((prevState) => [
        ...prevState,
        {
          content: data.content,
          message_id: data.message_id,
          references: data.references,
          role: "assistant",
          timestamp: data.timestamp,
        },
      ]);
    },
  });

  useEffect(() => {
    if (data?.messages && Array.isArray(data.messages)) {
      setMessages(data.messages);
    }
  }, [data]);

  const addMessage = (msg: IMessage) => {
    setMessages((prevState) => [...prevState, msg]);

    const query = msg.content;
    askQuestion({
      query: query,
      user_id: userId!,
      chat_id: chatId as string,
    });
  };

  return (
    <ChatContext.Provider
      value={{ messages, addMessage, botLoading: isPending }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
};
