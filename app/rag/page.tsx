"use client";
import Conversations from "@/components/Conversations";
import NoFile from "@/components/NoFile";
import { useDocumentContext } from "@/ContextManager";
import React from "react";

const Page = () => {
  const { document } = useDocumentContext();

  return (
    <div className="flex flex-col flex-1 min-h-0">
      {document?.filename ? <Conversations /> : <NoFile />}
    </div>
  );
};

export default Page;
