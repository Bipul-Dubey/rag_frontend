"use client";
import React from "react";
import DocumentItem, { DocumentFile } from "./DocumentItem";

const mockFiles: DocumentFile[] = [
  {
    id: "1",
    name: "Resume.pdf",
    size: 204800,
    type: "application/pdf",
  },
  {
    id: "2",
    name: "Report.docx",
    size: 512000,
    type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  },
  {
    id: "3",
    name: "notes.txt",
    size: 1024,
    type: "text/plain",
  },
  {
    id: "4",
    name: "notes.txt",
    size: 1024,
    type: "text/plain",
  },
  {
    id: "5",
    name: "notes.txt",
    size: 1024,
    type: "text/plain",
  },
];

const DocumentItems: React.FC = () => {
  const handleView = (file: DocumentFile) => {
    console.log("View", file);
  };

  const handleDelete = (file: DocumentFile) => {
    console.log("Delete", file);
  };

  const handleChat = (file: DocumentFile) => {
    console.log("Chat", file);
  };

  return (
    <div className="flex flex-wrap gap-4">
      {mockFiles.map((file) => (
        <DocumentItem
          key={file.id}
          file={file}
          onView={handleView}
          onDelete={handleDelete}
          onChat={handleChat}
        />
      ))}
    </div>
  );
};

export default DocumentItems;
