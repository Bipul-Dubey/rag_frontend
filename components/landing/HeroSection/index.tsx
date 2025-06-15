import { BackgroundBeams } from "@/components/ui/background-beams";
import React from "react";
import GetStartedButton from "../Headers/GetStartedButton";
import HowItWorkButton from "./HowItWorkButton";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4">
      {/* Content */}
      <div className="relative z-10 max-w-5xl">
        <p className="text-sm md:text-base uppercase tracking-wide text-purple-400 mb-4 border border-purple-500/30 px-4 py-1 inline-block rounded-full">
          AI-Powered Document Intelligence
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          Upload. Ask. Understand.
          <br />
          Your Documents, Smartly Answered.
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
          KnowYourDocs lets you chat with PDFs, Word docs, and more – powered by
          advanced AI and RAG. Upload multiple documents, ask questions, and get
          precise answers instantly.
        </p>

        {/* Buttons */}
        <div className="flex w-full flex-col sm:flex-row items-center gap-4 justify-center">
          <GetStartedButton text="Try Now" />
          <HowItWorkButton />
        </div>
      </div>
      <BackgroundBeams />
    </section>
  );
};

export default HeroSection;
