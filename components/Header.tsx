"use client";

import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";
import FileUpload from "./FileUpload";
import { useDocumentContext } from "@/ContextManager";

const Header: React.FC = () => {
  const { document } = useDocumentContext();
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm dark:shadow-md">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-2">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Company Logo"
            width={120}
            height={120}
            priority
          />
        </div>

        {/* User Section */}
        <div className="flex items-center space-x-2">
          <div
            title="Quries limit left"
            className="relative w-9 h-9 mr-4 rounded-full border-3 border-emerald-500 flex items-start justify-center text-white text-[14px] font-bold"
          >
            {document?.queries_left_today ?? 0}
            <div className="absolute bottom-0 text-[10px] text-gray-300 font-normal">
              Left
            </div>
          </div>{" "}
          <FileUpload />
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </header>
  );
};

export default Header;
