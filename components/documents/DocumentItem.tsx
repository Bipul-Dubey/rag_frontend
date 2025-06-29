"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Brain,
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
import { IDocument, TDOCUMENT_STATUS } from "@/types";
import { Badge } from "../ui/badge";

interface DocumentItemProps {
  file: IDocument;
  onView?: (file: IDocument) => void;
  onDelete?: (file: IDocument) => void;
  onChat?: (file: IDocument) => void;
  onTrain?: (file: IDocument) => void;
  disableButton: boolean;
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

const statusMap: Record<
  TDOCUMENT_STATUS,
  { label: string; variant?: "default" | "secondary" | "destructive" }
> = {
  pending: { label: "Pending", variant: "default" },
  processing: { label: "Processing", variant: "secondary" },
  ready: { label: "Ready", variant: "default" },
  failed: { label: "Failed", variant: "destructive" },
};

const DocumentItem: React.FC<DocumentItemProps> = ({
  file,
  onView,
  onDelete,
  onChat,
  onTrain,
  disableButton,
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
            {getIcon(file.filename)}
          </div>

          <div className="space-y-1 overflow-hidden">
            <CustomTooltip title={file.filename}>
              <Typography
                variant="p"
                className="truncate max-w-[220px] font-medium cursor-default"
              >
                {file.filename}
              </Typography>
            </CustomTooltip>

            <CustomTooltip title={file.filetype}>
              <Typography
                variant="muted"
                className="truncate max-w-[220px] text-xs"
              >
                {file.filetype}
              </Typography>
            </CustomTooltip>

            <Typography variant="muted" className="text-xs">
              {formatSize(file.size)}
            </Typography>

            <Badge variant={statusMap[file.status].variant} className="text-xs">
              {statusMap[file.status].label}
            </Badge>
          </div>
        </div>

        {/* Action Buttons (2 columns, 2 buttons per row) */}
        <div className="grid grid-cols-2 gap-2 ml-auto sm:ml-0">
          <CustomTooltip title="View">
            <Button
              variant="outline"
              size="icon"
              onClick={() => onView?.(file)}
              disabled={disableButton}
            >
              <Eye className="w-4 h-4" />
            </Button>
          </CustomTooltip>

          <CustomTooltip title="Train">
            <Button
              variant="outline"
              size="icon"
              onClick={() => onTrain?.(file)}
              disabled={
                disableButton ||
                file.status === "ready" ||
                file.status === "processing"
              }
            >
              <Brain className="w-4 h-4" />
            </Button>
          </CustomTooltip>

          <CustomTooltip title="Chat">
            <Button
              variant="outline"
              size="icon"
              onClick={() => onChat?.(file)}
              disabled={disableButton}
            >
              <MessageCircle className="w-4 h-4" />
            </Button>
          </CustomTooltip>

          <CustomTooltip title="Delete">
            <Button
              variant="outline"
              size="icon"
              onClick={() => onDelete?.(file)}
              disabled={disableButton}
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
