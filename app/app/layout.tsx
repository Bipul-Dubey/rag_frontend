"use client";
import { Toaster } from "@/components/ui/sonner";
import { Fragment, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Fragment>
        <Toaster />
        {children}
      </Fragment>
    </QueryClientProvider>
  );
}
