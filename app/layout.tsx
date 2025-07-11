import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { APP_URL } from "@/constants";

export const metadata: Metadata = {
  title: "KnowYourDocs – AI Document Assistant",
  description:
    "KnowYourDocs lets you upload and chat with your documents using AI. Ask questions, get instant answers, and explore your files effortlessly.",
  keywords: [
    "AI Document Chat",
    "Chat with PDF",
    "RAG chatbot",
    "Document Q&A",
    "PDF chat",
    "AI assistant for documents",
    "Upload and ask documents",
    "Doc chatbot",
    "Voice document assistant",
  ],
  authors: [{ name: "KnowYourDocs Team", url: APP_URL }],
  creator: "KnowYourDocs",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  metadataBase: new URL(APP_URL),
  openGraph: {
    title: "KnowYourDocs – Upload & Chat with Your Documents",
    description:
      "Interact with your PDFs, Word files, and text documents using smart AI chat. Supports voice, RAG, and multi-document understanding.",
    url: APP_URL,
    siteName: "KnowYourDocs",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "KnowYourDocs Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KnowYourDocs – AI Chat for Your Documents",
    description:
      "Upload, manage, and chat with documents using AI. Ask questions, get answers, and even use voice.",
    images: ["/logo.png"],
    creator: "@knowyourdocs",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: APP_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" className="scroll-smooth dark">
        <body className={`antialiased`} suppressHydrationWarning>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
