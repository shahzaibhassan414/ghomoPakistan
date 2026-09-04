import Link from "next/link";
import { config } from "@/config";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white/80 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-2">
            <span className="font-lora font-bold text-2xl text-white tracking-wide block mb-4">
              {config.businessName}
            </span>
            <p className="mb-6 max-w-sm">
              {config.tagline}. We craft authentic, guided group tours and travel experiences that you will remember for a lifetime.
            </p>
            <div className="flex space-x-4">
              <a href={config.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">IG</a>
              <a href={config.socials.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">FB</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-lora font-semibold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/packages" className="hover:text-accent transition-colors">Packages</Link></li>
              <li><Link href="/journal" className="hover:text-accent transition-colors">Journal</Link></li>
              <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-lora font-semibold text-xl mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="shrink-0 text-accent" size={20} />
                <span>{config.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="shrink-0 text-accent" size={20} />
                <span>{config.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="shrink-0 text-accent" size={20} />
                <span>{config.email}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} {config.businessName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
