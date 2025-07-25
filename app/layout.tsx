import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"
import Script from 'next/script'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ableton Live 12 AI Assistant | Learn Ableton Live 12",
  description: "Get expert answers to Ableton Live 12 questions and learn Ableton Live 12 with AI-powered assistance for all skill levels.",
  keywords: ["Ableton", "AI", "Ableton Live 12", "Ableton Live", "Ableton Live 12 documentation", "Ableton Live 12 assistant", "Ableton Live 12 learning"],
  authors: [{ name: "Rafael Saraceni", url: "https://saraceni.me/" }],
  creator: "Rafael Saraceni",
  metadataBase: new URL("https://ableton-ai-agent.vercel.app/"),
  alternates: {
    canonical: "/",
    languages: {
      'en-US': "/en-us",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Ableton Live 12 AI Assistant | Learn Ableton Live 12",
    description: "Get expert answers to Ableton Live 12 questions and learn Ableton Live 12 with AI-powered assistance for all skill levels.",
    url: "https://ableton-ai-agent.vercel.app/", // Replace with your actual URL
    images: [
      {
        url: "/app_preview.png", // Path to the image in the public folder
        width: 1200, // Optional: specify width
        height: 630, // Optional: specify height
        alt: "Preview Image", // Optional: alt text for the image
      },
      {
        url: "/avatar.png", // Square image for mobile previews
        width: 1200,
        height: 1200,
        alt: "Ableton Live 12 AI Assistant",
      },
    ],
    type: "website",
    locale: "en_US",
    siteName: "Ableton Live 12 AI Assistant",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Ableton Live 12 AI Assistant | Learn Ableton Live 12",
    description: "Get expert answers to Ableton Live 12 questions and learn Ableton Live 12 with AI-powered assistance for all skill levels.",
    images: ['/app_preview.png'],
    creator: "@saraceni_br",
    site: "@saraceni_br",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
        <Analytics />
      </body>
      <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
    </html>
  );
}