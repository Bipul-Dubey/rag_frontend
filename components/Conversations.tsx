import { IMessage, useDocumentContext } from "@/ContextManager";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";

const Message = (props: IMessage) => {
  const { message, sender } = props;
  const isUser = sender === "user";

  return (
    <div
      className={`w-full flex ${isUser ? "justify-end" : "justify-start"} py-1`}
    >
      <div
        className={`flex items-start gap-2 ${
          isUser ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <div className="w-6 h-6 text-gray-500">
          {isUser ? (
            <Image
              height={22}
              width={22}
              src="/user.svg"
              alt="user"
              className="h-7"
            />
          ) : (
            <Image
              height={22}
              width={22}
              src={"/bot.svg"}
              alt="bot"
              className="h-7"
            />
          )}
        </div>
        <div
          className={`${
            isUser ? "bg-emerald-200" : "bg-emerald-100"
          } p-2 px-3 rounded-xl max-w-[70%] text-left break-words`}
        >
          <div className="text-sm font-medium text-black text-left">
            <ReactMarkdown>{message}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

const Loader = ({ loading }: { loading: boolean }) => {
  return (
    <>
      {loading ? (
        <div className="flex items-center justify-start space-x-3">
          <Image
            height={6}
            width={6}
            src="/bot.svg"
            alt="bot"
            className="h-6 w-6"
          />
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" />
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:0.1s]" />
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:0.2s]" />
          </div>
        </div>
      ) : null}
    </>
  );
};

const Conversations = () => {
  const { conversations, addMessage, document, setDocument } =
    useDocumentContext();
  const [currentMessage, setCurrentMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = async () => {
    if (!currentMessage.trim()) return;
    scrollToBottom();
    setLoading(true);
    const userMessage: IMessage = {
      message: currentMessage.trim(),
      sender: "user",
    };
    addMessage(userMessage);
    try {
      const resp = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_BASEPATH}/rag/query`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id: document?.user_id,
            query: currentMessage.trim(),
          }),
        }
      );
      const data = await resp.json();
      if (data) {
        setDocument({
          _id: document?._id ?? "",
          filename: document?.filename ?? "",
          user_id: document?.user_id ?? "",
          updated_at: document?.user_id ?? "",
          queries_left_today: data?.queries_left_today,
          queries_used_today: data?.queries_used_today,
          is_query_left: data?.is_query_left ?? false,
        });
      }
      if (data?.answer) {
        addMessage({
          message: data.answer,
          sender: "bot",
        });
      }
    } catch (error) {
      addMessage({
        message: "Something Went Wrong!!!. Please try again",
        sender: "bot",
      });
      console.error(error);
    } finally {
      setLoading(false);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [conversations]);

  return (
    <div className="dark:bg-gray-900 max-h-[calc(100vh-4rem)] flex flex-col flex-1 min-h-0 w-full max-w-4xl mx-auto">
      {/* Conversation area */}
      <div className={`scrollbar-hidden flex-1 overflow-y-auto px-4 py-6`}>
        {conversations.length > 0 ? (
          <div>
            {conversations.map((item, index) => (
              <Message {...item} key={"message-" + index} />
            ))}
            <Loader loading={loading} />
            <div ref={bottomRef} />
          </div>
        ) : (
          <div className="text-center text-gray-400 mt-20 flex flex-col items-center text-lg">
            <Image
              height={20}
              width={60}
              src="/logo.png"
              alt="logo"
              className="h-16 w-50"
            />
            <h2 className="mt-5 text-1xl">
              How can i help you with your docs?
            </h2>
          </div>
        )}
      </div>

      {/* Textfield (input area) */}
      <div className="border-t rounded-t-md border-gray-700 p-4 bg-gray-900">
        <div className="flex items-center space-x-2">
          <input
            className="flex-1 px-4 py-2 rounded-xl bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={currentMessage || ""}
            onChange={(e) => setCurrentMessage(e.target.value)}
            type="text"
            placeholder="Type your message..."
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
          />
          <button
            disabled={!currentMessage.trim() || !document?.is_query_left}
            onClick={handleSendMessage}
            className={`p-2 rounded-xl border border-gray-600 text-white bg-transparent hover:bg-gray-700 active:bg-gray-800 transition-colors duration-150 flex items-center justify-center
    ${
      !currentMessage.trim() || !document?.is_query_left
        ? "opacity-50 cursor-not-allowed"
        : ""
    }
  `}
          >
            <Image
              height={24}
              width={24}
              src="/send.svg"
              alt="Send"
              className="h-6 w-6 rotate-[-40deg]"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Conversations;
