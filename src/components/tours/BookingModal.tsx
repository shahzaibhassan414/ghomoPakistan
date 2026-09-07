"use client";

import React, { useState } from "react";
import { TourPackage, config } from "@/config";
import { 
  X, 
  Calendar, 
  Users, 
  MapPin, 
  CheckCircle, 
  ShieldCheck, 
  Send, 
  Sparkles
} from "lucide-react";

interface BookingModalProps {
  tour: TourPackage | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ tour, isOpen, onClose }: BookingModalProps) {
  const [sharingPlan, setSharingPlan] = useState<"quad" | "triple" | "twin" | "privateCouple">("quad");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [departureCity, setDepartureCity] = useState<string>("Lahore");
  const [guestsCount, setGuestsCount] = useState<number>(1);
  const [fullName, setFullName] = useState<string>("");
  const [gender, setGender] = useState<string>("Male");
  const [whatsapp, setWhatsapp] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [joiningAs, setJoiningAs] = useState<string>("Solo Wanderer");
  const [emergencyContact, setEmergencyContact] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  if (!isOpen || !tour) return null;

  const currentPricePerPerson = tour.sharingPrices[sharingPlan] || tour.price;
  const totalPrice = currentPricePerPerson * guestsCount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Build WhatsApp pre-filled message
    const message = `✨ *NEW TOUR BOOKING INQUIRY* ✨
*Tour:* ${tour.title}
*Departure City:* ${departureCity}
*Date:* ${selectedDate || tour.upcomingDates[0]}
*Sharing Plan:* ${sharingPlan.toUpperCase()} Sharing (PKR ${currentPricePerPerson.toLocaleString()}/person)
*Number of Guests:* ${guestsCount}
*Total Estimated Price:* PKR ${totalPrice.toLocaleString()}

*Traveler Details:*
- *Name:* ${fullName}
- *Gender:* ${gender}
- *WhatsApp:* ${whatsapp}
- *Email:* ${email || "N/A"}
- *Joining As:* ${joiningAs}
- *Emergency Contact:* ${emergencyContact || "N/A"}

Please confirm my seat reservation!`;

    const encoded = encodeURIComponent(message);
    const waUrl = `https://wa.me/${config.whatsappNumber}?text=${encoded}`;
    
    // Open WhatsApp in new tab after 600ms
    setTimeout(() => {
      window.open(waUrl, "_blank");
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 my-auto max-h-[94vh] flex flex-col">
        {/* Header with Tour Banner */}
        <div className="relative bg-gradient-to-r from-[#003554] to-[#002136] text-white p-5 sm:p-7 shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors z-10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 shrink-0" />
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#00b2d4]/20 border border-[#00b2d4]/40 text-[#00b2d4] text-[10px] sm:text-xs font-black uppercase tracking-wider mb-2">
            <Sparkles className="w-3 h-3 shrink-0" />
            <span>{tour.badge || "BOOK YOUR ADVENTURE"}</span>
          </div>

          <h3 className="text-lg sm:text-2xl font-black tracking-tight text-white pr-8">
            {tour.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
            {tour.duration} • Group & Private Tour
          </p>
        </div>

        {submitted ? (
          /* Confirmation State */
          <div className="p-6 sm:p-12 text-center flex flex-col items-center overflow-y-auto">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4 shrink-0">
              <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 shrink-0" />
            </div>
            <h4 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">Booking Initiated!</h4>
            <p className="text-slate-600 text-xs sm:text-sm max-w-md mb-6 leading-relaxed">
              Thank you <strong className="text-slate-900">{fullName}</strong>! We are redirecting you to WhatsApp to finalize your seat reservation with our tour manager.
            </p>

            <div className="bg-[#ebfafc] border border-[#00b2d4]/30 rounded-2xl p-4 w-full max-w-md text-left mb-6">
              <div className="flex justify-between text-xs text-slate-600 mb-1">
                <span>Selected Tour:</span>
                <span className="font-bold text-slate-900">{tour.title}</span>
              </div>
              <div className="flex justify-between text-xs text-slate-600 mb-1">
                <span>Sharing Tier:</span>
                <span className="font-bold text-slate-900 capitalize">{sharingPlan} Sharing</span>
              </div>
              <div className="flex justify-between text-xs text-slate-600 mb-1">
                <span>Travelers:</span>
                <span className="font-bold text-slate-900">{guestsCount} Person(s)</span>
              </div>
              <div className="flex justify-between text-sm font-black text-[#003554] pt-2 border-t border-slate-200 mt-2">
                <span>Quotation:</span>
                <span className="text-[#00b2d4]">Custom Quote On Request</span>
              </div>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs"
            >
              Done & Close
            </button>
          </div>
        ) : (
          /* Interactive Booking Form */
          <form onSubmit={handleSubmit} className="p-4 sm:p-7 space-y-5 overflow-y-auto flex-1">
            {/* Step 1: Sharing Plan Selector */}
            <div>
              <label className="block text-[11px] font-black uppercase tracking-wider text-slate-700 mb-2">
                1. Select Sharing Plan
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { key: "quad", label: "Quad (4 Pax)", desc: "4 In 1 Room" },
                  { key: "triple", label: "Triple (3 Pax)", desc: "3 In 1 Room" },
                  { key: "twin", label: "Twin (2 Pax)", desc: "2 In 1 Room" },
                  { key: "privateCouple", label: "Private Room", desc: "Couple Suite" },
                ].map((plan) => (
                  <button
                    key={plan.key}
                    type="button"
                    onClick={() => setSharingPlan(plan.key as any)}
                    className={`p-2.5 sm:p-3 rounded-2xl border text-left transition-all ${
                      sharingPlan === plan.key
                        ? "border-[#00b2d4] bg-[#ebfafc] text-[#003554] ring-2 ring-[#00b2d4]/30 shadow-sm"
                        : "border-slate-200 hover:border-slate-300 text-slate-600 bg-slate-50/50"
                    }`}
                  >
                    <div className="text-[11px] sm:text-xs font-black truncate">{plan.label}</div>
                    <div className="text-[11px] font-bold text-[#00b2d4] mt-0.5 truncate">
                      {plan.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Departure Date & City */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="block text-[11px] font-black uppercase tracking-wider text-slate-700 mb-1">
                  2. Departure Date
                </label>
                <div className="relative">
                  <select
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 focus:border-[#00b2d4] text-xs sm:text-sm font-bold text-slate-800 bg-white"
                  >
                    {tour.upcomingDates.map((date) => (
                      <option key={date} value={date}>{date}</option>
                    ))}
                  </select>
                  <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3 shrink-0" />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-black uppercase tracking-wider text-slate-700 mb-1">
                  Departure City
                </label>
                <div className="relative">
                  <select
                    value={departureCity}
                    onChange={(e) => setDepartureCity(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 focus:border-[#00b2d4] text-xs sm:text-sm font-bold text-slate-800 bg-white"
                  >
                    <option value="Lahore">Lahore (Kalma Chowk / Thokar)</option>
                    <option value="Islamabad">Islamabad (Daewoo Terminal)</option>
                    <option value="Karachi">Karachi (Connecting Option)</option>
                  </select>
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3 shrink-0" />
                </div>
              </div>
            </div>

            {/* Step 3: Number of Guests */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-[11px] font-black uppercase tracking-wider text-slate-700">
                  3. Total Travelers
                </label>
                <span className="text-[11px] font-bold text-[#00b2d4]">
                  Available On Request
                </span>
              </div>
              <div className="flex items-center gap-3 bg-slate-50 p-2 sm:p-2.5 rounded-xl border border-slate-200">
                <Users className="w-4 h-4 text-slate-500 ml-2 shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-slate-700 flex-1">Number of Seats:</span>
                <div className="flex items-center gap-2 sm:gap-3">
                  <button
                    type="button"
                    onClick={() => setGuestsCount(Math.max(1, guestsCount - 1))}
                    className="w-8 h-8 rounded-lg bg-white border border-slate-300 font-black text-slate-700 hover:bg-slate-100 flex items-center justify-center text-sm"
                  >
                    -
                  </button>
                  <span className="font-black text-sm sm:text-base text-slate-900 w-6 text-center">
                    {guestsCount}
                  </span>
                  <button
                    type="button"
                    onClick={() => setGuestsCount(guestsCount + 1)}
                    className="w-8 h-8 rounded-lg bg-white border border-slate-300 font-black text-slate-700 hover:bg-slate-100 flex items-center justify-center text-sm"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Step 4: Personal Details */}
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <label className="block text-[11px] font-black uppercase tracking-wider text-slate-700">
                4. Lead Traveler Details
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Full Name *"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#00b2d4] text-xs sm:text-sm font-medium"
                />
                <input
                  type="tel"
                  required
                  placeholder="WhatsApp Number * (0300 1234567)"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#00b2d4] text-xs sm:text-sm font-medium"
                />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:border-[#00b2d4] text-xs sm:text-sm font-medium bg-white"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Mixed Squad">Mixed Group</option>
                </select>

                <select
                  value={joiningAs}
                  onChange={(e) => setJoiningAs(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:border-[#00b2d4] text-xs sm:text-sm font-medium bg-white"
                >
                  <option value="Solo Wanderer">Solo Traveler</option>
                  <option value="With Friends">With Friends</option>
                  <option value="Couple">Couple</option>
                  <option value="Family">Family</option>
                </select>

                <div className="col-span-2 sm:col-span-1">
                  <input
                    type="tel"
                    placeholder="Emergency Contact"
                    value={emergencyContact}
                    onChange={(e) => setEmergencyContact(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:border-[#00b2d4] text-xs sm:text-sm font-medium"
                  />
                </div>
              </div>
            </div>

            {/* Custom Quote Bar & Submit */}
            <div className="bg-[#002136] text-white p-4 sm:p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 shadow-xl">
              <div className="w-full sm:w-auto text-center sm:text-left">
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Package Pricing:</div>
                <div className="text-lg sm:text-xl font-black text-white">
                  Custom Quote on Request
                </div>
                <div className="text-[10px] text-[#00b2d4] font-semibold">
                  {guestsCount} guest(s) • {sharingPlan.toUpperCase()} Sharing
                </div>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#00b2d4] hover:bg-[#009bb8] text-white font-black text-xs sm:text-sm shadow-[0_4px_18px_rgba(0,178,212,0.4)] transition-all flex items-center justify-center gap-2 transform active:scale-95"
              >
                <Send className="w-4 h-4 shrink-0" />
                <span>Reserve on WhatsApp</span>
              </button>
            </div>

            <div className="flex items-center justify-center gap-1.5 text-[10px] sm:text-xs text-slate-500 pb-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00b2d4] shrink-0" />
              <span>50% Advance deposit required to lock seat • 100% verified tour coordinators</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
