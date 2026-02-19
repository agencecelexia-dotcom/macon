import type { Metadata } from "next";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";

export const metadata: Metadata = {
  title: "Nos Réalisations | Photos Avant/Après",
  description:
    "Découvrez nos réalisations en maçonnerie : construction neuve, rénovation, extension. Photos avant/après de nos chantiers récents. Qualité et savoir-faire.",
};

export default function RealisationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-primary-800 to-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Nos réalisations
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Découvrez nos chantiers récents et la qualité de notre travail à
            travers nos photos avant/après.
          </p>
        </div>
      </section>

      {/* Portfolio Grid with Filters */}
      <SectionWrapper>
        <PortfolioGrid />
      </SectionWrapper>
    </>
  );
}
