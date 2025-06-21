"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Eye,
  File,
  FileCode,
  FileText,
  MessageCircle,
  Trash2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import CustomTooltip from "../common/CustomTooltip";
import { Typography } from "../common/Typography";

export type DocumentFile = {
  id: string;
  name: string;
  size: number;
  type: string;
};

interface DocumentItemProps {
  file: DocumentFile;
  onView?: (file: DocumentFile) => void;
  onDelete?: (file: DocumentFile) => void;
  onChat?: (file: DocumentFile) => void;
}

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

const DocumentItem: React.FC<DocumentItemProps> = ({
  file,
  onView,
  onDelete,
  onChat,
}) => {
  return (
    <Card
      className={cn(
        "p-0 w-full max-w-full md:max-w-[450px] transition-all hover:shadow-sm hover:border-primary border border-border rounded-xl bg-muted"
      )}
    >
      <CardContent className="p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* File Info Section */}
        <div className="flex flex-1 items-start gap-4 overflow-hidden">
          <div className="p-2 bg-muted rounded-md shrink-0">
            {getIcon(file.type)}
          </div>

          <div className="space-y-1 overflow-hidden">
            <CustomTooltip title={file.name}>
              <Typography
                variant="p"
                className="truncate max-w-[220px] font-medium cursor-default"
              >
                {file.name}
              </Typography>
            </CustomTooltip>

            <CustomTooltip title={file.type}>
              <Typography
                variant="muted"
                className="truncate max-w-[220px] text-xs"
              >
                {file.type}
              </Typography>
            </CustomTooltip>

            <Typography variant="muted" className="text-xs">
              {formatSize(file.size)}
            </Typography>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 ml-auto sm:ml-0 sm:justify-end">
          <CustomTooltip title="View">
            <Button
              variant="outline"
              size="icon"
              onClick={() => onView?.(file)}
            >
              <Eye className="w-4 h-4" />
            </Button>
          </CustomTooltip>

          <CustomTooltip title="Chat">
            <Button
              variant="outline"
              size="icon"
              onClick={() => onChat?.(file)}
            >
              <MessageCircle className="w-4 h-4" />
            </Button>
          </CustomTooltip>

          <CustomTooltip title="Delete">
            <Button
              variant="outline"
              size="icon"
              onClick={() => onDelete?.(file)}
            >
              <Trash2 className="w-4 h-4 text-destructive" />
            </Button>
          </CustomTooltip>
        </div>
      </CardContent>
    </Card>
  );
};

export default DocumentItem;
