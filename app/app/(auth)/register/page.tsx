import { PATHS } from "@/constants/paths";
import { SignUp } from "@clerk/nextjs";
import React from "react";

const Register = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden text-white">
      <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-purple-700 rounded-full blur-[200px] opacity-30 animate-pulse" />
      <div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-blue-600 rounded-full blur-[200px] opacity-30 animate-pulse delay-200" />
      <div className="absolute top-[20%] right-[30%] w-[300px] h-[300px] bg-pink-500 rounded-full blur-[180px] opacity-20 animate-pulse delay-500" />

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <SignUp routing="hash" signInUrl={PATHS.LOGIN} />
      </div>
    </div>
  );
};

export default Register;
