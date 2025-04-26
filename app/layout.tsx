import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "KnowYourDocs | RAG AI",
  description: "Retrieval Augmented Generation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          suppressHydrationWarning
          className="dark flex flex-col min-h-screen"
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
