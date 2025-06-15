"use client";
import React, { useEffect, useState } from "react";
import { Briefcase, GraduationCap, Gavel, FileText } from "lucide-react";
import { motion } from "framer-motion";

const useCases = [
  {
    title: "Students",
    description:
      "Summarize textbooks, research papers, or lecture notes instantly.",
    icon: <GraduationCap className="h-6 w-6 text-purple-400" />,
  },
  {
    title: "Professionals",
    description: "Quickly scan through reports, proposals, or technical docs.",
    icon: <Briefcase className="h-6 w-6 text-purple-400" />,
  },
  {
    title: "Legal Teams",
    description: "Analyze contracts and extract key clauses in seconds.",
    icon: <Gavel className="h-6 w-6 text-purple-400" />,
  },
  {
    title: "Writers & Editors",
    description:
      "Get summaries and clarity from long-form drafts or source material.",
    icon: <FileText className="h-6 w-6 text-purple-400" />,
  },
];

const UseCasesSection = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative py-24 px-6 sm:px-10 lg:px-24 text-white overflow-hidden">
      {/* 🌌 Reversed Color + 50% Bigger Pulse */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-[375px] h-[375px] bg-purple-600 rounded-full blur-[135px] opacity-25 absolute -bottom-16 left-0 animate-[pulse_6s_ease-in-out_infinite]" />
        <div className="w-[375px] h-[375px] bg-blue-600 rounded-full blur-[135px] opacity-25 absolute -top-16 right-0 animate-[pulse_6s_ease-in-out_infinite_3s]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-extrabold mb-4"
        >
          {`Who It's For`}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-white/70 text-lg mb-12 max-w-2xl mx-auto"
        >
          KnowYourDocs is built for anyone who needs to make sense of complex
          documents—fast.
        </motion.p>

        {mounted && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="group bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-500/20 rounded-md">
                    {useCase.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {useCase.title}
                    </h3>
                    <p className="text-sm text-white/70">
                      {useCase.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default UseCasesSection;
