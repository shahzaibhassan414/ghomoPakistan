"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { config } from "@/config";
import { Camera, MapPin, X, Eye, Sparkles, Send } from "lucide-react";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<{ title: string; location: string; image: string } | null>(null);
  const [filter, setFilter] = useState("all");

  const galleryItems = [
    { title: "Nanga Parbat Reflection Pool", location: "Fairy Meadows", image: "/images/fairy_meadows.jpg", category: "mountains" },
    { title: "Passu Cones Golden Sunset", location: "Hunza Valley", image: "/images/hunza_passu.jpg", category: "lakes" },
    { title: "Shangrila Chalets on Kachura Lake", location: "Skardu", image: "/images/skardu_valley.jpg", category: "lakes" },
    { title: "Campfire Jamming Under Galaxy", location: "Sharan Forest", image: "/images/bonfire_camp.jpg", category: "bonfire" },
    { title: "Malam Jabba Ski Resort & Pines", location: "Swat Valley", image: "/images/travel_package.jpg", category: "mountains" },
    { title: "Karakoram Highway Road Trip", location: "Passu", image: "/images/travel_hero.jpg", category: "bonfire" },
    { title: "Kumrat Deodar Pine Forest Trek", location: "Upper Dir", image: "/images/kumrat_katora_lake.jpg", category: "mountains" },
    { title: "Fairy Meadows Rustic Wooden Cabins", location: "Raikot", image: "/images/fairy_meadows.jpg", category: "mountains" },
  ];

  const filteredItems = filter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-28 pb-24">
      {/* Header */}
      <div className="bg-[#042c19] text-white py-12 sm:py-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden mb-8 sm:mb-12">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#059669]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-2.5 sm:mb-3">
            Moments From The Road
          </h1>
          <p className="text-slate-300 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
            Unfiltered captures from our mountain expeditions, road trips, starry campfire jams, and summit celebrations across Pakistan.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2">
          {[
            { id: "all", label: "All Moments" },
            { id: "mountains", label: "Peaks & Meadows" },
            { id: "lakes", label: "Turquoise Lakes" },
            { id: "bonfire", label: "Campfires & Jams" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wide transition-all ${
                filter === tab.id
                  ? "bg-[#059669] text-white shadow-md"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(item)}
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer bg-slate-900 border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                  <Eye className="w-4 h-4" />
                </div>
              </div>

              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="flex items-center gap-1.5 text-xs text-[#34d399] font-bold mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{item.location}</span>
                </div>
                <h3 className="font-extrabold text-base leading-tight">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram / WhatsApp Community CTA */}
        <div className="mt-16 bg-gradient-to-r from-[#074125] to-[#042c19] rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden">
          <h3 className="text-2xl sm:text-3xl font-black mb-3">Tag Us in Your Adventures</h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-6">
            Tag @{config.shortName.toLowerCase()}pakistan on Instagram to get featured on our community wall and win exciting merchandise!
          </p>
          <Link
            href={config.socials.instagram}
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#059669] hover:bg-[#047857] text-white font-extrabold text-sm shadow-xl transition-all"
          >
            Follow on Instagram
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-slate-950 rounded-3xl overflow-hidden border border-white/20 shadow-2xl"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative aspect-[16/10] w-full bg-black">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
            </div>

            <div className="p-6 bg-[#042c19] flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-white">{selectedImage.title}</h3>
                <div className="flex items-center gap-1 text-sm text-[#34d399]">
                  <MapPin className="w-4 h-4" />
                  <span>{selectedImage.location}</span>
                </div>
              </div>

              <Link
                href="/packages"
                className="px-5 py-2.5 rounded-full bg-[#059669] hover:bg-[#047857] text-white font-bold text-xs uppercase"
              >
                Join Next Trip
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
