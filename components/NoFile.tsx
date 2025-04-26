import Image from "next/image";
import React from "react";

const NoFile = () => {
  return (
    <div className="flex flex-col flex-1 h-full min-h-0 justify-center items-center">
      <div className="bg-gray-700 p-6 rounded-2xl shadow-lg max-w-[300px] flex flex-col items-center justify-center">
        <Image
          height={20}
          width={20}
          src="/upload.svg"
          alt="Upload Icon"
          className="w-16 h-16 mb-4 animate-bounce"
        />
        <h2 className="text-2xl font-semibold mb-2">No Document Found</h2>
        <p className="text-gray-300 text-center">
          Please upload a file to start your conversation.
        </p>
      </div>
    </div>
  );
};

export default NoFile;
