import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://cybermart.vercel.app"),

  title: {
    default: "Cyber Mart — Where Shopping Meets Style",
    template: "%s | Cyber Mart",
  },

  description:
    "Shop fashion, shoes, bags, accessories, and more at Cyber Mart. Discover stylish products, explore great choices, and enjoy a simple, modern online shopping experience.",

  keywords: [
    "Cyber Mart",
    "online shopping",
    "e-commerce",
    "fashion",
    "clothing",
    "shoes",
    "bags",
    "accessories",
    "online fashion store",
    "shop online",
  ],

  authors: [
    {
      name: "Maroof Ali Syed",
    },
  ],

  creator: "Cyber Mart",
  publisher: "Cyber Mart",

  applicationName: "Cyber Mart",

  category: "ecommerce",

  alternates: {
    canonical: "https://cybermart.vercel.app",
  },

  openGraph: {
    type: "website",
    url: "https://cybermart.vercel.app",
    title: "Cyber Mart — Where Shopping Meets Style",
    description:
      "Discover fashion, shoes, bags, accessories, and more at Cyber Mart. Your modern destination for everyday online shopping.",
    siteName: "Cyber Mart",
    images: [
      {
        url: "/logoOg.jpg",
        width: 1200,
        height: 630,
        alt: "Cyber Mart — Where Shopping Meets Style",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cyber Mart — Where Shopping Meets Style",
    description:
      "Discover fashion, shoes, bags, accessories, and more at Cyber Mart.",
    images: ["/logoOg.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const BASE_URL = "https://cybermart.vercel.app";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Cyber Mart",
      url: BASE_URL,
      logo: `${BASE_URL}/og-image.png`,
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      name: "Cyber Mart",
      url: BASE_URL,
      description:
        "An online shopping platform for fashion, clothing, shoes, bags, accessories, and more.",
      publisher: {
        "@id": `${BASE_URL}/#organization`,
      },
    },
  ],
};



export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.className} ${fraunces.variable} h-full antialiased`}
    >
      <body className=" flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <Toaster richColors position="top-right" theme="light" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
