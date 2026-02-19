"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/data/testimonials";
import { StarRating } from "@/components/ui/StarRating";
import { Card, CardContent } from "@/components/ui/Card";

export function TestimonialCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 340;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      {/* Scroll buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 hidden md:flex w-10 h-10 bg-white shadow-md rounded-full items-center justify-center hover:bg-neutral-50 transition-colors cursor-pointer"
        aria-label="Avis précédent"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 hidden md:flex w-10 h-10 bg-white shadow-md rounded-full items-center justify-center hover:bg-neutral-50 transition-colors cursor-pointer"
        aria-label="Avis suivant"
      >
        <ChevronRight size={20} />
      </button>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory pb-4 -mx-4 px-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {testimonials.map((t) => (
          <Card
            key={t.id}
            className="min-w-[300px] max-w-[340px] snap-start shrink-0"
            hover={false}
          >
            <CardContent>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                  <span className="text-accent font-bold text-sm">{t.initials}</span>
                </div>
                <div>
                  <p className="font-semibold text-sm text-primary">{t.name}</p>
                  <p className="text-xs text-neutral-500">{t.location}</p>
                </div>
              </div>
              <StarRating rating={t.rating} size={16} className="mb-3" />
              <p className="text-sm text-neutral-600 leading-relaxed line-clamp-4">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="text-xs text-neutral-400 mt-3">{t.projectType}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
