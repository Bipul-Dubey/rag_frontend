"use client";
import Loader from "@/components/ui/Loader";
import { PATHS } from "@/constants/paths";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Fragment, useEffect } from "react";

export default function RagLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isSignedIn } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (isSignedIn === false) {
      router.push(PATHS.LOGIN);
    }
  }, [isSignedIn, router]);

  if (isSignedIn === undefined) return <Loader />;
  return <div className="bg-[#010415] min-h-screen">{children}</div>;
}
