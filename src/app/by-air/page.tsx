"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { config, TourPackage } from "@/config";
import TourCard from "@/components/tours/TourCard";
import BookingModal from "@/components/tours/BookingModal";
import { 
  Plane, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  Star, 
  CheckCircle2, 
  Send,
  Hotel,
  Compass
} from "lucide-react";

export default function ByAirPage() {
  const [selectedTourForBooking, setSelectedTourForBooking] = useState<TourPackage | null>(null);

  const byAirTours: TourPackage[] = config.tours.filter(
    (t: TourPackage) => t.category === "by-air" || t.tags.includes("Return Flights")
  );

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-28 pb-24">
      {/* Hero Header */}
      <section className="relative bg-[#002136] text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden mb-16">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/images/skardu_valley.jpg"
            alt="Skardu Fly in Luxury"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#002136] via-[#002136]/80 to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-3 sm:mb-4">
              By Air Luxury Escapes
            </h1>
            <p className="text-slate-200 text-xs sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
              Skip the 22-hour mountain drive. Fly directly into Skardu or Gilgit in 45 minutes with breathtaking aerial views of Nanga Parbat, K2, and the Karakorams.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/craft-your-tour"
                className="px-8 py-4 rounded-full bg-[#00b2d4] hover:bg-[#009bb8] text-white font-extrabold text-sm shadow-xl transition-all"
              >
                Custom Flight Package
              </Link>
              <Link
                href={config.whatsappLink}
                target="_blank"
                className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-extrabold text-sm border border-white/20 transition-all flex items-center gap-2"
              >
                <Send className="w-4 h-4 text-[#00b2d4]" />
                WhatsApp Flight Concierge
              </Link>
            </div>
          </div>

          {/* Value Props Card */}
          <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 space-y-5">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#00b2d4]" />
              The By-Air Advantage
            </h3>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#00b2d4] shrink-0 mt-1" />
              <div>
                <h4 className="font-extrabold text-white text-sm">45-Minute Scenic Flight</h4>
                <p className="text-xs text-slate-300">Daily direct flights from Islamabad International Airport.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Hotel className="w-5 h-5 text-[#00b2d4] shrink-0 mt-1" />
              <div>
                <h4 className="font-extrabold text-white text-sm">5-Star Heritage Luxury Stays</h4>
                <p className="text-xs text-slate-300">Shangrila Chalets, Serena Shigar Fort, Serena Khaplu Palace.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#00b2d4] shrink-0 mt-1" />
              <div>
                <h4 className="font-extrabold text-white text-sm">Private 4x4 Prado & Concierge</h4>
                <p className="text-xs text-slate-300">Dedicated chauffeur, VIP airport transfers, zero stress.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Packages Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#003554] tracking-tight mb-3">
            Featured By-Air Packages
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Fixed departures and flexible custom dates with full luxury inclusions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {byAirTours.map((tour) => (
            <TourCard
              key={tour.id}
              tour={tour}
              onBookNow={(t) => setSelectedTourForBooking(t)}
            />
          ))}
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal
        tour={selectedTourForBooking}
        isOpen={!!selectedTourForBooking}
        onClose={() => setSelectedTourForBooking(null)}
      />
    </div>
  );
}
