import { Toaster } from "@/components/ui/sonner";
import { Fragment } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Fragment>
      <Toaster />
      {children}
    </Fragment>
  );
}
