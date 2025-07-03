import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ...existing code...
export const metadata: Metadata = {
  title: "Buildatronics",
  description:
    "Buildatronics Beginner Kit is the ultimate starter pack for learning electronics. It includes a comprehensive set of components, tools, and resources to help you get started with electronics projects. Perfect for beginners and hobbyists alike.",
  keywords: [
    "Buildatronics",
    "electronics kit",
    "beginner electronics",
    "breadboard projects",
    "STEM",
    "maker",
    "DIY electronics",
    "learn electronics",
    "electronics projects",
    "Arduino",
    "education"
  ],
  openGraph: {
    title: "Buildatronics",
    description:
      "The ultimate starter pack for learning electronics.",
    url: "https://buildatronics.com",
    siteName: "Buildatronics",
    images: [
      {
        url: "https://buildatronics.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Buildatronics Beginner Kit",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buildatronics",
    description:
      "The ultimate starter pack for learning electronics.",
    images: ["https://buildatronics.com/og-image.png"],
    site: "@buildatronics",
  },
  viewport: "width=device-width, initial-scale=1",
  alternates: {
    canonical: "https://buildatronics.com",
  },
};
// ...existing code...

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
