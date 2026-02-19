import { HeroSection } from "@/components/sections/HeroSection";
import { ReassuranceBar } from "@/components/sections/ReassuranceBar";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";
import { CTABanner } from "@/components/sections/CTABanner";
import { BeforeAfterSlider } from "@/components/sections/BeforeAfterSlider";
import { Button } from "@/components/ui/Button";
import { services } from "@/lib/data/services";
import { portfolioItems } from "@/lib/data/portfolio";

export default function Home() {
  const featuredPortfolio = portfolioItems.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* Réassurance */}
      <ReassuranceBar />

      {/* Services */}
      <SectionWrapper id="services">
        <SectionTitle
          title="Nos services de maçonnerie"
          subtitle="De la construction neuve à la rénovation, nous intervenons sur tous vos projets de maçonnerie avec expertise et professionnalisme."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </SectionWrapper>

      {/* Réalisations */}
      <SectionWrapper id="realisations" background="neutral">
        <SectionTitle
          title="Nos réalisations"
          subtitle="Découvrez nos chantiers récents et la qualité de notre travail à travers nos photos avant/après."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {featuredPortfolio.map((item) => (
            <div key={item.id}>
              <BeforeAfterSlider
                beforeImage={item.imageBefore}
                afterImage={item.imageAfter}
                beforeAlt={`${item.title} — Avant`}
                afterAlt={`${item.title} — Après`}
              />
              <h3 className="font-bold text-primary mt-4 mb-1">{item.title}</h3>
              <p className="text-sm text-neutral-500">{item.location} — {item.duration}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button href="/realisations" variant="outline">
            Voir toutes nos réalisations
          </Button>
        </div>
      </SectionWrapper>

      {/* Témoignages */}
      <SectionWrapper id="temoignages">
        <SectionTitle
          title="Ce que disent nos clients"
          subtitle="La satisfaction de nos clients est notre meilleure carte de visite."
        />
        <TestimonialCarousel />
        <div className="text-center mt-10">
          <Button href="/avis-clients" variant="outline">
            Voir tous les avis
          </Button>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <CTABanner />
    </>
  );
}
