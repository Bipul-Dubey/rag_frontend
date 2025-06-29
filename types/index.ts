export type TDOCUMENT_STATUS = "pending" | "processing" | "ready" | "failed";
export type TMESSAGE_FROM = "user" | "assistant";
//  ============================ interface ===============
export interface ChatReference {
  doc_id: string;
  doc_name: string;
  doc_url: string;
  s3_key: string;
}

export interface IMessage {
  content: string;
  references: ChatReference[] | null;
  timestamp: string;
  message_id: string;
  role: TMESSAGE_FROM;
}

export interface QueryChatResponse {
  chat_id: string;
  content: string;
  references: ChatReference[];
  timestamp: string;
  message_id: string;
  role: TMESSAGE_FROM;
}

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

export interface ChatListItem {
  chat_id: string;
  created_at: string;
  chat_name: string;
}

export type ChatList = ChatListItem[];

export interface ChatHistory {
  chat_id: string;
  user_id: string;
  created_at: string;
  chat_name: string;
  messages: IMessage[];
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
