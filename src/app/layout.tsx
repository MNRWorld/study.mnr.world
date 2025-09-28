import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/hooks/use-auth";
import Header from "@/components/layout/Header";
import DynamicFooter from "@/components/layout/DynamicFooter";
import BackToTopButton from "@/components/common/BackToTopButton";
import { Inter, Hind_Siliguri } from "next/font/google";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "স্টাডি প্ল্যাটফর্ম",
  description: "Your central hub for university information.",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hind-siliguri",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn">
      <head>
        <link
          rel="preconnect"
          href="https://raw.githubusercontent.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://images.unsplash.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={cn(
          "min-h-screen flex flex-col antialiased",
          inter.variable,
          hindSiliguri.variable,
        )}
      >
        <AuthProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <DynamicFooter />
          <BackToTopButton />
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
