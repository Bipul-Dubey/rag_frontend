"use client";
import React, { useState } from "react";
import DocumentItem from "./DocumentItem";
import {
  deleteDocument,
  embedDocument,
  getDocuments,
  getPreviewUrl,
} from "@/services/apis";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@clerk/nextjs";
import { Typography } from "../common/Typography";
import { Upload } from "lucide-react";
import { IDocument } from "@/types";
import { PATHS } from "@/constants/paths";
import { useRouter } from "next/navigation";

const DocumentItems: React.FC = () => {
  const router = useRouter();
  const { userId } = useAuth();
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState<boolean>(false);
  const { data, isLoading } = useQuery({
    queryKey: ["documents", userId],
    queryFn: () => getDocuments(userId!),
    enabled: !!userId,
  });

  const embedMutation = useMutation({
    mutationFn: (docId: string) => embedDocument(docId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["documents", userId] });
    },
    onSettled: () => {
      setLoading(false);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (docId: string) => deleteDocument(docId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["documents", userId] });
    },
    onSettled: () => {
      setLoading(false);
    },
  });

  const handleTrain = (file: IDocument) => {
    setLoading(true);
    embedMutation.mutate(file._id);
  };

  const handleDelete = (file: IDocument) => {
    setLoading(true);
    deleteMutation.mutate(file._id);
  };

  const handleView = async (file: IDocument) => {
    const res = await getPreviewUrl(file._id);
    if (res) {
      window.open(res, "_blank");
    }
  };

  const handleChat = (file: IDocument) => {
    router.push(`${PATHS.RAG_CHATS}?docId=${file._id}`);
  };

  return isLoading ? (
    <>loadin....</>
  ) : Array.isArray(data) && data.length > 0 ? (
    <div className="flex flex-wrap gap-4">
      {data.map((file) => (
        <DocumentItem
          key={file._id}
          file={file}
          onView={handleView}
          onDelete={handleDelete}
          onChat={handleChat}
          onTrain={handleTrain}
          disableButton={loading}
        />
      ))}
    </div>
  ) : (
    <div className="flex flex-col items-center gap-y-10 mt-10 justify-center">
      <Upload size={50} />
      <Typography variant="h2" className="text-center">
        No Document available, Please upload document(s) to continue
      </Typography>
    </div>
  );
};

export default DocumentItems;
