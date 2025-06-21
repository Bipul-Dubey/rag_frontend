"use client";

import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { ALLOWED_FILE_TYPES, MAX_UPLOAD_FILES } from "@/constants";
import { Input } from "@/components/ui/input";
import { Trash2 } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

// Format bytes to KB, MB, etc.
const formatSize = (bytes: number) => {
  const sizes = ["Bytes", "KB", "MB", "GB"];
  if (bytes === 0) return "0 Bytes";
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sizes[i]}`;
};

const DocsActionButton = () => {
  const [open, setOpen] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
    const incomingFiles = Array.from(e.target.files ?? []);
    const validFiles = incomingFiles.filter((file) =>
      ALLOWED_FILE_TYPES.includes(file.type)
    );

    const totalFiles = [...selectedFiles, ...validFiles];
    if (totalFiles.length > MAX_UPLOAD_FILES) {
      alert(`You can only upload up to ${MAX_UPLOAD_FILES} files.`);
      return;
    }

    setSelectedFiles(totalFiles);
    e.target.value = "";
  };

  const handleRemove = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleConfirm = () => {
    console.log("Uploading:", selectedFiles);
    setSelectedFiles([]);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Upload Files</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Upload Documents</DialogTitle>
          <DialogDescription>
            Allowed: PDF, DOCX, TXT, XLSX. Max: {MAX_UPLOAD_FILES} files.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-2">
          <Input
            id="file-upload"
            type="file"
            accept={ALLOWED_FILE_TYPES.join(",")}
            multiple
            onChange={handleFileAdd}
            ref={fileInputRef}
          />

          {selectedFiles.length > 0 && (
            <ScrollArea className="border rounded-md max-h-[150px] p-2">
              <div className="space-y-2">
                {selectedFiles.map((file, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between gap-2 text-sm"
                  >
                    <div className="flex flex-col truncate max-w-[70%]">
                      <span className="truncate font-medium">{file.name}</span>
                      <span className="text-xs text-muted-foreground">
                        {formatSize(file.size)}
                      </span>
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
