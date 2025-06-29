
export type TDOCUMENT_STATUS = "pending" | "processing" | "ready" | "failed"
//  ============================ interface ===============
export interface IMessage  {
  id: string;
  type: "user" | "bot";
  text: string;
  referenceLinks: { label: string; url: string }[] | null;
};


export interface IDocument {
  _id: string;
  user_id: string;
  filename: string;
  filetype: string;
  size: number;
  url: string;
  status: TDOCUMENT_STATUS;
  [key: string]: any;
}

export type DocumentList = IDocument[];

export interface UploadDocumentResponse {
  doc_id: string;
  url: string;
}

export interface EmbedDocumentResponse {
  message: string;
}

export interface DeleteDocumentResponse {
  message: string;
}

export interface ChatReference {
  doc_id: string;
  doc_name: string;
  doc_url: string;
}

export interface QueryChatResponse {
  answer: string;
  references: ChatReference[];
  chat_id: string;
}

export interface ChatListItem {
  chat_id: string;
  created_at: string;
  chat_name: string;
}

export type ChatList = ChatListItem[];

export interface ChatMessage {
  message_id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
  references?: ChatReference[];
}

export interface ChatHistory {
  chat_id: string;
  user_id: string;
  created_at: string;
  chat_name: string;
  messages: ChatMessage[];
}

export interface DeleteResponse {
  message: string;
}

export interface UserStats {
  user_id: string;
  total_query_count: number;
  total_token_count: number;
  today_query_count: number;
  today_token_count: number;
}

export interface UserDetails {
  [key: string]: any;
}