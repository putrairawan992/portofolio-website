import type { Metadata, Viewport } from 'next';
import { Space_Grotesk, DM_Sans, DM_Mono } from 'next/font/google';
import './globals.css';
import CustomCursor from './components/CustomCursor';
import StyledJsxRegistry from './StyledJsxRegistry';

const display = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
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
    'Full Stack Engineer based in Jakarta, Indonesia with 9+ years across enterprise software, fintech, AI automation, web and mobile products.',
  keywords: [
    'Full Stack Engineer',
    'Next.js',
    'NestJS',
    'TypeScript',
    'React',
    'Putra Irawan',
    'Jakarta',
    'Software Engineer',
    'AI Automation',
    'Salesforce',
    'ERP',
  ],
  authors: [{ name: 'Putra Irawan' }],
  openGraph: {
    title: 'Putra Irawan — Full Stack Engineer',
    description:
      'Full Stack Engineer, AI Automation and Enterprise Systems. 9+ years of experience.',
    type: 'website',
    locale: 'en_US',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#07070B',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body>
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <StyledJsxRegistry>
          <CustomCursor />
          {children}
        </StyledJsxRegistry>
      </body>
    </html>
  );
}
