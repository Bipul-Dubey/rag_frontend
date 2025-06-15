"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  const router = useRouter();

  return (
    <div className="inline-block">
      <motion.button
        onClick={() => router.back()}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex  items-center gap-2 px-5 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition"
      >
        <ArrowLeft size={18} /> Go Back
      </motion.button>
    </div>
  );
}
