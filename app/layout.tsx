import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: 'Custom Web Design for Local & International Businesses | Local Site Growth',
  description: 'Custom website design for local businesses, tradies, and independent professionals. Free demo before any commitment — no upfront cost, no obligation. Serving NZ and international clients.',
  openGraph: {
    title: 'Custom Web Design for Local & International Businesses | Local Site Growth',
    description: 'Custom website design for local businesses, tradies, and independent professionals. Free demo before any commitment — no upfront cost, no obligation.',
    url: 'https://www.localsitegrowth.com',
    siteName: 'Local Site Growth',
    images: [{ url: 'https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/c9e9a94f-ed3d-464e-c57e-41a53befa600/publicContain', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', site: '@localsitegrowth' },
  alternates: { canonical: 'https://www.localsitegrowth.com' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Local Site Growth",
    "url": "https://www.localsitegrowth.com",
    "telephone": "+64225707467",
    "email": "info@localsitegrowth.com",
    "address": { "@type": "PostalAddress", "addressCountry": "NZ" },
    "areaServed": [
      { "@type": "Country", "name": "New Zealand" },
      { "@type": "AdministrativeArea", "name": "International" }
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-white">
        {children}
      </body>
    </html>
  );
}
