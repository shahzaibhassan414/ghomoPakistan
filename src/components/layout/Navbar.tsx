"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { config } from "@/config";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Packages", href: "/packages" },
    { name: "Journal", href: "/journal" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className={`fixed w-full top-0 z-40 transition-all duration-300 ${scrolled ? "bg-[#FDFBF7] border-b border-[#EAE3D9] shadow-sm py-2" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 relative overflow-hidden rounded-full bg-white shadow-md">
                <Image src={config.images.logo} alt="Logo" fill className="object-cover" />
              </div>
              <span className={`font-serif font-bold text-2xl tracking-wide transition-colors ${scrolled || pathname !== '/' ? 'text-foreground' : 'text-white text-shadow'}`}>
                {config.businessName}
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const textColor = scrolled || pathname !== '/' ? (isActive ? "text-accent font-semibold" : "text-foreground hover:text-accent") : "text-white/90 hover:text-white drop-shadow-md";
              
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`${textColor} transition-colors duration-200 text-sm tracking-[0.15em] uppercase`}
                >
                  {link.name}
                </Link>
              );
            })}
            
            <a
              href={config.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-6 py-2 rounded-full font-medium hover:bg-[#25D366]/90 transition-colors shadow-md flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"/><path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"/><path d="M9.5 15c1.167 1.667 3.833 1.667 5 0"/></svg>
              Book Now
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none ${scrolled || pathname !== '/' ? 'text-foreground' : 'text-white drop-shadow-md'}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border shadow-xl absolute w-full left-0 top-full">
          <div className="px-4 py-6 space-y-2 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`${
                  pathname === link.href ? "text-accent font-semibold" : "text-foreground"
                } block px-4 py-4 text-lg font-serif transition-colors border-b border-border/50`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="pt-6 pb-2">
              <a
                href={config.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex justify-center items-center gap-2 bg-[#25D366] text-white px-6 py-4 rounded-full font-medium"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"/><path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"/><path d="M9.5 15c1.167 1.667 3.833 1.667 5 0"/></svg>
                Book on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
