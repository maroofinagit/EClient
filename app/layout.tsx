import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CyberMart - Your One-Stop Shop",
  description: "Discover the latest in fashion, electronics, and more at CyberMart. Shop now for unbeatable deals and exclusive collections.",
};

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-display",
});


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.className} ${fraunces.variable} h-full antialiased`}
    >
      <body className=" flex flex-col">
        <Toaster richColors position="top-right" theme="light" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
