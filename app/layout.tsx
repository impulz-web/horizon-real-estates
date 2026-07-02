import type {Metadata} from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Horizon Properties | Luxury Real Estate Kenya | Nairobi, Mombasa, Diani',
  description: 'Discover ultra-premium properties, waterfront villas, and luxury estates in Nairobi, Mombasa, Diani Beach, Watamu, Malindi, Naivasha, and Nanyuki. Horizon Properties is Kenya’s premier luxury real estate agency.',
  keywords: [
    'luxury real estate kenya',
    'mansions in karen nairobi',
    'villas in runda',
    'waterfront villas diani',
    'beachfront apartments nyali',
    'watamu luxury villas',
    'houses for sale malindi',
    'naivasha golf estates',
    'nanyuki luxury ranches',
  ],
  openGraph: {
    title: 'Horizon Properties | Premium Luxury Real Estate Kenya',
    description: 'Bespoke residential and commercial estates in Kenya’s most exclusive neighborhoods.',
    type: 'website',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-[#f5f7fa] text-[#1a1a1a] selection:bg-[#003b95] selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

