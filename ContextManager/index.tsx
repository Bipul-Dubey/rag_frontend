import { useAuth } from "@clerk/nextjs";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface DocumentData {
  _id: string;
  user_id: string;
  filename: string;
  updated_at?: string;
}

export interface IMessage {
  sender: "user" | "bot";
  message: string;
}

interface DocumentContextType {
  document: DocumentData | null;
  conversations: IMessage[];
  setDocument: (doc: DocumentData | null) => void;
  addMessage: (message: IMessage) => void;
  clearMessages: () => void;
}

// Create Context
const DocumentContext = createContext<DocumentContextType | undefined>(
  undefined
);

export const DocumentProvider = ({ children }: { children: ReactNode }) => {
  const [document, setDocument] = useState<DocumentData | null>(null);
  const [conversations, setConversations] = useState<IMessage[]>([]);
  const { userId } = useAuth();

  useEffect(() => {
    const storedConversations = localStorage.getItem("conversations");
    if (storedConversations) {
      setConversations(JSON.parse(storedConversations));
    }
  }, []);

  useEffect(() => {
    if (!userId) return;
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_BASEPATH}/rag/users/${userId}`
        );
        const data = await res.json();
        setDocument({
          filename: data?.filename,
          _id: data?.mongo_id,
          updated_at: data?.uploaded_at,
          user_id: userId,
        });
      } catch (error) {
        console.log("Error: ", error);
      }
    };
    fetchData();
  }, [userId]);

  const addMessage = (message: IMessage) => {
    setConversations((prev) => {
      const updatedConversations = [...prev, message];
      localStorage.setItem(
        "conversations",
        JSON.stringify(updatedConversations)
      );
      return updatedConversations;
    });
  };

  const clearMessages = () => {
    setConversations([]);
    localStorage.removeItem("conversations");
  };

  return (
    <DocumentContext.Provider
      value={{
        document,
        conversations,
        setDocument,
        addMessage,
        clearMessages,
      }}
    >
      {children}
    </DocumentContext.Provider>
  );
};

// Hook
export const useDocumentContext = () => {
  const context = useContext(DocumentContext);
  if (!context)
    throw new Error(
      "useDocumentContext must be used within a DocumentProvider"
    );
  return context;
};
