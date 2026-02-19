import type { Metadata } from "next";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { CTABanner } from "@/components/sections/CTABanner";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Nos Services de Maçonnerie",
  description:
    "Découvrez nos services de maçonnerie : construction neuve, rénovation, extension et surélévation. Artisan qualifié, garantie décennale. Devis gratuit sous 48h.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-primary-800 to-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Nos services de maçonnerie
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            De la construction neuve à la rénovation en passant par l&apos;extension,
            nous réalisons tous vos projets de maçonnerie avec expertise.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <SectionWrapper>
        <SectionTitle
          title="Nos prestations"
          subtitle="Chaque projet est unique. Nous adaptons nos interventions à vos besoins spécifiques."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </SectionWrapper>

      <CTABanner />
    </>
  );
}
