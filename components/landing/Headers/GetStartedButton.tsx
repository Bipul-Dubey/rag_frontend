"use client";
import { Button } from "@/components/ui/moving-border";
import { PATHS } from "@/constants/paths";
import { useRouter } from "next/navigation";
import React from "react";

const GetStartedButton = ({ text }: { text?: string }) => {
  const router = useRouter();
  return (
    <Button type="button" onClick={() => router.push(PATHS.LOGIN)}>
      {text ? (
        text
      ) : (
        <>
          Get Started <span className="pl-2">→</span>
        </>
      )}
    </Button>
  );
};

export default GetStartedButton;
