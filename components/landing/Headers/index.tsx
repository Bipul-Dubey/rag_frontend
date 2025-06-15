import Image from "next/image";
import React from "react";
import HomeButton from "./HomeButton";
import GetStartedButton from "./GetStartedButton";

const Headers = () => {
  return (
    <header className="w-full fixed top-0 z-50 bg-transparent text-white shadow-sm">
      <div className="p-2 min-h-fit mx-10 flex justify-between items-center">
        <div>
          <Image src={"/logo.png"} alt="KnowYourDocs" width={110} height={50} />
        </div>
        <HomeButton />
        <GetStartedButton />
      </div>
    </header>
  );
};

export default Headers;
