"use client";
import React from "react";
import { FileText, UploadCloud, Bot, Mic } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: <UploadCloud className="w-6 h-6 text-purple-500" />,
    title: "Upload Documents",
    description:
      "Easily upload PDF, Word, or TXT files. We support multiple documents at once.",
  },
  {
    icon: <FileText className="w-6 h-6 text-purple-500" />,
    title: "Smart Document Parsing",
    description:
      "Your content is intelligently chunked, embedded, and prepared for fast semantic search.",
  },
  {
    icon: <Bot className="w-6 h-6 text-purple-500" />,
    title: "Chat with AI",
    description:
      "Ask questions and get precise answers directly from your uploaded documents.",
  },
  {
    icon: <Mic className="w-6 h-6 text-purple-500" />,
    title: "Voice Support (Coming Soon)",
    description:
      "Talk to your documents with voice-enabled chat for hands-free productivity.",
  },
];

const HowItWork = () => {
  return (
    <section
      id="howitwork"
      className="relative bg-background text-foreground py-20 px-6 sm:px-10 lg:px-24 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-[500px] h-[500px] bg-purple-600 rounded-full blur-[180px] opacity-30 absolute top-[-120px] left-[-120px] animate-[pulse_6s_ease-in-out_infinite]" />
        <div className="w-[500px] h-[500px] bg-blue-600 rounded-full blur-[180px] opacity-30 absolute bottom-[-120px] right-[-120px] animate-[pulse_6s_ease-in-out_infinite_3s]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-6"
        >
          How It Works
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-text-muted mb-12 text-lg"
        >
          Interact with your documents in 4 simple steps using AI-powered
          understanding.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="group flex items-start gap-4 p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-md shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="p-2 bg-purple-500/10 rounded-md">{step.icon}</div>
              <div>
                <h3 className="text-lg font-semibold mb-1 text-white">
                  {step.title}
                </h3>
                <p className="text-sm text-white/70">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🎥 Video Demo */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 rounded-xl overflow-hidden shadow-lg"
        >
          <video
            src="/video_demo.mp4"
            playsInline
            autoPlay
            muted
            loop
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWork;
