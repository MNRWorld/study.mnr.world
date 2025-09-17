import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { MusicPlayerProvider } from '@/components/player/MusicPlayerProvider';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'StreamFlow',
  description: 'Your personal music streaming experience.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={cn('font-body antialiased')}>
        <MusicPlayerProvider>
          {children}
        </MusicPlayerProvider>
        <Toaster />
      </body>
    </html>
  );
}
