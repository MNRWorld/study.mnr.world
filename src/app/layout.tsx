import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Inter, Hind_Siliguri } from 'next/font/google';
import { cn } from '@/lib/utils';
import MainLayout from './MainLayout';
import { ThemeProvider } from '@/components/theme-provider';
import { AuthProvider } from '@/hooks/use-auth';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const hindSiliguri = Hind_Siliguri({
  subsets: ['bengali'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-hind-siliguri',
});


export const metadata: Metadata = {
  title: 'স্টাডি প্ল্যাটফর্ম',
  description: 'Your central hub for university information.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" suppressHydrationWarning>
      <body className={cn("antialiased", inter.variable, hindSiliguri.variable)}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
          <AuthProvider>
            <MainLayout>
              {children}
            </MainLayout>
            <Toaster />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
