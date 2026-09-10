"use client";

import React from "react";
import { config } from "@/config";
import { 
  Sparkles, 
  Palette, 
  Camera, 
  Flame, 
  Moon, 
  Music,
  Compass,
  Smile,
  Waves,
  ShieldCheck
} from "lucide-react";

export default function ActivityHighlights() {
  const iconMap: Record<string, React.ReactNode> = {
    Sparkles: <Sparkles className="w-6 h-6 text-[#34d399]" />,
    Palette: <Palette className="w-6 h-6 text-[#34d399]" />,
    Camera: <Camera className="w-6 h-6 text-[#34d399]" />,
    Flame: <Flame className="w-6 h-6 text-[#34d399]" />,
    Moon: <Moon className="w-6 h-6 text-[#34d399]" />,
    Music: <Music className="w-6 h-6 text-[#34d399]" />,
    Waves: <Waves className="w-6 h-6 text-[#34d399]" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#34d399]" />,
  };

  return (
    <section className="py-14 sm:py-20 bg-[#042c19] text-white relative overflow-hidden">
      {/* Glow shapes */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#059669]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#074125]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3 sm:mb-4">
            More Than Just A Sightseeing Tour
          </h2>
          <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
            Every journey with us is loaded with curated activities, vibrant road trip energy, acoustic sessions, and moments that transform strangers into a community.
          </p>
        </div>

        {/* 6 Signature Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {config.activities.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 hover:bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/10 hover:border-[#059669]/50 transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1.5"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {iconMap[item.icon] || <Sparkles className="w-6 h-6 text-[#34d399]" />}
                  </div>
                  <span className="text-[11px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-[#059669]/20 text-[#34d399] border border-[#059669]/30">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-xl font-black text-white mb-2 group-hover:text-[#34d399] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-slate-400">
                <Smile className="w-3.5 h-3.5 text-[#34d399]" />
                <span>Included on all regular group departures</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
