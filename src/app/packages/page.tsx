"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { config, TourPackage } from "@/config";
import TourCard from "@/components/tours/TourCard";
import BookingModal from "@/components/tours/BookingModal";
import { 
  Search, 
  Filter, 
  Sparkles, 
  Calendar, 
  MapPin, 
  SlidersHorizontal,
  Compass,
  ArrowUpDown
} from "lucide-react";

function PackagesContent() {
  const searchParams = useSearchParams();
  const initialDest = searchParams.get("dest") || "";
  const initialCat = searchParams.get("cat") || "all";
  const initialCity = searchParams.get("city") || "";

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(initialCat);
  const [selectedDest, setSelectedDest] = useState(initialDest);
  const [selectedCity, setSelectedCity] = useState(initialCity);
  const [sortBy, setSortBy] = useState<"featured" | "duration-desc" | "duration-asc" | "dest-az">("featured");
  const [selectedTourForBooking, setSelectedTourForBooking] = useState<TourPackage | null>(null);

  useEffect(() => {
    if (initialCat) setSelectedCategory(initialCat);
    if (initialDest) setSelectedDest(initialDest);
    if (initialCity) setSelectedCity(initialCity);
  }, [initialCat, initialDest, initialCity]);

  // Filtering
  const filteredTours = config.tours.filter((tour) => {
    const matchesSearch = 
      tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.attractions.some(attraction => attraction.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = 
      selectedCategory === "all" || tour.category === selectedCategory;

    const matchesDest = 
      !selectedDest || tour.destination.toLowerCase().includes(selectedDest.toLowerCase());

    const matchesCity = 
      !selectedCity || tour.departureCities.some(c => c.toLowerCase() === selectedCity.toLowerCase());

    return matchesSearch && matchesCategory && matchesDest && matchesCity;
  });

  // Sorting
  const sortedTours = [...filteredTours].sort((a, b) => {
    if (sortBy === "duration-desc") return b.days - a.days;
    if (sortBy === "duration-asc") return a.days - b.days;
    if (sortBy === "dest-az") return a.destination.localeCompare(b.destination);
    return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
  });

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-28 pb-24">
      {/* Page Header */}
      <div className="bg-[#042c19] text-white py-12 sm:py-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden mb-8 sm:mb-12">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#059669]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-3">
            All Upcoming Adventures
          </h1>
          <p className="text-slate-300 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
            Browse our scheduled group departures, weekend getaways, and mountain expeditions across Pakistan.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Controls & Filter Bar */}
        <div className="bg-white p-4 sm:p-6 rounded-3xl shadow-sm border border-slate-200/80 mb-10 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3.5 items-center">
            {/* Live Search Input */}
            <div className="lg:col-span-4 relative">
              <input
                type="text"
                placeholder="Search by tour or spot..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:border-[#059669] focus:ring-2 focus:ring-[#059669]/20 text-xs sm:text-sm font-medium text-slate-800"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            </div>

            {/* Destination Dropdown */}
            <div className="lg:col-span-3 relative">
              <select
                value={selectedDest}
                onChange={(e) => setSelectedDest(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:border-[#059669] text-xs sm:text-sm font-semibold text-slate-800 cursor-pointer"
              >
                <option value="">All Destinations</option>
                <option value="Hunza">Hunza & Khunjerab</option>
                <option value="Skardu">Skardu & Deosai</option>
                <option value="Fairy Meadows">Fairy Meadows</option>
                <option value="Kashmir">Neelum Valley (Kashmir)</option>
                <option value="Swat">Swat & Kalam</option>
                <option value="Kumrat">Kumrat Valley</option>
                <option value="Sharan">Sharan & Shogran</option>
                <option value="Naran">Naran Kaghan</option>
                <option value="Astore">Astore & Minimarg</option>
                <option value="Muskhpuri">Muskhpuri Top</option>
              </select>
            </div>

            {/* Departure Hub Dropdown */}
            <div className="lg:col-span-3 relative">
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:border-[#059669] text-xs sm:text-sm font-semibold text-slate-800 cursor-pointer"
              >
                <option value="">All Departure Hubs</option>
                <option value="Lahore">Lahore</option>
                <option value="Islamabad">Islamabad</option>
                <option value="Faisalabad">Faisalabad</option>
                <option value="Multan">Multan</option>
                <option value="Gujranwala">Gujranwala</option>
              </select>
            </div>

            {/* Sort By Dropdown */}
            <div className="lg:col-span-2 relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full px-3 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:border-[#059669] text-xs sm:text-sm font-semibold text-slate-800 cursor-pointer"
              >
                <option value="featured">Featured First</option>
                <option value="duration-desc">Longest First</option>
                <option value="duration-asc">Shortest First</option>
                <option value="dest-az">A to Z</option>
              </select>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2 border-t border-slate-100 hide-scrollbar">
            {[
              { id: "all", label: "All Packages (13)" },
              { id: "group", label: "Group Tours (7)" },
              { id: "weekend", label: "Weekend Escapes (3)" },
              { id: "trekking", label: "Trekking & Expeditions (3)" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-extrabold tracking-wide uppercase transition-all whitespace-nowrap ${
                  selectedCategory === tab.id
                    ? "bg-[#074125] text-white shadow-md"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tours Count & Grid */}
        <div className="mb-6 flex items-center justify-between">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Showing <strong className="text-slate-900">{sortedTours.length}</strong> adventurous journeys
          </span>
          {(searchQuery || selectedDest || selectedCity || selectedCategory !== "all") && (
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedDest("");
                setSelectedCity("");
                setSelectedCategory("all");
              }}
              className="text-xs font-bold text-[#059669] hover:underline"
            >
              Reset Filters
            </button>
          )}
        </div>

        {sortedTours.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedTours.map((tour) => (
              <TourCard
                key={tour.id}
                tour={tour}
                onBookNow={(t) => setSelectedTourForBooking(t)}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-sm max-w-lg mx-auto">
            <Compass className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-800 mb-2">No matching tours found</h3>
            <p className="text-sm text-slate-500 mb-6">
              Try changing your search term or filter settings, or craft a custom trip according to your schedule.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedDest("");
                setSelectedCategory("all");
              }}
              className="px-6 py-2.5 rounded-full bg-[#059669] text-white font-bold text-xs uppercase"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>

      {/* Booking Modal */}
      <BookingModal
        tour={selectedTourForBooking}
        isOpen={!!selectedTourForBooking}
        onClose={() => setSelectedTourForBooking(null)}
      />
    </div>
  );
}

export default function PackagesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-32 text-center">Loading tours catalog...</div>}>
      <PackagesContent />
    </Suspense>
  );
}
