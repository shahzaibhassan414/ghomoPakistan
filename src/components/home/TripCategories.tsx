"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { config } from "@/config";
import { Users, Compass, Plane, ArrowRight, Sparkles } from "lucide-react";

export default function TripCategories() {
  const iconMap: Record<string, React.ReactNode> = {
    Users: <Users className="w-5 h-5" />,
    Compass: <Compass className="w-5 h-5" />,
    Plane: <Plane className="w-5 h-5" />,
  };

  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-[#ecfdf5]/60 via-white to-[#ecfdf5]/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#074125] tracking-tight mb-3 sm:mb-4">
            Choose Your Way to Wander
          </h2>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
            Whether you want to join an energetic squad on a scenic group tour, head out on a quick weekend escape, or craft a bespoke private expedition — we have the perfect journey for you.
          </p>
        </div>

        {/* 3 Categories Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {config.categories.map((cat) => (
            <div
              key={cat.id}
              className="group relative rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col transform hover:-translate-y-2"
            >
              {/* Category Image Header */}
              <div className="relative aspect-[16/11] overflow-hidden bg-slate-900">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-transparent" />

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1 rounded-full bg-[#059669] text-white text-xs font-black uppercase tracking-wider shadow-md">
                    {cat.badge}
                  </span>
                </div>

                {/* Floating Icon */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div>
                    <span className="text-xs uppercase font-bold text-[#34d399] tracking-wider block">
                      {cat.subtitle}
                    </span>
                    <h3 className="text-xl font-black text-white leading-tight mt-0.5">
                      {cat.title}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shrink-0">
                    {iconMap[cat.icon] || <Compass className="w-5 h-5" />}
                  </div>
                </div>
              </div>

              {/* Category Description & CTA */}
              <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {cat.tagline}
                </p>

                <Link
                  href={cat.href}
                  className="inline-flex items-center justify-between w-full px-5 py-3 rounded-2xl bg-[#ecfdf5] group-hover:bg-[#059669] text-[#074125] group-hover:text-white font-extrabold text-sm transition-all duration-300 shadow-sm"
                >
                  <span>{cat.cta}</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
