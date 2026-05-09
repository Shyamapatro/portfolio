import type { Metadata } from "next";
import { EB_Garamond, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScroll";
import { CustomCursor } from "@/components/CustomCursor";
import { CommandPalette } from "@/components/CommandPalette";
import { SITE_CONFIG } from "@/lib/constants";

const ebGaramond = EB_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shyama.dev"),
  title: `${SITE_CONFIG.name} | Fullstack Architect`,
  description: SITE_CONFIG.bio,
  keywords: ["Full Stack Developer", "Backend Architect", "React.js", "Node.js", "Performance Optimization", "Scalable Systems"],
  authors: [{ name: SITE_CONFIG.name }],
  openGraph: {
    title: `${SITE_CONFIG.name} | Fullstack Architect`,
    description: SITE_CONFIG.bio,
    url: "https://shyama.dev",
    siteName: `${SITE_CONFIG.name} Portfolio`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} Portfolio`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} | Fullstack Architect`,
    description: SITE_CONFIG.bio,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ebGaramond.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="bg-[#050505] text-white overflow-x-hidden selection:bg-white selection:text-black">
        <CommandPalette>
          <CustomCursor />
          <SmoothScrollProvider>
            <div className="noise" />
            {children}
          </SmoothScrollProvider>
        </CommandPalette>
      </body>
    </html>
  );
}
