"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Phone, ArrowRight } from "lucide-react";
import { company } from "@/lib/data/company";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
}

export function CTABanner({
  title = "Prêt à lancer votre projet ?",
  subtitle = "Contactez-nous dès maintenant pour un devis gratuit et personnalisé. Réponse sous 48h garantie.",
}: CTABannerProps) {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-800 to-primary-700" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(230,126,34,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(230,126,34,0.08),transparent_50%)]" />

      {/* Grain texture */}
      <div className="absolute inset-0 grain overflow-hidden" />

      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating orbs */}
      <div className="absolute top-1/3 right-1/6 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-accent/5 rounded-full blur-2xl" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="divider-accent mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-5 tracking-tight">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-white/60 mb-12 max-w-xl mx-auto font-light leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Button href="/contact" variant="accent" size="lg" className="shadow-accent-glow">
            Demander un devis gratuit
            <ArrowRight size={18} className="ml-2" />
          </Button>
          <Button
            href={`tel:${company.phoneRaw}`}
            variant="outline"
            size="lg"
            className="border-white/20 text-white hover:bg-white/10 hover:border-white/40"
          >
            <Phone size={18} className="mr-2" />
            {company.phone}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
