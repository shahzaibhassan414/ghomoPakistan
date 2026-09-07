"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TourPackage } from "@/config";
import { 
  Calendar, 
  MapPin, 
  Star, 
  Clock, 
  Users, 
  Sparkles, 
  Check, 
  ChevronRight,
  Flame
} from "lucide-react";

interface TourCardProps {
  tour: TourPackage;
  onBookNow: (tour: TourPackage) => void;
}

export default function TourCard({ tour, onBookNow }: TourCardProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "itinerary">("overview");

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 hover:border-[#00b2d4]/50 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">
      {/* Image Banner */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="px-3 py-1 rounded-full bg-[#003554]/90 backdrop-blur-md text-white text-xs font-black tracking-wide shadow-md border border-white/10 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-[#00b2d4]" />
            {tour.duration.split("/")[0].trim()}
          </span>

          {tour.badge && (
            <span className="px-3 py-1 rounded-full bg-[#00b2d4] text-white text-[11px] font-black uppercase tracking-wider shadow-md">
              {tour.badge}
            </span>
          )}
        </div>

        {/* Bottom destination & rating */}
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-200 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
            <MapPin className="w-3.5 h-3.5 text-[#00b2d4]" />
            <span>{tour.destination}</span>
          </div>

          <div className="flex items-center gap-1 bg-[#002136]/90 border border-white/10 backdrop-blur-md text-white font-black text-xs px-2.5 py-1 rounded-full shadow-sm">
            <Star className="w-3 h-3 text-[#00b2d4] fill-[#00b2d4]" />
            <span>{tour.rating.toFixed(1)}</span>
            <span className="text-[10px] text-slate-300">({tour.reviewsCount})</span>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-[#00b2d4] transition-colors line-clamp-1 mb-1.5">
            {tour.title}
          </h3>
          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
            {tour.subtitle}
          </p>

          {/* Activity Tag Pills */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {tour.tags.slice(0, 4).map((tag, i) => (
              <span
                key={i}
                className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-[#ebfafc] text-[#003554] border border-[#00b2d4]/20 flex items-center gap-1"
              >
                <Sparkles className="w-2.5 h-2.5 text-[#00b2d4]" />
                {tag}
              </span>
            ))}
            {tour.tags.length > 4 && (
              <span className="text-[11px] font-semibold px-2 py-1 rounded-lg bg-slate-100 text-slate-500">
                +{tour.tags.length - 4} more
              </span>
            )}
          </div>

          {/* Next Departures Pill */}
          <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200/80 mb-4 flex items-center justify-between text-xs">
            <span className="text-slate-500 flex items-center gap-1.5 font-medium">
              <Calendar className="w-3.5 h-3.5 text-[#00b2d4]" />
              Next Group Departure:
            </span>
            <span className="font-bold text-slate-800">
              {tour.upcomingDates[0] || "Weekly"}
            </span>
          </div>
        </div>

        {/* Pricing & CTA Footer */}
        <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between gap-3">
          <div>
            <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
              Tour Package
            </div>
            <div className="text-sm sm:text-base font-black text-[#003554]">
              Custom Quote
            </div>
            <div className="text-[10px] text-[#00b2d4] font-bold">
              Available On Request
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onBookNow(tour)}
              className="px-5 py-2.5 rounded-full bg-[#00b2d4] hover:bg-[#003554] text-white font-extrabold text-xs sm:text-sm shadow-[0_4px_15px_rgba(0,178,212,0.35)] transition-all transform hover:scale-105 active:scale-95"
            >
              Inquire Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
