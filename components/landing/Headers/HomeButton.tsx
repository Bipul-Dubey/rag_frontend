"use client";
import Image from "next/image";
import React from "react";

const HomeButton = () => {
  return (
    <Image
      width={20}
      height={20}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      src="/icons/home.svg"
      alt="home"
      className="hidden md:inline-block h-12 w-12 p-2 border border-white/20 rounded-xl bg-white/10 backdrop-blur-md shadow-md animate-pulse"
    />
  );
};

export default HomeButton;
