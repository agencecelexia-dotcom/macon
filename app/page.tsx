import { HeroSection } from "@/components/sections/HeroSection";
import { ReassuranceBar } from "@/components/sections/ReassuranceBar";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";
import { CTABanner } from "@/components/sections/CTABanner";
import { BeforeAfterSlider } from "@/components/sections/BeforeAfterSlider";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
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
        <ScrollReveal>
          <SectionTitle
            title="Nos services de maçonnerie"
            subtitle="De la construction neuve à la rénovation, nous intervenons sur tous vos projets de maçonnerie avec expertise et professionnalisme."
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ScrollReveal key={service.id} delay={i * 0.1}>
              <ServiceCard service={service} />
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      {/* Réalisations */}
      <SectionWrapper id="realisations" background="neutral">
        <ScrollReveal>
          <SectionTitle
            title="Nos réalisations"
            subtitle="Découvrez nos chantiers récents et la qualité de notre travail à travers nos photos avant/après."
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredPortfolio.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 0.1}>
              <div>
                <BeforeAfterSlider
                  beforeImage={item.imageBefore}
                  afterImage={item.imageAfter}
                  beforeAlt={`${item.title} — Avant`}
                  afterAlt={`${item.title} — Après`}
                />
                <h3 className="font-bold text-primary mt-4 mb-1 tracking-tight">{item.title}</h3>
                <p className="text-sm text-neutral-400">{item.location} — {item.duration}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal>
          <div className="text-center">
            <Button href="/realisations" variant="outline">
              Voir toutes nos réalisations
            </Button>
          </div>
        </ScrollReveal>
      </SectionWrapper>

      {/* Témoignages */}
      <SectionWrapper id="temoignages">
        <ScrollReveal>
          <SectionTitle
            title="Ce que disent nos clients"
            subtitle="La satisfaction de nos clients est notre meilleure carte de visite."
          />
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <TestimonialCarousel />
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <div className="text-center mt-12">
            <Button href="/avis-clients" variant="outline">
              Voir tous les avis
            </Button>
          </div>
        </ScrollReveal>
      </SectionWrapper>

      {/* CTA */}
      <CTABanner />
    </>
  );
}
