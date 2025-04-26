import { SignIn } from "@clerk/nextjs";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
      <SignIn
        routing="hash"
        signInUrl="/rag"
        afterSignInUrl={"/rag"}
        signUpUrl="/sign-up"
      />
    </div>
  );
};

export default Page;
