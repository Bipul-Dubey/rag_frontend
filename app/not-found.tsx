"use client";
import { motion } from "framer-motion";
import BackButton from "@/components/BackButton";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center max-w-md"
      >
        <h1 className="text-6xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          404
        </h1>
        <p className="text-xl font-semibold mb-2">Page Not Found</p>
        <p className="text-white/70 mb-6">
          Sorry, we couldn’t find the page you’re looking for.
        </p>

        <BackButton />
      </motion.div>

      {/* Background animation */}
      <motion.div
        className="absolute inset-0 -z-10 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
      >
        <motion.div
          className="w-[800px] h-[800px] bg-purple-500/20 rounded-full blur-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.2, 0.15] }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </div>
  );
}
