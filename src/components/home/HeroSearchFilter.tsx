"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  Compass, 
  MapPin, 
  Calendar, 
  Search, 
  ChevronDown
} from "lucide-react";

export default function HeroSearchFilter() {
  const router = useRouter();
  const [destination, setDestination] = useState("");
  const [category, setCategory] = useState("");
  const [departureCity, setDepartureCity] = useState("Lahore");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (destination) params.set("dest", destination);
    if (category) params.set("cat", category);
    if (departureCity) params.set("city", departureCity);

    router.push(`/packages?${params.toString()}`);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white/95 backdrop-blur-2xl p-2.5 sm:p-4 rounded-2xl sm:rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.35)] border border-white/80 text-slate-900 transition-all duration-300">
        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-2">
          {/* Destination Select */}
          <div className="flex-1 bg-slate-50 sm:bg-transparent px-3 py-2 sm:py-1 rounded-xl sm:rounded-none sm:border-r border-slate-200 text-left">
            <label className="block text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-slate-400 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#059669] shrink-0" />
              <span>Destination</span>
            </label>
            <div className="relative">
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                aria-label="Select destination"
                className="w-full bg-transparent font-bold text-xs sm:text-sm text-[#074125] focus:outline-none cursor-pointer pr-4 truncate"
              >
                <option value="">All Destinations</option>
                <option value="Hunza">Hunza & Khunjerab</option>
                <option value="Skardu">Skardu & Deosai</option>
                <option value="Fairy Meadows">Fairy Meadows</option>
                <option value="Kashmir">Kashmir & Neelum Valley</option>
                <option value="Swat">Swat & Kalam</option>
                <option value="Kumrat">Kumrat Valley</option>
                <option value="Sharan">Sharan & Shogran</option>
                <option value="Naran">Naran Kaghan</option>
                <option value="Astore">Astore & Minimarg</option>
                <option value="Muskhpuri">Muskhpuri Top</option>
              </select>
            </div>
          </div>

          {/* Travel Style */}
          <div className="flex-1 bg-slate-50 sm:bg-transparent px-3 py-2 sm:py-1 rounded-xl sm:rounded-none sm:border-r border-slate-200 text-left">
            <label className="block text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-slate-400 flex items-center gap-1">
              <Compass className="w-3 h-3 text-[#059669] shrink-0" />
              <span>Trip Type</span>
            </label>
            <div className="relative">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                aria-label="Select travel style"
                className="w-full bg-transparent font-bold text-xs sm:text-sm text-[#074125] focus:outline-none cursor-pointer pr-4 truncate"
              >
                <option value="">All Tour Types</option>
                <option value="group">Group Tours</option>
                <option value="weekend">Weekend Escapes</option>
                <option value="trekking">Trekking & Expeditions</option>
              </select>
            </div>
          </div>

          {/* Departure City */}
          <div className="flex-1 bg-slate-50 sm:bg-transparent px-3 py-2 sm:py-1 rounded-xl sm:rounded-none text-left">
            <label className="block text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-slate-400 flex items-center gap-1">
              <Calendar className="w-3 h-3 text-[#059669] shrink-0" />
              <span>Depart From</span>
            </label>
            <div className="relative">
              <select
                value={departureCity}
                onChange={(e) => setDepartureCity(e.target.value)}
                aria-label="Select departure city"
                className="w-full bg-transparent font-bold text-xs sm:text-sm text-[#074125] focus:outline-none cursor-pointer pr-4 truncate"
              >
                <option value="">All Departure Hubs</option>
                <option value="Lahore">Lahore</option>
                <option value="Islamabad">Islamabad</option>
                <option value="Faisalabad">Faisalabad</option>
                <option value="Multan">Multan</option>
                <option value="Gujranwala">Gujranwala</option>
              </select>
            </div>
          </div>

          {/* Search Action Button */}
          <div className="shrink-0">
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 sm:py-3.5 rounded-xl sm:rounded-full bg-[#059669] hover:bg-[#074125] text-white font-black text-xs sm:text-sm shadow-[0_4px_15px_rgba(5,150,105,0.35)] transition-all duration-300 flex items-center justify-center gap-2 transform active:scale-95 whitespace-nowrap"
            >
              <Search className="w-4 h-4 shrink-0" />
              <span>Search Tours</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
