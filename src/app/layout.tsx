import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { satoshi } from '@/utils/customfonts';
import { GoogleTagManager } from '@next/third-parties/google';
import RecaptchaProvider from '@/components/RecaptchaProvider';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
const description = 'Transform your career with Saeternus';

export const metadata: Metadata = {
  metadataBase: new URL(`${baseURL}`),
  title: {
    default: 'Saeternus',
    template: '%s - Saeternus',
  },
  description: description,
  openGraph: {
    title: 'Saeternus',
    description: description,
    type: 'website',
    locale: 'en_US',
    url: `${baseURL}`,
    siteName: 'Saeternus',
    images: [{ url: 'https://saeternus.com/android-chrome-192x192.png' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <GoogleTagManager gtmId='GTM-W4HCJHQQ' />
      <body
        className={cn(
          'min-h-screen antialiased',
          `${satoshi.variable} font-satoshi`
        )}
      >
        <RecaptchaProvider>
          <Navbar />
          {children}
          <Footer />
        </RecaptchaProvider>
      </body>
    </html>
  );
}
