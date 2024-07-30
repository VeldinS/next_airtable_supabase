import React from 'react';
import './globals.css';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { NextUIProvider } from '@nextui-org/react';
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-rubik',
});

export const metadata: Metadata = {
  title: 'Veldin Task',
  description: 'Interview task using Next.js, Airtable & Supabase',
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
      <html lang="en">
        <body className={`${poppins.className} ${inter.className}`}>
          <NextUIProvider>
            {children}
          </NextUIProvider>
        <Analytics />
        </body>
      </html>
  );
};

export default RootLayout;
