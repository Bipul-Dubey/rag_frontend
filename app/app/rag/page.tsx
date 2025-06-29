"use client";
import Loader from "@/components/common/Loader";
import { PATHS } from "@/constants/paths";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const RagDashboard = () => {
  const router = useRouter();
  useEffect(() => {
    router.push(PATHS.RAG_DOCUMENTS);
  }, []);
  return <Loader />;
};

export default RagDashboard;
