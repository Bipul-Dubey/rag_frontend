"use client";
import Header from "@/components/Header";
import { DocumentProvider } from "@/ContextManager";
import { useAuth } from "@clerk/nextjs";
import { Metadata } from "next";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/50">
      <div className="bg-white/10 dark:bg-gray-800/40 border border-white/20 dark:border-gray-700/50 rounded-2xl p-6 shadow-lg flex flex-col items-center space-y-4">
        <div className="w-10 h-10 bg-white/30 dark:bg-gray-500/50 rounded-full animate-ping"></div>
      </div>
    </div>
  );
};

export default function RagLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isSignedIn } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (isSignedIn === false) {
      router.push("/");
    }
  }, [isSignedIn]);

  if (isSignedIn === undefined) return <Loader />;

  return (
    <DocumentProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex flex-col bg-white text-black dark:bg-gray-800 dark:text-white">
          {children}
        </main>
      </div>
    </DocumentProvider>
  );
}
