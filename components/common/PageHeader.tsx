import React from "react";
import { cn } from "@/lib/utils";
import { Typography } from "./Typography";

interface PageHeaderProps {
  children: React.ReactNode;
  title: string;
  icon?: React.ReactNode;
  right?: React.ReactNode;
  className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  children,
  icon,
  right,
  className,
  title,
}) => {
  return (
    <div>
      <div
        className={cn(
          "flex items-center justify-between border-b pb-3 mb-3 bg-background",
          className
        )}
      >
        <div className="flex items-center gap-2">
          {icon && <div>{icon}</div>}
          <Typography variant="h3">{title}</Typography>
        </div>
        {right && <div>{right}</div>}
      </div>
      {children}
    </div>
  );
};

export default PageHeader;
