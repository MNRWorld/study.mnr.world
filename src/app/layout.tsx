import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import MainLayout from "./MainLayout";
import { AuthProvider } from "@/hooks/use-auth";

export const metadata: Metadata = {
  title: "স্টাডি প্ল্যাটফর্ম",
  description: "Your central hub for university information.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn">
      <head>
        <link rel="preconnect" href="https://raw.githubusercontent.com" />
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body>
        <AuthProvider>
          <MainLayout>{children}</MainLayout>
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
