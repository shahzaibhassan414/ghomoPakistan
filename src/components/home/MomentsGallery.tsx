"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { config } from "@/config";
import { Camera, MapPin, X, ArrowRight, Eye } from "lucide-react";

export default function MomentsGallery() {
  const [selectedImage, setSelectedImage] = useState<{ title: string; location: string; image: string } | null>(null);

  return (
    <section className="py-14 sm:py-20 bg-[#021c10] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-5">
          <div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-2">
              Moments From The Road
            </h2>
            <p className="text-slate-300 text-xs sm:text-base max-w-xl">
              A glimpse beyond the itinerary — mountain summits, shared laughs, starry bonfires, and lifelong bonds made along the road.
            </p>
          </div>

          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-sm font-extrabold text-[#34d399] hover:text-[#10b981] transition-colors"
          >
            <span>View Full Community Wall</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {config.galleryMoments.map((moment, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(moment)}
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer bg-slate-800 border border-white/10 hover:border-[#059669]/60 shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <Image
                src={moment.image}
                alt={moment.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                  <Eye className="w-4 h-4" />
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center gap-1.5 text-xs text-[#34d399] font-bold mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{moment.location}</span>
                </div>
                <h3 className="font-extrabold text-sm sm:text-base leading-tight">
                  {moment.title}
                </h3>
              </div>
            </div>
          ))}
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
    </section>
  );
}
