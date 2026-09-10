"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { config } from "@/config";
import { 
  Sparkles, 
  ShieldCheck, 
  Users, 
  Heart, 
  MapPin, 
  Award, 
  Compass, 
  CheckCircle2,
  ArrowRight,
  Send
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-[#f8fafc] min-h-screen pt-28 pb-24">
      {/* Header */}
      <div className="bg-[#042c19] text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden mb-10 sm:mb-16">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#059669]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-3 sm:mb-4">
            We Are {config.businessName}
          </h1>
          <p className="text-slate-200 text-xs sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            More than just an itinerary company. We are a community of passionate road-trippers, storytellers, and mountain enthusiasts on a mission to showcase the raw wonder of Pakistan.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-200">
            <Image
              src="/images/fairy_meadows.jpg"
              alt="Our Story in Pakistan"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-xs font-bold uppercase tracking-wider text-[#34d399]">Born in Lahore & Islamabad</span>
              <h3 className="text-xl font-bold">Uniting Travelers Across Pakistan</h3>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-4xl font-black text-[#074125] tracking-tight">
              The Road Is Always Better Together
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              We started with a vision to break away from traditional boring tourist buses. We wanted trips where music plays, strangers become confidants over campfire tea, paintbrushes come alive on alpine summits, and safety is never compromised.
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
              Whether trekking to the reflection pool of Nanga Parbat, navigating the roaring jeep trails of Kumrat, or enjoying 5-star heritage chalets in Skardu, every journey is curated with love, care, and attention to detail.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/packages"
                className="px-6 py-3.5 rounded-full bg-[#059669] hover:bg-[#074125] text-white font-extrabold text-sm shadow-lg transition-all flex items-center gap-2"
              >
                <span>Explore Upcoming Trips</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Excellence */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg border border-slate-200/80">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-black text-[#074125] mb-3">
              Why Travelers Love Wandering With Us
            </h3>
            <p className="text-slate-600 text-sm">
              Our core commitments that ensure every single trip is safe, joyful, and memorable.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <ShieldCheck className="w-8 h-8 text-[#059669]" />,
                title: "100% Female & Family Safe",
                desc: "Dedicated female tour captains, verified hotels, and zero tolerance for harassment.",
              },
              {
                icon: <Award className="w-8 h-8 text-[#059669]" />,
                title: "Certified Mountain Leads",
                desc: "First-aid trained captains with 10+ years of northern terrain and high-altitude experience.",
              },
              {
                icon: <Heart className="w-8 h-8 text-[#059669]" />,
                title: "Vibrant Community Vibes",
                desc: "RoadRang games, bonfire jamming, acoustic nights, and creative painting sessions.",
              },
              {
                icon: <Compass className="w-8 h-8 text-[#059669]" />,
                title: "Zero Hidden Costs",
                desc: "Transparent inclusions with quality transport, meals, tolls, and comfortable stays.",
              },
            ].map((pillar, i) => (
              <div key={i} className="flex flex-col items-center text-center p-4">
                <div className="w-16 h-16 rounded-2xl bg-[#ecfdf5] flex items-center justify-center mb-4">
                  {pillar.icon}
                </div>
                <h4 className="font-extrabold text-base text-[#074125] mb-2">{pillar.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-[#042c19] text-white rounded-3xl p-8 sm:p-12 shadow-xl grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {config.stats.map((st, i) => (
            <div key={i}>
              <div className="text-3xl sm:text-4xl font-black text-[#34d399] mb-1">{st.value}</div>
              <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">{st.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
