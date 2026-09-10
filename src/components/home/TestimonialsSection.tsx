"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { config } from "@/config";
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle, Sparkles, Heart } from "lucide-react";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [itemsVisible, setItemsVisible] = useState(3);
  
  // Touch swipe handling
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Update visible items count based on window width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsVisible(1);
      } else if (window.innerWidth < 1024) {
        setItemsVisible(2);
      } else {
        setItemsVisible(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalItems = config.testimonials.length;
  const maxIndex = Math.max(0, totalItems - itemsVisible);

  const prev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1));
  }, [maxIndex]);

  const next = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  }, [maxIndex]);

  // Autoplay functionality with pause on hover
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      next();
    }, 4500);

    return () => clearInterval(interval);
  }, [next, isHovered]);

  // Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45;

    if (distance > minSwipeDistance) {
      next();
    } else if (distance < -minSwipeDistance) {
      prev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section 
      className="py-14 sm:py-24 bg-gradient-to-b from-[#f4fbf7] via-white to-[#f0fdf4] relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Decorative background blurs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#059669]/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#074125]/5 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#ecfdf5] text-[#074125] px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-wide uppercase mb-3 sm:mb-4 border border-[#059669]/20">
            <Sparkles className="w-4 h-4 text-[#059669]" />
            <span>Community Stories & Reviews</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#074125] tracking-tight mb-3 sm:mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed max-w-2xl mx-auto">
            Real stories from real wanderers. See what our travelers loved, laughed about, and remembered long after the journey ended.
          </p>

          {/* Rating counter pill */}
          <div className="mt-4 inline-flex items-center gap-2 text-xs sm:text-sm text-slate-700 bg-white border border-slate-200/80 px-4 py-1.5 rounded-full shadow-sm">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
              ))}
            </div>
            <span className="font-bold text-[#074125]">4.9 / 5.0</span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-600 font-medium">Over 8,500+ happy wanderers</span>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Outer Viewport */}
          <div 
            className="overflow-hidden py-4 -my-4 px-1"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Sliding Flex Track */}
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsVisible)}%)`,
              }}
            >
              {config.testimonials.map((item, idx) => (
                <div
                  key={idx}
                  className="shrink-0 px-2.5 sm:px-3.5"
                  style={{ width: `${100 / itemsVisible}%` }}
                >
                  <div className="bg-white h-full p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1">
                    {/* Floating Quote Badge */}
                    <div className="absolute -top-3 right-6 w-9 h-9 rounded-full bg-gradient-to-tr from-[#074125] to-[#059669] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <Quote className="w-4 h-4 fill-white" />
                    </div>

                    <div>
                      {/* Star Rating & Trip Tag */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <div className="flex items-center gap-1 text-amber-400">
                          {[...Array(item.rating || 5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400" />
                          ))}
                        </div>
                        <span className="text-[11px] font-bold text-[#074125] bg-[#ecfdf5] border border-[#059669]/20 px-2.5 py-0.5 rounded-full truncate max-w-[150px]">
                          {item.trip.split("—")[0].trim()}
                        </span>
                      </div>

                      {/* Content */}
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6 line-clamp-4 group-hover:text-slate-900 transition-colors">
                        &ldquo;{item.content}&rdquo;
                      </p>
                    </div>

                    {/* Author Profile */}
                    <div className="pt-4 border-t border-slate-100 flex items-center gap-3.5 mt-auto">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#059669] shrink-0 bg-slate-200 shadow-sm">
                        <Image
                          src={item.avatar}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-sm font-extrabold text-[#074125] flex items-center gap-1.5 truncate">
                          {item.name}
                          <CheckCircle className="w-3.5 h-3.5 text-[#059669] shrink-0" />
                        </h4>
                        <p className="text-[11px] text-slate-500 font-medium truncate">
                          {item.role}
                        </p>
                        <p className="text-[10px] text-slate-400 font-semibold truncate mt-0.5">
                          {item.trip}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrow Controls */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 text-[#074125] hover:bg-[#059669] hover:text-white hover:border-[#059669] shadow-lg flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#059669] z-20 hover:scale-105 active:scale-95"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 text-[#074125] hover:bg-[#059669] hover:text-white hover:border-[#059669] shadow-lg flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#059669] z-20 hover:scale-105 active:scale-95"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8 sm:mt-10">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
                currentIndex === idx
                  ? "w-8 bg-[#059669] shadow-md"
                  : "w-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
