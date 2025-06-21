"use client";
import LayoutWrapper from "@/components/rag/layoutwrapper";
import Loader from "@/components/common/Loader";
import { PATHS } from "@/constants/paths";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

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
  return (
    <div className="bg-[#020515] min-h-screen">
      <LayoutWrapper>{children}</LayoutWrapper>
    </div>
  );
}
