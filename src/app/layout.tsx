import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sadoer Essence | Transform Your Skin in 10 Days',
  description: 'The ultimate 2-in-1 anti-aging collagen set for smooth, glowing skin without bleaching.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-[#F4F2F0] text-[#0D0D0D]">{children}</body>
    </html>
  );
}
