import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import { MusicPlayerProvider } from '@/components/player/MusicPlayerProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'StreamFlow',
  description: 'Your personal music streaming experience.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <MusicPlayerProvider>
          {children}
          <Toaster />
        </MusicPlayerProvider>
      </body>
    </html>
  );
}
