import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import MainLayout from './MainLayout';
import { AuthProvider } from '@/hooks/use-auth';

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
    <html lang="bn">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body>
          <AuthProvider>
            <MainLayout>
              {children}
            </MainLayout>
            <Toaster />
          </AuthProvider>
      </body>
    </html>
  );
}
