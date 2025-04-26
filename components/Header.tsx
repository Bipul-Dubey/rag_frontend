"use client";

import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";
import FileUpload from "./FileUpload";

const Header: React.FC = () => {
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
