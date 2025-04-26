"use client";
import React, { useEffect } from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    localStorage.removeItem("conversations");
  }, []);
  return <div>{children}</div>;
}
