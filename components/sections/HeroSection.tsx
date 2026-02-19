"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Phone, Star, ChevronDown } from "lucide-react";
import { company } from "@/lib/data/company";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  showBadges?: boolean;
}

export function HeroSection({
  title = `Votre maçon de confiance à ${company.address.city}`,
  subtitle = "Construction, rénovation, extension — Devis gratuit sous 48h",
  showBadges = true,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-800 to-primary-700" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(230,126,34,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(44,62,80,0.4),transparent_60%)]" />

      {/* Grain texture */}
      <div className="absolute inset-0 grain overflow-hidden" />

      {/* Decorative grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating accent orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/6 w-64 h-64 bg-accent/5 rounded-full blur-2xl" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white pt-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm text-white/90 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            {company.yearsExperience}+ ans d&apos;expérience à Lyon et environs
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {title.split("Lyon").map((part, i, arr) =>
            i < arr.length - 1 ? (
              <span key={i}>
                {part}
                <span className="gradient-text">Lyon</span>
              </span>
            ) : (
              <span key={i}>{part}</span>
            )
          )}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-white/70 mb-12 max-w-2xl mx-auto font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Button href="/contact" variant="accent" size="lg" className="shadow-accent-glow" data-track="hero-devis">
            Demander un devis gratuit
          </Button>
          <Button
            href={`tel:${company.phoneRaw}`}
            variant="outline"
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
            data-track="hero-appel"
          >
            <Phone size={20} className="mr-2" />
            Appelez-nous
          </Button>
        </motion.div>

        {/* Trust badges */}
        {showBadges && (
          <motion.div
            className="flex flex-wrap justify-center gap-4 md:gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {[
              { label: "Assurance décennale" },
              { label: "Garantie satisfaction" },
              { label: `${company.googleRating}/5 — ${company.googleReviewCount} avis`, icon: true },
            ].map((badge) => (
              <span
                key={badge.label}
                className="flex items-center gap-2 text-sm text-white/60 px-4 py-2 rounded-full border border-white/10 bg-white/5"
              >
                {badge.icon ? (
                  <Star size={14} className="fill-accent text-accent" />
                ) : (
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                )}
                {badge.label}
              </span>
            ))}
          </motion.div>
        )}
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={24} className="text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
