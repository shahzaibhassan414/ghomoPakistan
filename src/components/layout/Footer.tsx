"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { config } from "@/config";
import { 
  Compass, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUp, 
  Heart,
  Send,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#021c10] text-slate-300 relative pt-16 pb-8 border-t border-white/10 overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#059669]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#074125]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-emerald-950/60">
          {/* Col 1: Brand & Bio */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white shadow-lg p-0.5 shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Ghomo Pakistan Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-white tracking-tight leading-none">
                  {config.shortName} <span className="text-[#34d399]">Pakistan</span>
                </span>
                <span className="text-[10px] uppercase font-extrabold tracking-widest text-[#34d399] mt-0.5">
                  Unforgettable Journeys
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-300/80 leading-relaxed">
              Explore the raw beauty of Pakistan. We organize curated group tours, custom private trips, and northern mountain road trips for curious wanderers.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-col gap-2 pt-2">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0" />
                <span>Verified licensed mountain tour captains</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-[#10b981] shrink-0" />
                <span>100% safe for families & solo female travelers</span>
              </div>
            </div>

            {/* Social Icons SVG */}
            <div className="flex items-center gap-3 pt-2">
              <Link
                href={config.socials.instagram}
                target="_blank"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#059669] text-white flex items-center justify-center transition-all hover:scale-110 shrink-0"
                aria-label="Instagram"
              >
                <svg width="16" height="16" className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </Link>
              <Link
                href={config.socials.facebook}
                target="_blank"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#059669] text-white flex items-center justify-center transition-all hover:scale-110 shrink-0"
                aria-label="Facebook"
              >
                <svg width="16" height="16" className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.597 0 9 1.582 9 4.615V8z"/>
                </svg>
              </Link>
              <Link
                href={config.socials.youtube}
                target="_blank"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#059669] text-white flex items-center justify-center transition-all hover:scale-110 shrink-0"
                aria-label="YouTube"
              >
                <svg width="16" height="16" className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 tracking-wide uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#10b981]" />
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-white hover:translate-x-1 inline-block transition-transform">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/packages" className="hover:text-white hover:translate-x-1 inline-block transition-transform">
                  All Tour Packages
                </Link>
              </li>
              <li>
                <Link href="/craft-your-tour" className="hover:text-white hover:translate-x-1 inline-block transition-transform text-[#34d399] font-semibold">
                  Craft Your Custom Tour
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white hover:translate-x-1 inline-block transition-transform">
                  Moments & Community Wall
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white hover:translate-x-1 inline-block transition-transform">
                  About Our Community
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white hover:translate-x-1 inline-block transition-transform">
                  Contact & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Tours */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 tracking-wide uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#10b981]" />
              Popular Adventures
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/packages/fairy-meadows-nanga-parbat-5-days" className="hover:text-white flex items-center justify-between group">
                  <span className="group-hover:translate-x-1 transition-transform">Fairy Meadows & Nanga Parbat</span>
                  <span className="text-xs text-[#34d399] font-bold">5 Days</span>
                </Link>
              </li>
              <li>
                <Link href="/packages/hunza-khunjerab-5-days" className="hover:text-white flex items-center justify-between group">
                  <span className="group-hover:translate-x-1 transition-transform">Hunza & Khunjerab Pass</span>
                  <span className="text-xs text-[#34d399] font-bold">5 Days</span>
                </Link>
              </li>
              <li>
                <Link href="/packages/skardu-deosai-6-days" className="hover:text-white flex items-center justify-between group">
                  <span className="group-hover:translate-x-1 transition-transform">Skardu & Deosai Plains</span>
                  <span className="text-xs text-[#34d399] font-bold">6 Days</span>
                </Link>
              </li>
              <li>
                <Link href="/packages/neelum-valley-kashmir-4-days" className="hover:text-white flex items-center justify-between group">
                  <span className="group-hover:translate-x-1 transition-transform">Neelum Valley Kashmir</span>
                  <span className="text-xs text-[#34d399] font-bold">4 Days</span>
                </Link>
              </li>
              <li>
                <Link href="/packages/swat-kalam-3-days" className="hover:text-white flex items-center justify-between group">
                  <span className="group-hover:translate-x-1 transition-transform">Swat & Kalam Valley</span>
                  <span className="text-xs text-[#34d399] font-bold">3 Days</span>
                </Link>
              </li>
              <li>
                <Link href="/packages/astore-minimarg-rainbow-lake-6-days" className="hover:text-white flex items-center justify-between group">
                  <span className="group-hover:translate-x-1 transition-transform">Astore & Minimarg</span>
                  <span className="text-xs text-[#34d399] font-bold">6 Days</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Get in Touch & Office */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 tracking-wide uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#10b981]" />
              Get In Touch
            </h3>
            <div className="space-y-3.5 text-sm">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#10b981] mt-1 shrink-0" />
                <div>
                  <div className="text-xs text-slate-400">Call / WhatsApp Hotline:</div>
                  <a href={`tel:${config.phone}`} className="text-white font-bold hover:text-[#34d399] transition-colors">
                    {config.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#10b981] mt-1 shrink-0" />
                <div>
                  <div className="text-xs text-slate-400">Email Address:</div>
                  <a href={`mailto:${config.email}`} className="text-white hover:text-[#34d399] transition-colors">
                    {config.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#10b981] mt-1 shrink-0" />
                <div>
                  <div className="text-xs text-slate-400">Head Office:</div>
                  <span className="text-slate-300 text-xs leading-relaxed">
                    {config.addresses.lahore}
                  </span>
                </div>
              </div>

              {/* Quick WhatsApp Button */}
              <div className="pt-2">
                <Link
                  href={config.whatsappLink}
                  target="_blank"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#059669]/20 border border-[#059669]/40 text-[#34d399] hover:bg-[#059669] hover:text-white font-bold text-xs transition-all w-full justify-center"
                >
                  <Send className="w-3.5 h-3.5" />
                  Instant WhatsApp Booking
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-1 text-center sm:text-left">
            <span>© {new Date().getFullYear()} {config.businessName}. All rights reserved. Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#10b981] fill-[#10b981] mx-0.5" />
            <span>for Pakistani Travelers.</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-slate-200">Help & Support</Link>
            <Link href="/about" className="hover:text-slate-200">Terms & Safety</Link>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-300 hover:text-white px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-xs font-semibold"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
