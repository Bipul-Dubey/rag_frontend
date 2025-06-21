"use client";

import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Trash2, File, FileText, FileCode } from "lucide-react";
import {
  ALLOWED_FILE_TYPES,
  MAX_FILE_SIZE,
  MAX_UPLOAD_FILES,
} from "@/constants";
import { toast } from "sonner";

const formatSize = (bytes: number) => {
  const sizes = ["Bytes", "KB", "MB", "GB"];
  if (bytes === 0) return "0 Bytes";
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sizes[i]}`;
};

const getIcon = (type: string) => {
  if (type.includes("pdf")) return <FileText className="text-red-500" />;
  if (type.includes("word") || type.includes("doc"))
    return <File className="text-blue-500" />;
  if (type.includes("text")) return <FileCode className="text-gray-500" />;
  return <File className="text-muted-foreground" />;
};

const DocsActionButton = () => {
  const [open, setOpen] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileAdd = (incomingFiles: File[]) => {
    const validFiles = incomingFiles.filter((file) => {
      if (!ALLOWED_FILE_TYPES.includes(file.type)) {
        toast.error(`${file.name}: Unsupported file type`);
        return false;
      }
      if (file.size > MAX_FILE_SIZE) {
        toast.error(`${file.name}: File too large (max 5MB)`);
        return false;
      }
      return true;
    });

    validFiles.forEach((file) => {
      const existsIndex = selectedFiles.findIndex((f) => f.name === file.name);

      if (existsIndex !== -1) {
        toast(`"${file.name}" already exists. Replace?`, {
          action: {
            label: "Replace",
            onClick: () => {
              const updated = [...selectedFiles];
              updated[existsIndex] = file;
              setSelectedFiles(updated);
              toast.success(`Replaced "${file.name}"`);
            },
          },
        });
      } else {
        if (selectedFiles.length >= MAX_UPLOAD_FILES) {
          toast.error(`Max ${MAX_UPLOAD_FILES} files allowed`);
        } else {
          setSelectedFiles((prev) => [...prev, file]);
        }
      }
    });
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleFileAdd,
    multiple: false,
    noClick: false,
    accept: ALLOWED_FILE_TYPES.reduce(
      (acc, type) => ({ ...acc, [type]: [] }),
      {} as Record<string, string[]>
    ),
    maxSize: MAX_FILE_SIZE,
  });

  const handleRemove = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleConfirm = () => {
    console.log("Uploading:", selectedFiles);
    toast.success(`${selectedFiles.length} file(s) uploaded.`);
    setSelectedFiles([]);
    setOpen(false);
  };

  const totalSize = selectedFiles.reduce((acc, file) => acc + file.size, 0);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Upload Files</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Upload Documents</DialogTitle>
          <DialogDescription>
            Allowed: PDF, DOCX, TXT, XLSX • Max {MAX_UPLOAD_FILES} files •{" "}
            {formatSize(MAX_FILE_SIZE)} per file
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-2">
          {/* Dropzone */}
          <div
            {...getRootProps()}
            className="border border-dashed rounded-md px-4 py-8 text-center cursor-pointer hover:border-primary transition-all"
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop files here...</p>
            ) : (
              <p>Drag & drop or click to upload</p>
            )}
          </div>

          {/* File List */}
          {selectedFiles.length > 0 && (
            <ScrollArea className="border rounded-md max-h-[150px] p-2">
              <div className="space-y-2">
                {selectedFiles.map((file, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between gap-3 text-sm"
                  >
                    <div className="flex items-center gap-2 max-w-[70%]">
                      {getIcon(file.type)}
                      <div className="truncate">
                        <div className="truncate font-medium">{file.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {formatSize(file.size)}
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleRemove(idx)}
                    >
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </Button>
                  </div>
                ))}
              </div>
            </ScrollArea>
          )}

          {/* Total Size */}
          {selectedFiles.length > 0 && (
            <div className="text-right text-xs text-muted-foreground">
              Total size: {formatSize(totalSize)}
            </div>
          )}
        </div>

        <DialogFooter>
          <Button variant="secondary" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleConfirm} disabled={selectedFiles.length === 0}>
            Confirm Upload
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DocsActionButton;
