import type { Metadata, Viewport } from 'next';
import { Syne, DM_Sans, DM_Mono } from 'next/font/google';
import './globals.css';
import CustomCursor from './components/CustomCursor';

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-body',
  display: 'swap',
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Putra Irawan — Full Stack Engineer',
  description:
    'Full Stack Engineer based in Jakarta, Indonesia. 9+ years crafting high-performance digital products — fintech, government systems, event-tech at scale.',
  keywords: [
    'Full Stack Engineer',
    'Next.js',
    'NestJS',
    'TypeScript',
    'React',
    'Putra Irawan',
    'Jakarta',
    'Software Engineer',
  ],
  authors: [{ name: 'Putra Irawan' }],
  openGraph: {
    title: 'Putra Irawan — Full Stack Engineer',
    description:
      'Full Stack Engineer based in Jakarta, Indonesia. 9+ years crafting high-performance digital products.',
    type: 'website',
    locale: 'en_US',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0A0A0B',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body>
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
