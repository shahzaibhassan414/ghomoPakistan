"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { config } from "@/config";
import { 
  Menu, 
  X, 
  Phone, 
  MapPin, 
  Compass, 
  Sparkles, 
  MessageCircle,
  ChevronRight,
  Send
} from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "All Packages", href: "/packages" },
    { name: "Craft Your Tour", href: "/craft-your-tour" },
    { name: "Moments", href: "/gallery" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isHome = pathname === "/";

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      {/* Top micro-bar */}
      <div className={`hidden lg:block transition-all duration-300 text-xs ${
        isScrolled 
          ? "bg-[#042c19] text-slate-300 py-1.5 border-b border-white/5" 
          : isHome
          ? "bg-black/40 backdrop-blur-sm text-white/90 py-2 border-b border-white/10"
          : "bg-[#032012] text-slate-300 py-1.5 border-b border-white/10"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#10b981] shrink-0" />
              <a href={`tel:${config.phone}`} className="hover:text-white transition-colors font-medium">
                {config.hotlineDisplay}
              </a>
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#10b981] shrink-0" />
              <span className="font-medium">Lahore, Pakistan</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/90 font-medium text-xs">✨ Departures Every Thursday & Friday</span>
            <span className="text-white/30">|</span>
            <Link 
              href={config.whatsappLink} 
              target="_blank" 
              className="text-[#34d399] hover:text-white font-bold flex items-center gap-1"
            >
              WhatsApp Support
            </Link>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className={`transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-md py-2.5 sm:py-3 text-slate-900 border-b border-slate-200/70" 
          : isHome
          ? "bg-gradient-to-b from-black/85 via-black/40 to-transparent py-3 sm:py-4 text-white"
          : "bg-[#042c19] shadow-lg py-3 sm:py-3.5 text-white border-b border-emerald-900/40"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full overflow-hidden bg-white shadow-md group-hover:scale-105 transition-transform shrink-0 p-0.5 border border-white/50">
              <Image
                src="/images/logo.png"
                alt="Ghomo Pakistan Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className={`text-lg sm:text-xl font-black tracking-tight leading-none ${
                isScrolled ? "text-[#074125]" : "text-white"
              }`}>
                {config.shortName} <span className="text-[#059669]">Pakistan</span>
              </span>
              <span className={`text-[9px] sm:text-[10px] uppercase font-black tracking-widest mt-0.5 ${
                isScrolled ? "text-[#059669]" : "text-emerald-300"
              }`}>
                Wander & Explore
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-xl text-sm font-bold transition-all duration-200 ${
                    isActive
                      ? isScrolled
                        ? "bg-[#ecfdf5] text-[#074125]"
                        : "bg-white/20 text-white"
                      : isScrolled
                      ? "text-slate-700 hover:text-[#074125] hover:bg-[#ecfdf5]"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs Desktop */}
          <div className="hidden sm:flex items-center gap-2.5">
            <Link
              href="/craft-your-tour"
              className={`text-xs font-bold uppercase tracking-wider px-3.5 py-2 rounded-full border transition-all ${
                isScrolled 
                  ? "border-[#059669] text-[#074125] hover:bg-[#ecfdf5]" 
                  : "border-white/50 text-white hover:bg-white/20"
              }`}
            >
              Plan Trip
            </Link>
            
            <Link
              href="/packages"
              className="bg-[#059669] hover:bg-[#074125] text-white font-extrabold text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-[0_4px_15px_rgba(5,150,105,0.35)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 shrink-0"
            >
              Book Adventure
            </Link>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/packages"
              className="bg-[#059669] text-white text-xs font-extrabold px-3 py-1.5 rounded-full shadow-sm"
            >
              Book
            </Link>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className={`p-2 rounded-xl transition-colors ${
                isScrolled ? "text-slate-800 hover:bg-slate-100" : "text-white hover:bg-white/10"
              }`}
              aria-label="Open mobile menu"
            >
              <Menu className="w-6 h-6 shrink-0" />
            </button>
          </div>
        </div>
      </div>

      {/* Full-Screen Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-[#042c19] text-white flex flex-col justify-between p-6 animate-fade-in overflow-y-auto">
          {/* Mobile Drawer Header */}
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2.5">
                <div className="relative w-9 h-9 rounded-full overflow-hidden bg-white p-0.5">
                  <Image src="/images/logo.png" alt="Ghomo Pakistan" fill className="object-contain" />
                </div>
                <span className="text-lg font-black text-white">
                  {config.shortName} <span className="text-[#34d399]">Pakistan</span>
                </span>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 shrink-0" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div className="flex flex-col gap-2 pt-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between p-3.5 rounded-2xl font-extrabold text-base transition-all ${
                      isActive
                        ? "bg-[#059669] text-white shadow-lg"
                        : "text-slate-200 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 opacity-70 shrink-0" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile Drawer Bottom CTAs */}
          <div className="pt-8 border-t border-white/10 flex flex-col gap-3">
            <Link
              href="/craft-your-tour"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-extrabold text-sm transition-all border border-white/20"
            >
              ✨ Craft Custom Private Tour
            </Link>

            <Link
              href={config.whatsappLink}
              target="_blank"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-[#059669] hover:bg-[#047857] text-white font-extrabold text-sm shadow-lg transition-all"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>Direct WhatsApp Assistance</span>
            </Link>

            <div className="text-center text-xs text-slate-400 mt-2">
              Hotline: <a href={`tel:${config.phone}`} className="text-white font-bold">{config.phone}</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
