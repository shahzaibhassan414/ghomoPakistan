"use client";

import React, { useState } from "react";
import Link from "next/link";
import { config } from "@/config";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Send, 
  Clock, 
  Sparkles, 
  CheckCircle,
  HelpCircle
} from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [destination, setDestination] = useState("Hunza Valley");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const waMsg = `✨ *NEW WEBSITE INQUIRY* ✨
*Name:* ${name}
*Phone/WhatsApp:* ${phone}
*Interested Destination:* ${destination}
*Message:* ${message || "General inquiry"}

Please reach out to me!`;

    const waUrl = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(waMsg)}`;
    setTimeout(() => {
      window.open(waUrl, "_blank");
    }, 600);
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-28 pb-24">
      {/* Header */}
      <div className="bg-[#002136] text-white py-12 sm:py-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden mb-8 sm:mb-12">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-2.5 sm:mb-3">
            Get In Touch
          </h1>
          <p className="text-slate-300 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
            Have questions about our itineraries, departure dates, seat availability, or want a custom quote? Reach out directly via WhatsApp or visit our offices.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Col: Contact Info & Offices (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-slate-200/80 space-y-6">
              <h3 className="text-xl font-black text-[#003554]">Direct Support Channels</h3>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#ebfafc] text-[#00b2d4] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-bold uppercase">Call / WhatsApp Hotline</div>
                  <a href={`tel:${config.phone}`} className="text-base font-black text-[#003554] hover:text-[#00b2d4]">
                    {config.phone}
                  </a>
                  <div className="text-xs text-emerald-600 font-semibold mt-0.5">Available 9:00 AM - 11:00 PM Daily</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#ebfafc] text-[#00b2d4] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-bold uppercase">Official Email</div>
                  <a href={`mailto:${config.email}`} className="text-sm font-bold text-slate-800 hover:text-[#00b2d4]">
                    {config.email}
                  </a>
                </div>
              </div>

              {/* Instant WhatsApp CTA Button */}
              <div className="pt-2">
                <Link
                  href={config.whatsappLink}
                  target="_blank"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-[#00b2d4] hover:bg-[#003554] text-white font-black text-sm shadow-[0_4px_20px_rgba(0,178,212,0.35)] transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat on WhatsApp Now</span>
                </Link>
              </div>
            </div>

            {/* Office Locations Card */}
            <div className="bg-[#002136] text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
              <h3 className="text-xl font-black text-white">Our Physical Offices</h3>

              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-[#00b2d4] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-sm text-white">Lahore Head Office</h4>
                  <p className="text-xs text-slate-300 leading-relaxed mt-0.5">
                    {config.addresses.lahore}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-[#00b2d4] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-sm text-white">Islamabad Branch Office</h4>
                  <p className="text-xs text-slate-300 leading-relaxed mt-0.5">
                    {config.addresses.islamabad}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Col: Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/80">
              <div className="mb-8">
                <span className="text-xs font-black uppercase tracking-wider text-[#00b2d4] block mb-1">
                  Quick Inquiry Form
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#003554]">
                  Send Us A Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Fill in your details below and our team will get back to you with all answers and itinerary options.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-black text-slate-900 mb-2">Message Sent!</h4>
                  <p className="text-sm text-slate-600 max-w-sm leading-relaxed mb-6">
                    Thank you! We have opened WhatsApp so you can instantly talk with our trip coordinator.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2 rounded-full bg-slate-100 text-slate-700 font-bold text-xs"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Hamza Ali"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#00b2d4] text-sm font-medium text-slate-800"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 0307 4116699"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#00b2d4] text-sm font-medium text-slate-800"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Interested Destination / Tour Type
                    </label>
                    <select
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#00b2d4] text-sm font-medium text-slate-800 bg-white"
                    >
                      <option value="Fairy Meadows & Nanga Parbat">Fairy Meadows & Nanga Parbat (5 Days)</option>
                      <option value="Hunza Valley & Passu Cones">Hunza Valley & Passu (5 Days)</option>
                      <option value="Skardu, Deosai & Lakes">Skardu, Deosai & Lakes (6 Days)</option>
                      <option value="Skardu By Air Luxury">Skardu By Air Luxury Escape (7 Days)</option>
                      <option value="Kumrat Valley & Katora Lake">Kumrat Valley & Katora Lake (4 Days)</option>
                      <option value="Swat & Malam Jabba">Swat & Malam Jabba Weekend (3 Days)</option>
                      <option value="Custom Private Tour">Custom Private Tour (Family / Squad)</option>
                      <option value="General Inquiry">General Inquiry / Booking Question</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Your Message / Questions
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your desired travel dates, number of people, or any questions..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#00b2d4] text-sm font-medium text-slate-800 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-[#00b2d4] hover:bg-[#003554] text-white font-extrabold text-sm shadow-[0_4px_20px_rgba(0,178,212,0.35)] transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message via WhatsApp</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
