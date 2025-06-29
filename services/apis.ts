import {
  ChatHistory,
  ChatList,
  DeleteDocumentResponse,
  DeleteResponse,
  DocumentList,
  EmbedDocumentResponse,
  QueryChatResponse,
  UploadDocumentResponse,
  UserDetails,
  UserStats,
} from "@/types";
import axios from "axios";
const apibase = process.env.NEXT_PUBLIC_API_URL;

// API FUNCTIONS
export const getDocuments = async (userId: string): Promise<DocumentList> => {
  try {
    const res = await axios.get<DocumentList>(
      `${apibase}/documents/user/${userId}`
    );
    return res.data;
  } catch (error: any) {
    throw error?.response?.data || error;
  }
};

export const uploadDocument = async (
  userId: string,
  file: File
): Promise<UploadDocumentResponse> => {
  try {
    const formData = new FormData();
    formData.append("user_id", userId);
    formData.append("file", file);
    const res = await axios.post<UploadDocumentResponse>(
      `${apibase}/documents/upload`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    return res.data;
  } catch (error: any) {
    throw error?.response?.data || error;
  }
};

export const deleteDocument = async (
  docId: string
): Promise<DeleteDocumentResponse> => {
  try {
    const res = await axios.delete<DeleteDocumentResponse>(
      `${apibase}/documents/${docId}`
    );
    return res.data;
  } catch (error: any) {
    throw error?.response?.data || error;
  }
};

export const getDocument = async (docId: string): Promise<Document> => {
  try {
    const res = await axios.get<Document>(`${apibase}/documents/${docId}`);
    return res.data;
  } catch (error: any) {
    throw error?.response?.data || error;
  }
};

export const embedDocument = async (
  docId: string
): Promise<EmbedDocumentResponse> => {
  try {
    const res = await axios.post<EmbedDocumentResponse>(
      `${apibase}/documents/${docId}/embed`
    );
    return res.data;
  } catch (error: any) {
    throw error?.response?.data || error;
  }
};

export const getPreviewUrl = async (docId: string): Promise<string> => {
  try {
    const res = await axios.get(`${apibase}/documents/${docId}/preview-url`);
    return res.data?.preview_url ?? "";
  } catch (error) {
    throw "";
  }
};

export const queryDocuments = async (payload: {
  user_id: string;
  query: string;
  doc_ids?: string[];
  chat_id?: string;
}): Promise<QueryChatResponse> => {
  try {
    const res = await axios.post<QueryChatResponse>(
      `${apibase}/chats/query`,
      payload
    );
    return res.data;
  } catch (error: any) {
    throw error?.response?.data || error;
  }
};

export const getChats = async (userId: string): Promise<ChatList> => {
  try {
    const res = await axios.get<ChatList>(`${apibase}/chats/chats/${userId}`);
    return res.data;
  } catch (error: any) {
    throw error?.response?.data || error;
  }
};

export const getChatHistory = async (chatId: string): Promise<ChatHistory> => {
  try {
    const res = await axios.get<ChatHistory>(`${apibase}/chats/chat/${chatId}`);
    return res.data;
  } catch (error: any) {
    throw error?.response?.data || error;
  }
};

export const deleteChat = async (chatId: string): Promise<DeleteResponse> => {
  try {
    const res = await axios.delete<DeleteResponse>(
      `${apibase}/chats/chat/${chatId}`
    );
    return res.data;
  } catch (error: any) {
    throw error?.response?.data || error;
  }
};

export const getUserStats = async (userId: string): Promise<UserStats> => {
  try {
    const res = await axios.get<UserStats>(
      `${apibase}/users/user/${userId}/stats`
    );
    return res.data;
  } catch (error: any) {
    throw error?.response?.data || error;
  }
};

export const getUserDetails = async (userId: string): Promise<UserDetails> => {
  try {
    const res = await axios.get<UserDetails>(`${apibase}/users/user/${userId}`);
    return res.data;
  } catch (error: any) {
    throw error?.response?.data || error;
  }
};

export const deleteUser = async (userId: string): Promise<DeleteResponse> => {
  try {
    const res = await axios.delete<DeleteResponse>(
      `${apibase}/users/user/${userId}`
    );
    return res.data;
  } catch (error: any) {
    throw error?.response?.data || error;
  }
};
