"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { config, TourPackage } from "@/config";
import BookingModal from "@/components/tours/BookingModal";
import TourCard from "@/components/tours/TourCard";
import {
  Clock,
  Calendar,
  MapPin,
  Star,
  Users,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Sparkles,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Send,
  Phone,
  ArrowRight,
  ArrowLeft,
  Check,
  Compass,
  Hotel,
  Luggage,
  AlertCircle,
  Eye,
  Camera,
  X,
  Flame,
  Coffee,
  Bed,
  BedDouble,
  Utensils,
  Navigation,
  Car
} from "lucide-react";

export default function PackageDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const tour = config.tours.find((t) => t.slug === slug || t.id === slug);

  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedSharingPlan, setSelectedSharingPlan] = useState<"quad" | "triple" | "twin" | "privateCouple">("quad");
  const [guestCount, setGuestCount] = useState(1);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [expandedDays, setExpandedDays] = useState<Record<number, boolean>>({ 0: true, 1: true });

  if (!tour) {
    return (
      <div className="min-h-screen bg-[#f8fafc] pt-32 pb-20 flex flex-col items-center justify-center px-4">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
          <Compass className="w-8 h-8" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-[#074125] mb-2">Package Not Found</h1>
        <p className="text-slate-600 text-sm mb-6 text-center max-w-md">
          The adventure package you are looking for might have moved or is temporarily unavailable.
        </p>
        <Link
          href="/packages"
          className="px-6 py-3 rounded-full bg-[#059669] hover:bg-[#074125] text-white font-extrabold text-sm shadow-md transition-all flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Browse All Upcoming Tours</span>
        </Link>
      </div>
    );
  }

  // Related tours
  const relatedTours = config.tours
    .filter((t) => t.id !== tour.id)
    .slice(0, 3);

  const toggleDay = (dayIdx: number) => {
    setExpandedDays((prev) => ({
      ...prev,
      [dayIdx]: !prev[dayIdx],
    }));
  };

  const expandAllDays = () => {
    const all: Record<number, boolean> = {};
    tour.itinerary.forEach((_, idx) => (all[idx] = true));
    setExpandedDays(all);
  };

  const collapseAllDays = () => {
    setExpandedDays({});
  };

  const whatsappDirectUrl = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(
    `Hi Ghomo Pakistan! I am interested in booking the "${tour.title}" (${tour.duration}).\n\n- Selected Plan: ${
      tour.nights === 0 ? "Day Expedition (Standard Seat)" : selectedSharingPlan.toUpperCase() + " Sharing"
    }\n- Number of Travelers: ${guestCount} Pax\n\nPlease share the detailed package quotation, departure dates, and booking procedure.`
  )}`;

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-32 sm:pt-36 lg:pt-40 pb-28">
      {/* 1. Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="flex items-center text-xs font-semibold text-slate-500 truncate">
          <Link href="/" className="hover:text-[#059669] transition-colors shrink-0">Home</Link>
          <span className="mx-2 text-slate-400">/</span>
          <Link href="/packages" className="hover:text-[#059669] transition-colors shrink-0">Packages</Link>
          <span className="mx-2 text-slate-400">/</span>
          <span className="text-[#074125] font-bold truncate">{tour.title}</span>
        </div>
      </div>

      {/* 2. Package Title & Intro Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex flex-wrap items-center gap-2 mb-2.5">
          <span className="px-3 py-1 rounded-full bg-[#ecfdf5] text-[#059669] text-xs font-black uppercase tracking-wider border border-[#059669]/20">
            {tour.badge || `${tour.days} Day Tour`}
          </span>
          <span className="flex items-center gap-1 text-xs font-bold text-slate-500">
            <MapPin className="w-3.5 h-3.5 text-[#059669] shrink-0" />
            <span>{tour.destination}, Pakistan</span>
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#074125] tracking-tight leading-tight mb-2.5">
          {tour.title}
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-4xl leading-relaxed">
          {tour.subtitle}
        </p>
      </div>

      {/* 3. Cinematic Hero Showcase & Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        <div className="space-y-4">
          {/* Main Cinematic Hero Banner */}
          <div 
            onClick={() => setSelectedImage(tour.image)}
            className="relative h-[260px] sm:h-[380px] lg:h-[460px] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 group cursor-pointer bg-slate-900"
          >
            <Image
              src={tour.image}
              alt={tour.title}
              fill
              priority
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 1024px) 100vw, 1200px"
            />
            {/* Smooth Vignette Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

            {/* Top Badges & Gallery Trigger */}
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between z-10">
              <span className="px-3.5 py-1.5 rounded-full bg-[#074125]/90 backdrop-blur-md text-white text-xs font-black tracking-wide shadow-md border border-white/10 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#34d399]" />
                <span>{tour.duration}</span>
              </span>

              {/* View Photos Button Pill */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(tour.image);
                }}
                className="px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md text-white text-xs font-black border border-white/30 transition-all flex items-center gap-1.5 shadow-lg"
              >
                <Eye className="w-3.5 h-3.5 text-[#34d399]" />
                <span className="hidden sm:inline">View Photos</span>
                <span className="sm:hidden">Gallery</span>
                <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded-full ml-0.5">
                  {tour.gallery.length}
                </span>
              </button>
            </div>
          </div>

          {/* Quick Stats Summary Bar (4 responsive columns with min-w-0) */}
          <div className="p-4 sm:p-6 bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-sm grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6 items-center">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#ecfdf5] text-[#059669] flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Duration</div>
                <div className="text-xs sm:text-sm font-extrabold text-[#074125] truncate">
                  {tour.nights === 0 ? "1 Day Tour" : `${tour.days}D / ${tour.nights}N`}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#ecfdf5] text-[#059669] flex items-center justify-center shrink-0">
                <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Rating & Reviews</div>
                <div className="text-xs sm:text-sm font-extrabold text-[#074125] truncate">
                  {tour.rating.toFixed(1)} / 5.0 ({tour.reviewsCount})
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#ecfdf5] text-[#059669] flex items-center justify-center shrink-0">
                <Car className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Departures</div>
                <div 
                  className="text-xs sm:text-sm font-extrabold text-[#074125] truncate"
                  title={tour.departureCities.join(", ")}
                >
                  {tour.departureCities.length} Departure Hubs
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#ecfdf5] text-[#059669] flex items-center justify-center shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Travel Style</div>
                <div className="text-xs sm:text-sm font-extrabold text-[#074125] capitalize truncate">
                  {tour.category} Tour
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Main Content: Left Column (Itinerary & Details) + Right Column (Pricing & Booking Sticky Box) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10">
          
          {/* LEFT 8 COLUMNS: Overview, Highlights, Day-by-Day Timeline, Inclusions, Hotels, Packing List */}
          <div className="lg:col-span-8 space-y-8 sm:space-y-10">
            
            {/* 1. Attraction Places from Official Brochure */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-4">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-[#059669] block mb-1">
                  Official Brochure Highlights
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-[#074125] flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#059669]" />
                  <span>Attraction Places</span>
                </h2>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {tour.attractions.map((place, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-xl bg-[#ecfdf5] text-[#074125] border border-[#059669]/25 text-xs font-bold flex items-center gap-1.5 shadow-sm"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#059669]" />
                    {place}
                  </span>
                ))}
              </div>

              {/* Transportation Banner from PDF */}
              <div className="mt-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                <Car className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Official Transport
                  </div>
                  <div className="text-xs sm:text-sm font-black text-[#074125]">
                    {tour.transportation}
                  </div>
                  <div className="text-[11px] text-slate-500 font-semibold mt-0.5">
                    Departures from: {tour.departureCities.join(" | ")}
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Interactive Day-by-Day Itinerary Timeline */}
            <div className="bg-white rounded-3xl p-5 sm:p-8 shadow-sm border border-slate-200/80">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 sm:mb-8 pb-4 border-b border-slate-100">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ecfdf5] border border-[#059669]/20 text-[#059669] text-[10px] sm:text-xs font-black uppercase tracking-wider mb-1.5">
                    <Sparkles className="w-3 h-3" />
                    <span>Official Schedule</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-[#074125] tracking-tight">
                    Detailed Day-by-Day Itinerary
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    Carefully planned mountain transit, sightseeing stops & night accommodations.
                  </p>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
                  <button
                    type="button"
                    onClick={expandAllDays}
                    className="text-xs font-extrabold text-[#074125] hover:bg-[#ecfdf5] px-3 py-1.5 rounded-full border border-slate-200 transition-colors"
                  >
                    Expand All
                  </button>
                  <button
                    type="button"
                    onClick={collapseAllDays}
                    className="text-xs font-extrabold text-slate-500 hover:bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200 transition-colors"
                  >
                    Collapse All
                  </button>
                </div>
              </div>

              {/* Itinerary Timeline Cards List */}
              <div className="relative space-y-4 sm:space-y-5 before:absolute before:top-4 before:bottom-4 before:left-4 sm:before:left-5 before:w-0.5 before:bg-gradient-to-b before:from-[#059669] before:via-[#34d399]/40 before:to-slate-200">
                {tour.itinerary.map((dayItem, idx) => {
                  const isExpanded = !!expandedDays[idx];
                  const dayNum = String(dayItem.day || idx + 1).padStart(2, "0");

                  return (
                    <div
                      key={idx}
                      className={`relative pl-10 sm:pl-14 transition-all duration-300 ${
                        isExpanded ? "scale-[1.005]" : ""
                      }`}
                    >
                      {/* Timeline Day Node Icon */}
                      <div className={`absolute left-0 top-3.5 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-black text-xs sm:text-sm shadow-md transition-all duration-300 z-10 ${
                        isExpanded
                          ? "bg-[#074125] text-white ring-4 ring-[#ecfdf5] scale-110"
                          : "bg-white text-[#074125] border-2 border-[#059669]/50 ring-2 ring-slate-100"
                      }`}>
                        {dayNum}
                      </div>

                      {/* Card Container */}
                      <div
                        className={`rounded-2xl sm:rounded-3xl transition-all duration-300 overflow-hidden ${
                          isExpanded
                            ? "bg-white border-2 border-[#059669]/40 shadow-xl shadow-[#059669]/5"
                            : "bg-white hover:bg-slate-50/90 border border-slate-200/90 shadow-sm"
                        }`}
                      >
                        {/* Clickable Header Button */}
                        <button
                          type="button"
                          onClick={() => toggleDay(idx)}
                          className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-3 transition-colors"
                        >
                          <div className="space-y-1 pr-2 flex-1">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-[#059669] bg-[#ecfdf5] px-2.5 py-0.5 rounded-full">
                                {dayItem.dayLabel || `Day ${dayItem.day}`}
                              </span>
                              {dayItem.stay && (
                                <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1">
                                  <BedDouble className="w-3 h-3 text-[#059669]" />
                                  <span>{dayItem.stay}</span>
                                </span>
                              )}
                            </div>

                            <h3 className="text-sm sm:text-base lg:text-lg font-black text-slate-900 leading-snug">
                              {dayItem.title}
                            </h3>
                          </div>

                          {/* Dynamic Expand/Collapse Toggle Button */}
                          <div
                            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${
                              isExpanded
                                ? "bg-[#074125] text-white shadow-md rotate-180"
                                : "bg-[#ecfdf5] text-[#059669] hover:bg-[#059669] hover:text-white"
                            }`}
                            aria-label={isExpanded ? "Collapse day" : "Expand day"}
                          >
                            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 transition-transform" />
                          </div>
                        </button>

                        {/* Expanded Day Details */}
                        {isExpanded && (
                          <div className="px-4 sm:px-6 pb-5 pt-1 border-t border-slate-100 text-xs sm:text-sm text-slate-600 space-y-4 animate-fade-in bg-white">
                            {/* Summary / Description Quote */}
                            {dayItem.desc && (
                              <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50/80 border-l-4 border-[#059669] text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                                {dayItem.desc}
                              </div>
                            )}

                            {/* Activities & Route Highlights */}
                            {dayItem.activities && dayItem.activities.length > 0 && (
                              <div className="space-y-2 pt-1">
                                <div className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                                  <Navigation className="w-3.5 h-3.5 text-[#059669]" />
                                  <span>Sightseeing & Milestones</span>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                  {dayItem.activities.map((act, i) => (
                                    <div
                                      key={i}
                                      className="p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-200/70 flex items-start gap-2 text-slate-800 text-xs font-bold shadow-xs"
                                    >
                                      <div className="w-2 h-2 rounded-full bg-[#059669] shrink-0 mt-1.5 shadow-xs" />
                                      <span>{act}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Bottom Inclusions Chips (Meals & Hotel) */}
                            <div className="pt-2 flex flex-wrap items-center gap-2">
                              {dayItem.meals && (
                                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900 bg-[#ecfdf5] px-3 py-1.5 rounded-xl border border-[#059669]/30">
                                  <Utensils className="w-3.5 h-3.5 text-[#059669]" />
                                  <span>Meals: {dayItem.meals}</span>
                                </div>
                              )}

                              {dayItem.stay && (
                                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200">
                                  <Hotel className="w-3.5 h-3.5 text-[#059669]" />
                                  <span>Night Stay: {dayItem.stay}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 3. Services Included vs Excluded (Side-by-Side Comparison) */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80">
              <div className="mb-6 pb-4 border-b border-slate-100">
                <span className="text-xs font-black uppercase tracking-wider text-[#059669] block mb-0.5">
                  Package Coverage
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#074125]">
                  Services Included & Excluded
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Included Box */}
                <div className="bg-[#ecfdf5]/70 border border-[#059669]/30 rounded-2xl p-5 space-y-3">
                  <h4 className="text-sm font-black text-[#074125] flex items-center gap-2 uppercase tracking-wide">
                    <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                    <span>Service Included</span>
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                    {tour.inclusions.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Excluded Box */}
                <div className="bg-rose-50/60 border border-rose-200 rounded-2xl p-5 space-y-3">
                  <h4 className="text-sm font-black text-rose-900 flex items-center gap-2 uppercase tracking-wide">
                    <XCircle className="w-4 h-4 text-rose-600" />
                    <span>Service Excluded</span>
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                    {tour.exclusions.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* 4. Hotel Accommodation Standards from PDF */}
            {tour.nights > 0 && tour.hotels && tour.hotels.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80">
                <div className="mb-6 pb-4 border-b border-slate-100">
                  <span className="text-xs font-black uppercase tracking-wider text-[#059669] block mb-0.5">
                    Official Hotels
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-[#074125]">
                    Hotel Options
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {tour.hotels.map((tierItem, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl border border-slate-200 bg-slate-50/60 flex flex-col justify-between"
                    >
                      <div>
                        <div className="inline-block px-3 py-1 rounded-full bg-[#042c19] text-white text-[11px] font-black uppercase tracking-wider mb-3">
                          {tierItem.tier}
                        </div>
                        <ul className="space-y-1.5 text-xs text-slate-700 font-semibold">
                          {tierItem.hotels.map((h, i) => (
                            <li key={i} className="flex items-center gap-1.5">
                              <Hotel className="w-3.5 h-3.5 text-[#059669] shrink-0" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="text-[10px] text-slate-400 mt-4 pt-2 border-t border-slate-200">
                        Or similar
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 5. Equipment to Bring from PDF */}
            {tour.equipment && tour.equipment.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80">
                <div className="mb-6 pb-4 border-b border-slate-100">
                  <span className="text-xs font-black uppercase tracking-wider text-[#059669] block mb-0.5">
                    Official Checklist
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-[#074125]">
                    Equipment To Bring
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {tour.equipment.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm font-bold text-slate-800"
                    >
                      <Luggage className="w-4 h-4 text-[#059669] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 6. Terms & Conditions from PDF */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-4">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-[#059669] block mb-0.5">
                  Official Policy
                </span>
                <h3 className="text-lg sm:text-xl font-black text-[#074125] flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-[#059669]" />
                  <span>Terms & Conditions</span>
                </h3>
              </div>
              <p className="text-xs text-slate-500 font-semibold italic">
                Please go through the following terms and conditions to become part of Ghomo Pakistan:
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed list-disc list-inside">
                {tour.terms.map((term, idx) => (
                  <li key={idx} className="pl-1">
                    {term}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT 4 COLUMNS: Sticky Room Sharing & Booking Card */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-white rounded-3xl p-6 sm:p-7 shadow-xl border border-slate-200/80 space-y-6">
              
              {/* Price Header */}
              <div className="pb-5 border-b border-slate-100">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                  Package Pricing:
                </span>
                <div className="flex items-baseline gap-1.5 mt-0.5">
                  <span className="text-2xl sm:text-3xl font-black text-[#074125]">
                    Custom Quote On Request
                  </span>
                </div>
                
                {/* Dynamic Inclusions - Shows ONLY what is available in this package */}
                <div className="mt-3 bg-[#ecfdf5] rounded-2xl p-3 border border-[#059669]/20">
                  <div className="text-[10px] font-black uppercase tracking-wider text-[#074125] mb-1.5 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0" />
                    <span>Included Services ({tour.inclusions.length})</span>
                  </div>
                  <ul className="space-y-1">
                    {tour.inclusions.map((inc, idx) => (
                      <li key={idx} className="text-[11px] font-bold text-[#074125] flex items-start gap-1.5 leading-snug">
                        <span className="text-[#059669] font-black mt-0.5">•</span>
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Sharing Plan Selector or Day Expedition Info */}
              {tour.nights > 0 ? (
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2.5">
                    1. Select Room Sharing Tier
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { key: "quad", label: "Quad Sharing", desc: "4 in 1 Room", status: "Standard Option" },
                      { key: "triple", label: "Triple Sharing", desc: "3 in 1 Room", status: "Triple Comfort" },
                      { key: "twin", label: "Twin Sharing", desc: "2 in 1 Room", status: "Twin Privacy" },
                      { 
                        key: "privateCouple", 
                        label: "Private Couple", 
                        desc: "Couple Suite", 
                        status: "Private Room"
                      },
                    ].map((plan) => (
                      <button
                        key={plan.key}
                        type="button"
                        onClick={() => setSelectedSharingPlan(plan.key as any)}
                        className={`p-3 rounded-2xl border text-left transition-all ${
                          selectedSharingPlan === plan.key
                            ? "border-[#059669] bg-[#ecfdf5] text-[#074125] ring-2 ring-[#059669]/30 shadow-sm"
                            : "border-slate-200 hover:border-slate-300 text-slate-600 bg-slate-50/50"
                        }`}
                      >
                        <div className="text-xs font-black truncate">{plan.label}</div>
                        <div className="text-[10px] text-slate-500 truncate">{plan.desc}</div>
                        <div className="text-xs font-bold text-[#059669] mt-1">
                          {plan.status}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                    1. Trip Category
                  </label>
                  <div className="p-3.5 rounded-2xl bg-[#ecfdf5] border border-[#059669]/20 text-xs font-bold text-[#074125] flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#059669] shrink-0" />
                    <span>Day Expedition — Same Day Return (Standard Seat)</span>
                  </div>
                </div>
              )}

              {/* Number of Travelers Counter */}
              {selectedSharingPlan !== "privateCouple" && (
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2 flex items-center justify-between">
                    <span>2. Number of Travelers</span>
                    <span className="text-[#059669] font-bold">{guestCount} Pax</span>
                  </label>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                      className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 font-black text-lg text-slate-700 flex items-center justify-center transition-colors"
                    >
                      -
                    </button>
                    <div className="flex-1 py-2 text-center font-black text-lg text-[#074125] bg-slate-50 rounded-xl border border-slate-200">
                      {guestCount}
                    </div>
                    <button
                      type="button"
                      onClick={() => setGuestCount(guestCount + 1)}
                      className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 font-black text-lg text-slate-700 flex items-center justify-center transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
              )}

              {/* Plan Summary Preview */}
              <div className="p-4 rounded-2xl bg-[#042c19] text-white">
                <div className="flex justify-between text-xs text-slate-300 mb-1">
                  <span>Selected Configuration:</span>
                  <span className="font-bold text-white">
                    {tour.nights === 0
                      ? `${guestCount} Seat(s)`
                      : selectedSharingPlan === "privateCouple"
                      ? "Couple Suite"
                      : `${guestCount} Traveler(s)`}
                  </span>
                </div>
                <div className="text-lg sm:text-xl font-black text-white">
                  {tour.nights === 0
                    ? "Day Expedition Standard Seat"
                    : selectedSharingPlan === "privateCouple"
                    ? "Private Couple Suite"
                    : `${selectedSharingPlan.toUpperCase()} Sharing Plan`}
                </div>
                <p className="text-[10px] text-[#34d399] mt-1">
                  ✓ Instant personalized quote on WhatsApp
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-2.5">
                <button
                  onClick={() => setBookingModalOpen(true)}
                  className="w-full py-4 rounded-full bg-[#059669] hover:bg-[#074125] text-white font-black text-sm shadow-[0_4px_20px_rgba(5,150,105,0.35)] transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Reserve Seats Now</span>
                </button>

                <Link
                  href={whatsappDirectUrl}
                  target="_blank"
                  className="w-full py-3.5 rounded-full bg-emerald-50 hover:bg-emerald-100 text-[#074125] border border-[#059669]/30 font-extrabold text-xs transition-all flex items-center justify-center gap-2 text-center"
                >
                  <MessageCircle className="w-4 h-4 text-[#059669]" />
                  <span>Inquire on WhatsApp</span>
                </Link>
              </div>

              {/* Departure Hotline Assistance */}
              <div className="pt-4 border-t border-slate-100 text-center">
                <div className="text-[11px] text-slate-500">Need instant custom customization?</div>
                <a
                  href={`tel:${config.phone}`}
                  className="text-xs font-black text-[#074125] hover:text-[#059669] inline-flex items-center gap-1 mt-0.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#059669]" />
                  <span>{config.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Related Adventures Showcase */}
      {relatedTours.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#059669] block mb-1">
                More Adventures
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#074125]">
                Similar Upcoming Journeys
              </h2>
            </div>
            <Link
              href="/packages"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-[#059669] hover:text-[#074125]"
            >
              <span>View All 13 Packages</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {relatedTours.map((relTour) => (
              <TourCard
                key={relTour.id}
                tour={relTour}
                onBookNow={() => {
                  window.location.href = `/packages/${relTour.slug}`;
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* 5. Sticky Floating Booking Bar for Mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-3.5 shadow-2xl flex items-center justify-between gap-4">
        <div>
          <div className="text-[10px] text-slate-400 font-bold uppercase">Package Pricing</div>
          <div className="text-sm sm:text-base font-black text-[#074125]">
            Custom Quote
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={whatsappDirectUrl}
            target="_blank"
            className="w-10 h-10 rounded-full bg-emerald-100 text-[#074125] flex items-center justify-center border border-[#059669]/30"
          >
            <MessageCircle className="w-5 h-5 text-[#059669]" />
          </Link>

          <button
            onClick={() => setBookingModalOpen(true)}
            className="px-5 py-2.5 rounded-full bg-[#059669] text-white font-extrabold text-xs shadow-md"
          >
            Book Now
          </button>
        </div>
      </div>

      {/* 6. Photo Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-3 sm:p-6 animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full bg-slate-950 rounded-2xl sm:rounded-3xl overflow-hidden border border-white/20 shadow-2xl flex flex-col my-auto max-h-[92vh]"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 px-5 border-b border-white/10 text-white shrink-0">
              <div className="flex items-center gap-2">
                <Camera className="w-4 h-4 text-[#34d399]" />
                <span className="text-xs sm:text-sm font-bold truncate">{tour.title} Gallery</span>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors"
                aria-label="Close photo preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Stage Image */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black max-h-[60vh]">
              <Image
                src={selectedImage}
                alt={tour.title}
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>

            {/* Thumbnail Strip */}
            {tour.gallery.length > 1 && (
              <div className="p-3 sm:p-4 bg-slate-900 border-t border-white/10 flex items-center justify-center gap-2 overflow-x-auto shrink-0">
                {tour.gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(img)}
                    className={`relative w-14 sm:w-20 h-10 sm:h-14 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                      selectedImage === img
                        ? "border-[#34d399] scale-105 shadow-md"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* 7. Interactive Booking Modal */}
      <BookingModal
        tour={tour}
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </div>
  );
}
