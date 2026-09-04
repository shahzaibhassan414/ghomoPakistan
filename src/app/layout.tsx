import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { config } from "@/config";
import Link from "next/link";

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair" 
});
const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-outfit" 
});

export const metadata: Metadata = {
  title: `${config.businessName} | ${config.tagline}`,
  description: "Join our exclusive group tours and unforgettable travel experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${outfit.variable} font-sans bg-background text-foreground antialiased selection:bg-accent selection:text-white`}>
        <Navbar />
        
        {/* Sticky Mobile WhatsApp CTA */}
        <div className="fixed bottom-6 right-6 z-50 md:hidden">
          <Link href={config.whatsappLink} target="_blank" rel="noopener noreferrer">
            <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] animate-pulse">
               <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"/><path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"/><path d="M9.5 15c1.167 1.667 3.833 1.667 5 0"/></svg>
            </div>
          </Link>
        </div>

        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
