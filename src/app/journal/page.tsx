"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Calendar, ArrowRight, BookOpen } from "lucide-react";

export default function JournalPage() {
  const posts = [
    {
      id: 1,
      title: "The Magic of Autumn in Hunza & Passu",
      excerpt: "When the golden apricot leaves turn fiery amber and red, Hunza transforms into an artist's dream. Here is what it's like to witness peak autumn in northern Pakistan.",
      date: "October 15, 2024",
      readTime: "4 min read",
      image: "/images/hunza_passu.jpg",
      category: "Destination Guides",
    },
    {
      id: 2,
      title: "A Complete Beginner's Guide to Trekking Fairy Meadows",
      excerpt: "From the world's most thrilling jeep trail to the reflection pool of Nanga Parbat, everything you need to know before packing your backpack.",
      date: "August 22, 2024",
      readTime: "6 min read",
      image: "/images/fairy_meadows.jpg",
      category: "Trekking Tips",
    },
    {
      id: 3,
      title: "Exploring the Secret Alpine Lakes & Deserts of Skardu",
      excerpt: "Beyond Shangrila and Upper Kachura, Baltistan hides pristine turquoise pools and high-altitude sand dunes that only a few venture to experience.",
      date: "July 10, 2024",
      readTime: "5 min read",
      image: "/images/skardu_valley.jpg",
      category: "Road Stories",
    },
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-28 pb-24">
      {/* Header */}
      <div className="bg-[#042c19] text-white py-12 sm:py-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden mb-8 sm:mb-12 border-b border-emerald-900/30">
        <div className="absolute -right-20 -top-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-2.5 sm:mb-3">
            The Wanderer&apos;s Journal
          </h1>
          <p className="text-emerald-100/80 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
            Stories, mountain guides, photography tips, and inspiration from our journeys across the most breathtaking landscapes on earth.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 hover:border-emerald-500/40 shadow-md hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1.5"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-[#059669] text-white text-[11px] font-extrabold uppercase tracking-wider shadow-md">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-slate-400 font-bold mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#059669]" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-black text-slate-900 group-hover:text-[#074125] transition-colors leading-snug mb-3">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#074125] group-hover:text-[#059669]">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
