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
  MapPin,
  Star,
  Users,
  Check,
  X as CloseIcon,
  ChevronDown,
  MessageCircle,
  Phone,
  ArrowRight,
  ArrowLeft,
  Camera,
  Car,
  BedDouble,
  Utensils,
  Hotel,
  Sparkles,
  ShieldCheck,
  HelpCircle,
  CheckCircle2
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
        <div className="w-16 h-16 rounded-full bg-emerald-50 text-[#059669] flex items-center justify-center mb-4">
          <MapPin className="w-8 h-8" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Package Not Found</h1>
        <p className="text-slate-600 text-sm mb-6 text-center max-w-md">
          The adventure package you are looking for might have moved or is temporarily unavailable.
        </p>
        <Link
          href="/packages"
          className="px-6 py-3 rounded-full bg-[#059669] hover:bg-[#074125] text-white font-bold text-sm shadow-md transition-all flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Browse All Tours</span>
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

  const planLabels: Record<string, { title: string; subtitle: string }> = {
    quad: { title: "Quad Sharing", subtitle: "4 Persons in Room" },
    triple: { title: "Triple Sharing", subtitle: "3 Persons in Room" },
    twin: { title: "Twin Sharing", subtitle: "2 Persons in Room" },
    privateCouple: { title: "Private Couple", subtitle: "Dedicated Room" },
  };

  const whatsappDirectUrl = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(
    `Hi Ghomo Pakistan! I am interested in booking the "${tour.title}" (${tour.duration}).\n\n- Selected Plan: ${
      tour.nights === 0 ? "Day Expedition" : planLabels[selectedSharingPlan]?.title || selectedSharingPlan
    }\n- Number of Travelers: ${guestCount} Pax\n\nPlease share the detailed package quotation, departure dates, and booking procedure.`
  )}`;

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-28 sm:pt-32 pb-24 text-slate-800">
      {/* 1. Header & Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center text-xs text-slate-500 mb-4 gap-1.5 flex-wrap">
          <Link href="/" className="hover:text-[#059669] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/packages" className="hover:text-[#059669] transition-colors">Packages</Link>
          <span>/</span>
          <span className="text-slate-800 font-semibold truncate max-w-xs sm:max-w-md">{tour.title}</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-600">
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-[#059669] font-bold border border-emerald-100">
                {tour.badge || `${tour.days} Days Tour`}
              </span>
              <span className="flex items-center gap-1 text-slate-600">
                <MapPin className="w-3.5 h-3.5 text-[#059669]" />
                {tour.destination}, Pakistan
              </span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1 text-slate-700">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span className="font-bold">{tour.rating.toFixed(1)}</span>
                <span className="text-slate-400">({tour.reviewsCount} reviews)</span>
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {tour.title}
            </h1>
            <p className="text-slate-600 text-sm sm:text-base max-w-3xl leading-relaxed">
              {tour.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* 2. Clean Hero Image Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 sm:gap-4 h-[300px] sm:h-[420px] lg:h-[460px]">
          {/* Main Large Image */}
          <div
            onClick={() => setSelectedImage(tour.image)}
            className="lg:col-span-3 relative h-full rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer group bg-slate-100 border border-slate-200/80 shadow-sm"
          >
            <Image
              src={tour.image}
              alt={tour.title}
              fill
              priority
              className="object-cover group-hover:scale-102 transition-transform duration-500 ease-out"
              sizes="(max-width: 1024px) 100vw, 850px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex items-center gap-2">
              <span className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur text-slate-900 text-xs font-bold shadow-md flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#059669]" />
                <span>{tour.duration}</span>
              </span>
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(tour.image);
              }}
              className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 px-4 py-2 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur text-white text-xs font-semibold border border-white/20 transition-all flex items-center gap-2 shadow-lg"
            >
              <Camera className="w-4 h-4" />
              <span>View Gallery ({tour.gallery.length})</span>
            </button>
          </div>

          {/* Secondary Thumbnail Previews (Desktop) */}
          <div className="hidden lg:grid grid-rows-2 gap-3 h-full">
            {tour.gallery.slice(0, 2).map((img, i) => (
              <div
                key={i}
                onClick={() => setSelectedImage(img)}
                className="relative h-full rounded-2xl overflow-hidden cursor-pointer group bg-slate-100 border border-slate-200/80 shadow-sm"
              >
                <Image
                  src={img}
                  alt={`${tour.title} preview ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="350px"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              </div>
            ))}
          </div>
        </div>

        {/* Quick Highlights Info Strip */}
        <div className="mt-4 bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-xs grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#059669] flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] text-slate-400 font-semibold uppercase">Duration</div>
              <div className="text-sm font-bold text-slate-900">{tour.duration}</div>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-3 sm:pt-0 sm:pl-6">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#059669] flex items-center justify-center shrink-0">
              <Car className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] text-slate-400 font-semibold uppercase">Departures</div>
              <div className="text-sm font-bold text-slate-900 truncate max-w-[140px]" title={tour.departureCities.join(", ")}>
                {tour.departureCities.join(", ")}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-3 sm:pt-0 sm:pl-6">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#059669] flex items-center justify-center shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] text-slate-400 font-semibold uppercase">Tour Type</div>
              <div className="text-sm font-bold text-slate-900 capitalize">{tour.category} Tour</div>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-3 sm:pt-0 sm:pl-6">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#059669] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] text-slate-400 font-semibold uppercase">Guided</div>
              <div className="text-sm font-bold text-slate-900">Expert Tour Lead</div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Main Content: Left Details + Right Booking Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* 1. Key Attractions / Places */}
            {tour.attractions && tour.attractions.length > 0 && (
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs space-y-4">
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  Key Attractions & Highlights
                </h2>
                <div className="flex flex-wrap gap-2">
                  {tour.attractions.map((place, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-lg bg-slate-50 text-slate-700 text-xs sm:text-sm font-medium border border-slate-200 hover:border-[#059669]/40 transition-colors"
                    >
                      {place}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* 2. Clean Itinerary Section */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs">
              <div className="flex items-center justify-between gap-4 pb-5 border-b border-slate-100 mb-6">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                    Day-by-Day Itinerary
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    Carefully planned route, sightseeing milestones, and accommodations.
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={expandAllDays}
                    className="text-xs font-semibold text-[#059669] hover:underline"
                  >
                    Expand all
                  </button>
                  <span className="text-slate-300">•</span>
                  <button
                    type="button"
                    onClick={collapseAllDays}
                    className="text-xs font-semibold text-slate-500 hover:underline"
                  >
                    Collapse all
                  </button>
                </div>
              </div>

              {/* Day Cards */}
              <div className="space-y-3">
                {tour.itinerary.map((dayItem, idx) => {
                  const isExpanded = !!expandedDays[idx];
                  const dayLabel = dayItem.dayLabel || `Day ${dayItem.day || idx + 1}`;

                  return (
                    <div
                      key={idx}
                      className="rounded-xl border border-slate-200/80 overflow-hidden transition-all bg-white"
                    >
                      <button
                        type="button"
                        onClick={() => toggleDay(idx)}
                        className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-4 hover:bg-slate-50/70 transition-colors"
                      >
                        <div className="flex items-start gap-3.5">
                          <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-[#059669] text-xs font-bold shrink-0 mt-0.5 border border-emerald-100">
                            {dayLabel}
                          </span>
                          <div>
                            <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                              {dayItem.title}
                            </h3>
                            {dayItem.stay && (
                              <div className="text-xs text-slate-500 mt-1 flex items-center gap-1.5">
                                <BedDouble className="w-3.5 h-3.5 text-slate-400" />
                                <span>Stay: {dayItem.stay}</span>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 shrink-0 mt-0.5">
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              isExpanded ? "rotate-180 text-slate-800" : ""
                            }`}
                          />
                        </div>
                      </button>

                      {isExpanded && (
                        <div className="px-4 sm:px-5 pb-5 pt-1 border-t border-slate-100 text-xs sm:text-sm text-slate-600 space-y-3 bg-slate-50/40">
                          {dayItem.desc && (
                            <p className="text-slate-700 leading-relaxed pt-2">
                              {dayItem.desc}
                            </p>
                          )}

                          {dayItem.activities && dayItem.activities.length > 0 && (
                            <div className="pt-1">
                              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                                Key Sightseeing & Activities
                              </div>
                              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {dayItem.activities.map((act, i) => (
                                  <li
                                    key={i}
                                    className="flex items-start gap-2 text-slate-800 text-xs font-medium"
                                  >
                                    <span className="text-[#059669] font-bold">•</span>
                                    <span>{act}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Day info footer */}
                          {(dayItem.meals || dayItem.stay) && (
                            <div className="pt-2 flex flex-wrap gap-2 text-xs text-slate-600 border-t border-slate-200/60 mt-3">
                              {dayItem.meals && (
                                <span className="inline-flex items-center gap-1 bg-white px-2.5 py-1 rounded-md border border-slate-200 text-slate-700">
                                  <Utensils className="w-3 h-3 text-[#059669]" />
                                  <span>Meals: {dayItem.meals}</span>
                                </span>
                              )}
                              {dayItem.stay && (
                                <span className="inline-flex items-center gap-1 bg-white px-2.5 py-1 rounded-md border border-slate-200 text-slate-700">
                                  <Hotel className="w-3 h-3 text-[#059669]" />
                                  <span>Night Stay: {dayItem.stay}</span>
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 3. Inclusions & Exclusions */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-5">
                What&apos;s Included & Excluded
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Included */}
                <div className="space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#059669] flex items-center gap-1.5">
                    <Check className="w-4 h-4" />
                    <span>Included Services</span>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    {tour.inclusions.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Excluded */}
                <div className="space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                    <CloseIcon className="w-4 h-4 text-slate-400" />
                    <span>Not Included</span>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                    {tour.exclusions.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CloseIcon className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* 4. Hotel Options (Clean Tier Cards) */}
            {tour.nights > 0 && tour.hotels && tour.hotels.length > 0 && (
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs">
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                  Accommodation Standards
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mb-5">
                  Hotels are carefully vetted for safety, cleanliness, hygiene and comfort.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {tour.hotels.map((tierItem, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2.5"
                    >
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#074125] text-white text-[11px] font-bold">
                        {tierItem.tier}
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-700">
                        {tierItem.hotels.map((h, i) => (
                          <li key={i} className="flex items-start gap-1.5 font-medium">
                            <span className="text-[#059669]">•</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 5. What to Bring / Equipment Checklist */}
            {tour.equipment && tour.equipment.length > 0 && (
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs">
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                  Recommended Packing List
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mb-4">
                  Essential clothing and items recommended for northern mountain transit.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {tour.equipment.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-xs sm:text-sm font-medium text-slate-800"
                    >
                      <Check className="w-4 h-4 text-[#059669] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 6. Terms & Policies */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
                Terms & Policies
              </h2>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {tour.terms.map((term, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-slate-400 mt-0.5">•</span>
                    <span>{term}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column (4 cols) - Clean Sticky Booking Box */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-5">
              
              {/* Price / Quote Header */}
              <div className="pb-4 border-b border-slate-100">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Pricing & Quotation
                </div>
                <div className="text-2xl font-black text-[#074125] mt-1">
                  Custom Quote on Request
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Tailored rates based on room sharing, date, and group size.
                </p>
              </div>

              {/* Room Sharing Selector (if multi-day) */}
              {tour.nights > 0 ? (
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Room Sharing Tier
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {(["quad", "triple", "twin", "privateCouple"] as const).map((planKey) => {
                      const isSelected = selectedSharingPlan === planKey;
                      const info = planLabels[planKey];

                      return (
                        <button
                          key={planKey}
                          type="button"
                          onClick={() => setSelectedSharingPlan(planKey)}
                          className={`p-2.5 rounded-xl border text-left transition-all ${
                            isSelected
                              ? "border-[#059669] bg-emerald-50/60 text-[#074125] ring-1 ring-[#059669]"
                              : "border-slate-200 hover:border-slate-300 text-slate-700 bg-white"
                          }`}
                        >
                          <div className="text-xs font-bold">{info.title}</div>
                          <div className="text-[10px] text-slate-500 truncate">{info.subtitle}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-100 text-xs font-medium text-[#074125]">
                  1-Day Sightseeing Expedition • Standard Seat Included
                </div>
              )}

              {/* Number of Travelers Counter */}
              {selectedSharingPlan !== "privateCouple" && (
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                    <span>Number of Travelers</span>
                    <span className="text-[#059669]">{guestCount} Pax</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                      className="w-10 h-10 rounded-lg bg-slate-100 hover:bg-slate-200 font-bold text-slate-700 flex items-center justify-center transition-colors text-base"
                    >
                      -
                    </button>
                    <div className="flex-1 py-2 text-center font-bold text-sm text-slate-900 bg-slate-50 rounded-lg border border-slate-200">
                      {guestCount} Traveler{guestCount > 1 ? "s" : ""}
                    </div>
                    <button
                      type="button"
                      onClick={() => setGuestCount(guestCount + 1)}
                      className="w-10 h-10 rounded-lg bg-slate-100 hover:bg-slate-200 font-bold text-slate-700 flex items-center justify-center transition-colors text-base"
                    >
                      +
                    </button>
                  </div>
                </div>
              )}

              {/* CTAs */}
              <div className="space-y-2.5 pt-2">
                <Link
                  href={whatsappDirectUrl}
                  target="_blank"
                  className="w-full py-3.5 rounded-xl bg-[#059669] hover:bg-[#074125] text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-sm text-center"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Inquire on WhatsApp</span>
                </Link>

                <button
                  type="button"
                  onClick={() => setBookingModalOpen(true)}
                  className="w-full py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-semibold text-xs transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Submit Custom Booking Form</span>
                </button>
              </div>

              {/* Helpline info */}
              <div className="pt-3 border-t border-slate-100 text-center space-y-1">
                <div className="text-[11px] text-slate-400">Need instant assistance?</div>
                <a
                  href={`tel:${config.phone}`}
                  className="text-xs font-bold text-[#074125] hover:text-[#059669] inline-flex items-center gap-1"
                >
                  <Phone className="w-3 h-3 text-[#059669]" />
                  <span>{config.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Related Journeys */}
      {relatedTours.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
          <div className="flex items-end justify-between mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                You Might Also Like
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Explore more curated destinations across Pakistan.
              </p>
            </div>
            <Link
              href="/packages"
              className="text-xs sm:text-sm font-bold text-[#059669] hover:underline flex items-center gap-1"
            >
              <span>View all</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

      {/* 5. Mobile Fixed Action Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-3 px-4 shadow-lg flex items-center justify-between gap-3">
        <div>
          <div className="text-[10px] text-slate-400 font-semibold uppercase">Pricing</div>
          <div className="text-sm font-bold text-[#074125]">Custom Quote</div>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={whatsappDirectUrl}
            target="_blank"
            className="w-10 h-10 rounded-lg bg-emerald-50 text-[#059669] flex items-center justify-center border border-emerald-200"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
          </Link>

          <button
            onClick={() => setBookingModalOpen(true)}
            className="px-5 py-2.5 rounded-lg bg-[#059669] text-white font-bold text-xs shadow-sm"
          >
            Book Now
          </button>
        </div>
      </div>

      {/* 6. Photo Gallery Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center p-4 animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex flex-col max-h-[90vh]"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-3 sm:p-4 px-5 border-b border-white/10 text-white shrink-0">
              <span className="text-xs sm:text-sm font-bold truncate">{tour.title} Gallery</span>
              <button
                onClick={() => setSelectedImage(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                aria-label="Close photo preview"
              >
                <CloseIcon className="w-4 h-4" />
              </button>
            </div>

            {/* Main Stage Image */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black">
              <Image
                src={selectedImage}
                alt={tour.title}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 1000px"
              />
            </div>

            {/* Thumbnail Strip */}
            {tour.gallery.length > 1 && (
              <div className="p-3 bg-slate-950 border-t border-white/10 flex items-center justify-center gap-2 overflow-x-auto shrink-0">
                {tour.gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(img)}
                    className={`relative w-14 sm:w-16 h-10 sm:h-12 rounded-lg overflow-hidden border transition-all shrink-0 ${
                      selectedImage === img
                        ? "border-[#34d399] scale-105"
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

      {/* 7. Booking Modal */}
      <BookingModal
        tour={tour}
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </div>
  );
}
