import { Button } from "@/components/ui/Button";
import { Phone, Star } from "lucide-react";
import { company } from "@/lib/data/company";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  showBadges?: boolean;
}

export function HeroSection({
  title = `Votre maçon de confiance à ${company.address.city} et environs`,
  subtitle = "Construction, rénovation, extension — Devis gratuit sous 48h",
  showBadges = true,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-800 to-primary" />
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white pt-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
          {title}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
          {subtitle}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button href="/contact" variant="accent" size="lg">
            Demander un devis gratuit
          </Button>
          <Button
            href={`tel:${company.phoneRaw}`}
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-primary"
          >
            <Phone size={20} className="mr-2" />
            Appelez-nous
          </Button>
        </div>

        {/* Trust badges */}
        {showBadges && (
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/80">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full" />
              Assurance décennale
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full" />
              Garantie satisfaction
            </span>
            <span className="flex items-center gap-2">
              <Star size={14} className="fill-accent text-accent" />
              {company.googleRating}/5 — {company.googleReviewCount} avis Google
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
