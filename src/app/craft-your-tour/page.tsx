"use client";

import React, { useState } from "react";
import Link from "next/link";
import { config } from "@/config";
import { 
  Compass, 
  MapPin, 
  Car, 
  Users, 
  Calendar, 
  Sparkles, 
  Check, 
  Send, 
  ShieldCheck,
  Plane,
  Heart,
  Briefcase
} from "lucide-react";

export default function CraftYourTourPage() {
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>(["Hunza Valley & Passu"]);
  const [tripDuration, setTripDuration] = useState<number>(5);
  const [travelStyle, setTravelStyle] = useState<"standard" | "deluxe" | "luxuryByAir">("deluxe");
  const [vehicle, setVehicle] = useState<string>("Grand Cabin (12 Seater)");
  const [travelersCount, setTravelersCount] = useState<number>(6);
  const [tripType, setTripType] = useState<string>("Family Vacation");
  const [departureCity, setDepartureCity] = useState<string>("Islamabad");
  const [tentativeDate, setTentativeDate] = useState<string>("");
  const [leadName, setLeadName] = useState<string>("");
  const [leadWhatsapp, setLeadWhatsapp] = useState<string>("");
  const [specialNotes, setSpecialNotes] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const destinationOptions = [
    { name: "Hunza Valley & Passu", icon: "🏔️" },
    { name: "Skardu & Deosai", icon: "🌊" },
    { name: "Fairy Meadows & Nanga Parbat", icon: "🏕️" },
    { name: "Kumrat Valley", icon: "🌲" },
    { name: "Swat & Malam Jabba", icon: "⛷️" },
    { name: "Naran & Saif-ul-Malook", icon: "🛶" },
    { name: "Neelum Valley, Kashmir", icon: "🍃" },
    { name: "Gwadar & Ormara Beach", icon: "🏖️" },
  ];

  const toggleDestination = (name: string) => {
    if (selectedDestinations.includes(name)) {
      if (selectedDestinations.length > 1) {
        setSelectedDestinations(selectedDestinations.filter((d) => d !== name));
      }
    } else {
      setSelectedDestinations([...selectedDestinations, name]);
    }
  };

  // Base estimate calculator logic
  const baseRatePerDayPerPerson = 
    travelStyle === "standard" ? 4500 : travelStyle === "deluxe" ? 7500 : 18000;
  
  const estimatedTotal = Math.round(
    baseRatePerDayPerPerson * tripDuration * Math.max(1, travelersCount)
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = `✨ *CUSTOM PRIVATE TOUR REQUEST (CRAFT YOUR TOUR)* ✨
*Destinations:* ${selectedDestinations.join(", ")}
*Duration:* ${tripDuration} Days
*Travel Style:* ${travelStyle.toUpperCase()}
*Vehicle:* ${vehicle}
*Group Size:* ${travelersCount} Person(s)
*Trip Type:* ${tripType}
*Departure City:* ${departureCity}
*Tentative Date:* ${tentativeDate || "Flexible"}
*Quotation:* Requesting Custom Package Quote

*Lead Traveler:*
- *Name:* ${leadName}
- *WhatsApp:* ${leadWhatsapp}
- *Special Requests:* ${specialNotes || "None"}

Please provide a custom tailored itinerary and detailed quotation!`;

    const waUrl = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(message)}`;
    setTimeout(() => {
      window.open(waUrl, "_blank");
    }, 600);
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-24 sm:pt-28 pb-20 sm:pb-24">
      {/* Header */}
      <div className="bg-[#002136] text-white py-12 sm:py-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden mb-8 sm:mb-12">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00b2d4]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-2.5">
            Craft Your Custom Tour
          </h1>
          <p className="text-slate-300 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
            Private trips designed around your schedule, preferred hotels, vehicle of choice, and budget. For couples, families, corporate retreats & private squads.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-5 sm:p-10 shadow-xl border border-slate-200/80 space-y-6 sm:space-y-8">
          {/* Step 1: Destination Selection */}
          <div>
            <label className="block text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#003554] mb-2.5 flex items-center gap-2">
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#00b2d4] text-white flex items-center justify-center text-[10px] sm:text-xs font-bold shrink-0">1</span>
              <span>Choose Destinations (Select 1 or more)</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
              {destinationOptions.map((dest) => {
                const isSelected = selectedDestinations.includes(dest.name);
                return (
                  <button
                    key={dest.name}
                    type="button"
                    onClick={() => toggleDestination(dest.name)}
                    className={`p-3 rounded-2xl border text-left transition-all flex flex-col justify-between h-20 sm:h-24 ${
                      isSelected
                        ? "border-[#00b2d4] bg-[#ebfafc] text-[#003554] ring-2 ring-[#00b2d4]/30 shadow-sm"
                        : "border-slate-200 hover:border-slate-300 text-slate-700 bg-slate-50/50"
                    }`}
                  >
                    <span className="text-lg sm:text-xl">{dest.icon}</span>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-[11px] sm:text-xs font-black leading-tight truncate pr-1">{dest.name}</span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-[#00b2d4] shrink-0" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Trip Type & Duration */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            <div>
              <label className="block text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#003554] mb-2 flex items-center gap-2">
                <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#00b2d4] text-white flex items-center justify-center text-[10px] sm:text-xs font-bold shrink-0">2</span>
                <span>Trip Category</span>
              </label>
              <select
                value={tripType}
                onChange={(e) => setTripType(e.target.value)}
                className="w-full px-3.5 py-3 rounded-2xl border border-slate-200 focus:border-[#00b2d4] text-xs sm:text-sm font-bold text-slate-800 bg-white"
              >
                <option value="Family Vacation">Family Vacation (Relaxed & Kids Friendly)</option>
                <option value="Honeymoon / Couple Escape">Honeymoon / Couple Escape</option>
                <option value="Friends Squad Road Trip">Friends Squad Road Trip</option>
                <option value="Corporate / University Retreat">Corporate / University Retreat</option>
                <option value="Adventure Trekking Expedition">Adventure Trekking Expedition</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#003554] mb-2 flex items-center justify-between">
                <span>Trip Duration</span>
                <span className="text-[#00b2d4] font-black">{tripDuration} Days / {tripDuration - 1} Nights</span>
              </label>
              <input
                type="range"
                min={2}
                max={14}
                value={tripDuration}
                onChange={(e) => setTripDuration(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#00b2d4]"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-bold mt-1">
                <span>2 Days (Weekend)</span>
                <span>7 Days (Week)</span>
                <span>14 Days (Grand)</span>
              </div>
            </div>
          </div>

          {/* Step 3: Travel Style & Vehicle */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            <div>
              <label className="block text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#003554] mb-2 flex items-center gap-2">
                <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#00b2d4] text-white flex items-center justify-center text-[10px] sm:text-xs font-bold shrink-0">3</span>
                <span>Hotel Tier</span>
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { key: "standard", label: "Standard", desc: "3-Star" },
                  { key: "deluxe", label: "Deluxe", desc: "4-Star" },
                  { key: "luxuryByAir", label: "Luxury", desc: "5-Star/Air" },
                ].map((tier) => (
                  <button
                    key={tier.key}
                    type="button"
                    onClick={() => setTravelStyle(tier.key as any)}
                    className={`p-2.5 sm:p-3 rounded-2xl border text-left transition-all ${
                      travelStyle === tier.key
                        ? "border-[#00b2d4] bg-[#ebfafc] text-[#003554] ring-2 ring-[#00b2d4]/30"
                        : "border-slate-200 text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    <div className="text-xs font-black">{tier.label}</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">{tier.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#003554] mb-2">
                Preferred Vehicle
              </label>
              <select
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value)}
                className="w-full px-3.5 py-3 rounded-2xl border border-slate-200 focus:border-[#00b2d4] text-xs sm:text-sm font-bold text-slate-800 bg-white"
              >
                <option value="Toyota Prado 4x4 (4-5 Pax)">Toyota Prado 4x4 (4-5 Pax)</option>
                <option value="Grand Cabin Van (10-12 Pax)">Toyota Grand Cabin Van (10-12 Pax)</option>
                <option value="Toyota Hiace / BR-V (6-8 Pax)">Toyota Hiace / BR-V (6-8 Pax)</option>
                <option value="Luxury Saloon Coaster (20+ Pax)">Luxury Saloon Coaster (20+ Pax)</option>
                <option value="By-Air PIA Flights + Local 4x4">By-Air Flights + Local 4x4 Prado</option>
              </select>
            </div>
          </div>

          {/* Step 4: Number of Travelers & Departure */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
            <div>
              <label className="block text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#003554] mb-1.5 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#00b2d4] text-white flex items-center justify-center text-[10px] font-bold shrink-0">4</span>
                <span>Number of Travelers</span>
              </label>
              <input
                type="number"
                min={1}
                max={100}
                value={travelersCount}
                onChange={(e) => setTravelersCount(Number(e.target.value))}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#00b2d4] text-xs sm:text-sm font-bold text-slate-800"
              />
            </div>

            <div>
              <label className="block text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#003554] mb-1.5">
                Departure City
              </label>
              <select
                value={departureCity}
                onChange={(e) => setDepartureCity(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:border-[#00b2d4] text-xs sm:text-sm font-medium bg-white"
              >
                <option value="Islamabad">Islamabad</option>
                <option value="Lahore">Lahore</option>
                <option value="Karachi">Karachi</option>
                <option value="Peshawar">Peshawar</option>
                <option value="Multan">Multan</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#003554] mb-1.5">
                Tentative Dates
              </label>
              <input
                type="text"
                placeholder="e.g. Next weekend / Flexible"
                value={tentativeDate}
                onChange={(e) => setTentativeDate(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:border-[#00b2d4] text-xs sm:text-sm font-medium"
              />
            </div>
          </div>

          {/* Step 5: Contact Details */}
          <div className="pt-3 border-t border-slate-200/80 space-y-3 sm:space-y-4">
            <label className="block text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#003554]">
              Lead Contact Details
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <input
                type="text"
                required
                placeholder="Your Full Name *"
                value={leadName}
                onChange={(e) => setLeadName(e.target.value)}
                className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border border-slate-200 focus:border-[#00b2d4] text-xs sm:text-sm font-medium"
              />
              <input
                type="tel"
                required
                placeholder="WhatsApp Number * (0300 1234567)"
                value={leadWhatsapp}
                onChange={(e) => setLeadWhatsapp(e.target.value)}
                className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border border-slate-200 focus:border-[#00b2d4] text-xs sm:text-sm font-medium"
              />
            </div>
            <textarea
              rows={2}
              placeholder="Any special requests? (e.g. Bonfire BBQ, Stargazing, Drone Photographer, Honeymoon decor)"
              value={specialNotes}
              onChange={(e) => setSpecialNotes(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 focus:border-[#00b2d4] text-xs sm:text-sm font-medium"
            />
          </div>

          {/* Custom Quote & WhatsApp Submission */}
          <div className="bg-[#002136] text-white p-5 sm:p-8 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 shadow-2xl">
            <div className="text-center sm:text-left">
              <span className="text-[10px] sm:text-xs text-[#00b2d4] font-bold uppercase tracking-wider">Bespoke Itinerary:</span>
              <div className="text-xl sm:text-2xl font-black text-white mt-0.5">
                Custom Quote On Request
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5">
                Tailored for {travelersCount} traveler(s) • {tripDuration} Days • {travelStyle.toUpperCase()} Hotel Standard
              </p>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#00b2d4] hover:bg-[#009bb8] text-white font-black text-xs sm:text-sm shadow-[0_4px_20px_rgba(0,178,212,0.4)] transition-all flex items-center justify-center gap-2 transform active:scale-95 whitespace-nowrap"
            >
              <Send className="w-4 h-4 shrink-0" />
              <span>Request Itinerary on WhatsApp</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
