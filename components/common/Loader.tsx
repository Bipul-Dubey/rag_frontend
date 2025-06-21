import React from "react";
import { cn } from "@/lib/utils";

const Loader = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center w-full min-h-screen py-8",
        className
      )}
    >
      <div className="relative w-10 h-10">
        <div
          className="absolute inset-0 rounded-full animate-spin 
          bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 
          p-1"
        >
          <div className="h-full w-full rounded-full bg-background" />
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
