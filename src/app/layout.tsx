import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Basic metadata
  title: {
    default: "Ostendo | System Integration Specialists",
    template: "%s | Ostendo",
  },
  description:
    "Ostendo delivers exceptional system integration solutions with expertise in customized interactive technology, advanced software, and professional display systems.",

  // Canonical URL
  metadataBase: new URL("https://ostendo.com"),
  alternates: {
    canonical: "/",
  },

  // Keywords
  keywords: [
    "system integration",
    "interactive solutions",
    "software development",
    "screen lifting mechanisms",
    "display kiosks",
    "podiums",
    "technology integration",
    "custom technology solutions",
  ],

  // Open Graph / Facebook
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ostendo.com",
    title: "Ostendo | Transforming Ideas Into Reality",
    description:
      "Exceptional system integration solutions with expertise in customized interactive technology, advanced software, and professional display systems.",
    siteName: "Ostendo",
    images: [
      {
        url: "/landing.png", // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "Ostendo - System Integration Specialists",
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Ostendo | System Integration Specialists",
    description:
      "Transforming ideas into reality through cutting-edge, customized technology solutions.",
    images: ["/landing.png"], // Replace with your actual Twitter image
    creator: "@ostendo",
    site: "@ostendo",
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Icons
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },

  // Web app manifest
  manifest: "/site.webmanifest",

  // Theme color
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],

  // Additional metadata
  category: "Technology",
  creator: "Ostendo",
  publisher: "Ostendo",
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },

  // // Verification
  // verification: {
  //   google: "google-site-verification-code", // Replace with actual verification code
  //   yandex: "yandex-verification-code", // Replace with actual verification code
  //   yahoo: "yahoo-verification-code", // Replace with actual verification code
  //   other: {
  //     me: ["info@ostendo.com"],
  //   },
  // },
};

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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
