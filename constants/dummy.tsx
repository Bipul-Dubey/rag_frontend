import { IMessage } from "@/types";

export const Messages: IMessage[] = [
  {
    id: 1,
    type: "user",
    text: `<Textarea
  className="border-none rounded-b-none resize-none max-h-[60vh] overflow-y-auto shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 [scrollbar-width:thin]"
  style={{ height: "auto", backgroundColor: "transparent" }}
/>

scrollbar bg is transparent as background color, also scroll`,
  },
  {
    id: 2,
    type: "bot",
    text: `To make the scrollbar match the transparent background in your <Textarea />, and still remain visible and styled, you can customize the scrollbar for both light/dark themes. Here’s how to update it using Tailwind and inline styles:

---

✅ Tailwind + Custom Scrollbar Style (Transparent Background):

<Textarea
  className="border-none rounded-b-none resize-none max-h-[60vh] overflow-y-auto shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 scrollbar-thin scrollbar-thumb-muted-foreground scrollbar-track-transparent bg-transparent"
  style={{
    height: "auto",
    backgroundColor: "transparent",
  }}
/>

---

✅ If using ShadCN + Tailwind:

You can add this to your global CSS to fine-tune the scrollbar:

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(100, 100, 100, 0.4); /* Muted foreground */
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: rgba(100, 100, 100, 0.6);
}

/* For Firefox */
textarea {
  scrollbar-width: thin;
  scrollbar-color: rgba(100, 100, 100, 0.4) transparent;
}

---

✅ Summary:
- scrollbar-track-transparent keeps the track background clear.
- scrollbar-thumb-muted-foreground gives a subtle but visible thumb.
- CSS ensures cross-browser compatibility (Chrome + Firefox).
- bg-transparent ensures full transparency.

Let me know if you want to animate or auto-expand the height of the Textarea based on content too.`,
  },
  {
    id: 3,
    type: "user",
    text: `import React from "react";

const Conversations = () => {
  return (
    <div className="w-full h-full px-5 md:px-10 lg:px-60 overflow-y-auto">
      <div className="h-[2000px]">Conversations list</div>
    </div>
  );
};

export default Conversations;

create UI for conversation messages, by bot and by user, using shadcn component, and make sure to keep theme undisturbed`,
  },
  {
    id: 4,
    type: "bot",
    text: `Here's a clean and theme-consistent chat UI using shadcn/ui, where messages are styled differently based on whether they are from the user or the bot. This uses Card for message bubbles and respects dark/light themes using Tailwind + shadcn principles.

---

✅ Conversations.tsx — With Bot/User Messages

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const messages = [
  { id: 1, type: "bot", text: "Hello! How can I assist you today?" },
  { id: 2, type: "user", text: "Can you help me with my uploaded document?" },
  { id: 3, type: "bot", text: "Sure! What would you like to know from it?" },
];

const Conversations = () => {
  return (
    <ScrollArea className="w-full h-full px-4 md:px-10 lg:px-60 py-6">
      <div className="space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={\`flex \${msg.type === "user" ? "justify-end" : "justify-start"}\`}
          >
            <Card
              className={\`max-w-xs md:max-w-md \${msg.type === "user"
                ? "bg-primary text-primary-foreground"
                : "bg-muted"} rounded-2xl\`}
            >
              <CardContent className="p-4 text-sm">{msg.text}</CardContent>
            </Card>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};

export default Conversations;

---

✅ Features:
- ScrollArea from shadcn handles smooth scrolling.
- User messages: aligned to the right with bg-primary.
- Bot messages: aligned to the left with bg-muted.
- Uses Card + CardContent for soft, theme-consistent chat bubbles.
- Rounded and padded, respecting light/dark modes automatically.

Let me know if you want to add avatars, timestamps, typing indicator, or a sticky bottom input field next.`,
  },
  {
    id: 5,
    type: "user",
    text: `gave a message list, of this chat conversation`,
  },
  {
    id: 6,
    type: "bot",
    text: `Here's a structured messages array based on our current chat conversation, distinguishing between bot and user messages...

const messages = [
  {
    id: 1,
    type: "user",
    text: \`<Textarea className="..." style={{ ... }} /> scrollbar bg is transparent as background color, also scroll\`,
  },
  {
    id: 2,
    type: "bot",
    text: \`To make the scrollbar match... etc\`,
  },
  ...
];`,
  },
  {
    id: 7,
    type: "user",
    text: `const MessageItems = () => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200">
      <div className="flex items-center space-x-4">
        <img
          src="https://via.placeholder.com/40"
          alt="User Avatar"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h3 className="text-sm font-semibold">User Name</h3>
          <p className="text-xs text-gray-500">Last message preview...</p>
        </div>
      </div>
      <span className="text-xs text-gray-400">2:30 PM</span>
    </div>
  );
};

create a message item component that take a message data, also keep user message in gray background and bot bg as transparent`,
  },
  {
    id: 8,
    type: "bot",
    text: `Here's a reusable MessageItem component that accepts a message prop and styles user and bot messages differently, using ShadCN and TailwindCSS principles.

✅ MessageItem.tsx

import React from "react";
import { Card, CardContent } from "@/components/ui/card";

type Message = {
  id: number;
  type: "user" | "bot";
  text: string;
  time?: string;
  avatarUrl?: string;
  name?: string;
};

type MessageItemProps = {
  message: Message;
};

const MessageItem: React.FC<MessageItemProps> = ({ message }) => {
  const isUser = message.type === "user";

  return (
    <div
      className={\`flex items-start gap-3 px-4 py-2 \${isUser ? "justify-end" : "justify-start"}\`}
    >
      {!isUser && (
        <img
          src={message.avatarUrl || "https://via.placeholder.com/40"}
          alt="Bot Avatar"
          className="w-8 h-8 rounded-full"
        />
      )}

      <Card
        className={\`max-w-xs md:max-w-md \${isUser
          ? "bg-muted text-foreground"
          : "bg-transparent border border-border"} rounded-2xl\`}
      >
        <CardContent className="p-3 text-sm whitespace-pre-wrap">
          {message.text}
        </CardContent>
      </Card>

      {isUser && (
        <img
          src={message.avatarUrl || "https://via.placeholder.com/40"}
          alt="User Avatar"
          className="w-8 h-8 rounded-full"
        />
      )}
    </div>
  );
};

export default MessageItem;

✅ Usage Example:
{messages.map((msg) => (
  <MessageItem key={msg.id} message={msg} />
))}`,
  },
  {
    id: 9,
    type: "user",
    text: `not required avatar, time, name of user`,
  },
  {
    id: 10,
    type: "bot",
    text: `Got it! Here's a clean MessageItem component that:

- Accepts a message object (type, text)
- No avatar, no name, no time
- Styles:
  - User messages have a gray (bg-muted) background
  - Bot messages have a transparent background with border

✅ MessageItem.tsx

import React from "react";
import { Card, CardContent } from "@/components/ui/card";

type Message = {
  id: number;
  type: "user" | "bot";
  text: string;
};

type MessageItemProps = {
  message: Message;
};

const MessageItem: React.FC<MessageItemProps> = ({ message }) => {
  const isUser = message.type === "user";

  return (
    <div className={\`flex px-4 py-2 \${isUser ? "justify-end" : "justify-start"}\`}>
      <Card
        className={\`max-w-xs md:max-w-md text-sm rounded-2xl whitespace-pre-wrap \${isUser
          ? "bg-muted text-foreground"
          : "bg-transparent border border-border"}\`}
      >
        <CardContent className="p-3">{message.text}</CardContent>
      </Card>
    </div>
  );
};

export default MessageItem;`,
  },
  {
    id: 11,
    type: "user",
    text: `provide list of messages in this coversation with all content`,
  },
  {
    id: 12,
    type: "bot",
    text: `Here is a full list of messages from this conversation, formatted as an array of message objects with complete content...`,
  },
];
