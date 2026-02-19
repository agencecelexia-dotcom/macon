import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { CTABanner } from "@/components/sections/CTABanner";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { BeforeAfterSlider } from "@/components/sections/BeforeAfterSlider";
import { Building2, Hammer, Maximize2, Wrench, CheckCircle } from "lucide-react";
import { portfolioItems } from "@/lib/data/portfolio";
import type { Service } from "@/lib/data/services";
import Link from "next/link";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Building2,
  Hammer,
  Maximize2,
  Wrench,
};

interface ServicePageTemplateProps {
  service: Service;
}

export function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  const Icon = iconMap[service.icon] || Building2;
  const relatedProjects = portfolioItems.filter(
    (p) => p.category === service.id.split("-")[0] as string
  ).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-primary-800 to-primary overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white">{service.title}</span>
          </nav>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center">
              <Icon size={28} className="text-accent" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              {service.title}
            </h1>
          </div>
          <p className="text-lg text-white/80 max-w-2xl">
            {service.longDescription}
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="accent" size="lg">
              Demander un devis gratuit
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <SectionWrapper>
        <SectionTitle
          title="Ce que nous proposons"
          subtitle="Notre expertise couvre l'ensemble de vos besoins en maçonnerie."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {service.features.map((feature) => (
            <div key={feature.title} className="flex gap-4 p-6 rounded-xl bg-neutral-50">
              <CheckCircle size={24} className="text-accent shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-primary mb-1">{feature.title}</h3>
                <p className="text-sm text-neutral-500">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Process */}
      <SectionWrapper background="neutral">
        <SectionTitle
          title="Notre processus"
          subtitle="Un accompagnement structuré de A à Z pour votre projet."
        />
        <ProcessTimeline steps={service.process} />
      </SectionWrapper>

      {/* Related projects */}
      {relatedProjects.length > 0 && (
        <SectionWrapper>
          <SectionTitle
            title="Nos réalisations en images"
            subtitle="Découvrez nos projets récents dans ce domaine."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProjects.map((item) => (
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
          <div className="text-center mt-10">
            <Button href="/realisations" variant="outline">
              Voir toutes nos réalisations
            </Button>
          </div>
        </SectionWrapper>
      )}

      {/* FAQ */}
      <SectionWrapper background="neutral">
        <SectionTitle
          title="Questions fréquentes"
          subtitle={`Retrouvez les réponses aux questions les plus courantes sur nos services de ${service.title.toLowerCase()}.`}
        />
        <div className="max-w-3xl mx-auto">
          <FAQAccordion faqs={service.faqs} />
        </div>
      </SectionWrapper>

      {/* CTA */}
      <CTABanner
        title={`Prêt pour votre projet de ${service.title.toLowerCase()} ?`}
        subtitle="Contactez-nous dès maintenant pour un devis gratuit et personnalisé."
      />
    </>
  );
}
