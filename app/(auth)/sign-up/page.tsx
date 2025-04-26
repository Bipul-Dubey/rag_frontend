import { SignUp } from "@clerk/nextjs";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
      <SignUp routing="hash" signInUrl="/" />
    </div>
  );
};

export default Page;
