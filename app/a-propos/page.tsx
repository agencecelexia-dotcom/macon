import type { Metadata } from "next";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CTABanner } from "@/components/sections/CTABanner";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { company } from "@/lib/data/company";
import {
  Shield,
  Users,
  Eye,
  ThumbsUp,
  Award,
  Leaf,
  CheckCircle,
  Hammer,
} from "lucide-react";

export const metadata: Metadata = {
  title: "À Propos | Notre Entreprise de Maçonnerie",
  description: `Découvrez ${company.name}, entreprise de maçonnerie fondée en ${company.yearFounded}. ${company.yearsExperience} ans d'expérience, ${company.projectsCompleted}+ projets réalisés. Qualité, proximité et transparence.`,
};

const values = [
  {
    icon: CheckCircle,
    title: "Qualité",
    description:
      "Nous utilisons des matériaux de premier choix et appliquons les techniques les plus rigoureuses pour garantir la durabilité de chaque ouvrage.",
  },
  {
    icon: Users,
    title: "Proximité",
    description:
      "Artisan local, nous connaissons parfaitement les spécificités de notre région et restons disponibles et réactifs pour chaque client.",
  },
  {
    icon: Eye,
    title: "Transparence",
    description:
      "Devis détaillés, suivi de chantier régulier, communication claire. Pas de mauvaise surprise, vous savez exactement où en est votre projet.",
  },
  {
    icon: ThumbsUp,
    title: "Fiabilité",
    description:
      "Respect des délais, des engagements et du budget. Notre réputation repose sur la confiance que nos clients nous accordent.",
  },
];

const certifications = [
  {
    icon: Shield,
    title: "Garantie Décennale",
    description:
      "Assurance décennale couvrant tous nos travaux pendant 10 ans après réception du chantier.",
  },
  {
    icon: Leaf,
    title: "RGE",
    description:
      "Reconnu Garant de l'Environnement, qualification attestant de notre compétence en matière d'efficacité énergétique.",
  },
  {
    icon: Award,
    title: "Qualibat",
    description:
      "Certification Qualibat attestant de notre capacité technique, de nos moyens humains et financiers.",
  },
];

const teamMembers = [
  {
    name: "Philippe Durand",
    role: "Fondateur & Gérant",
    description:
      "Plus de 20 ans d'expérience dans la maçonnerie. Passionné par son métier et le travail bien fait.",
  },
  {
    name: "Sébastien Morel",
    role: "Chef de Chantier",
    description:
      "Spécialiste de la construction neuve et des fondations. Encadre les équipes sur le terrain.",
  },
  {
    name: "Julien Perrin",
    role: "Maçon Qualifié",
    description:
      "Expert en rénovation et travaux de pierre. Maîtrise les techniques traditionnelles et modernes.",
  },
];

export default function AProposPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-800 to-primary-700" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(230,126,34,0.12),transparent_60%)]" />
        <div className="absolute inset-0 grain overflow-hidden" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5 tracking-tight">
            À propos de {company.name}
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
            Une entreprise de maçonnerie fondée sur l&apos;excellence, la
            proximité et la confiance depuis {company.yearFounded}.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <SectionTitle
              title="Notre histoire"
              subtitle="Une passion transmise de génération en génération."
              align="left"
            />
            <div className="space-y-4 text-neutral-600 leading-relaxed">
              <p>
                Fondée en <strong>{company.yearFounded}</strong>,{" "}
                {company.name} est née de la passion d&apos;un artisan pour le
                métier de maçon. Depuis plus de{" "}
                <strong>{company.yearsExperience} ans</strong>, nous mettons
                notre savoir-faire au service des particuliers et des
                professionnels de la région {company.address.region}.
              </p>
              <p>
                Notre mission est simple : réaliser vos projets de construction,
                rénovation et extension avec la plus grande exigence de qualité,
                tout en respectant vos délais et votre budget. Chaque chantier
                est unique, et nous y apportons une attention personnalisée.
              </p>
              <p>
                Avec plus de{" "}
                <strong>{company.projectsCompleted} projets réalisés</strong> et{" "}
                <strong>{company.clientsSatisfied} clients satisfaits</strong>,
                notre réputation s&apos;est construite sur la confiance et le
                bouche-à-oreille. Nous en sommes fiers.
              </p>
            </div>
          </ScrollReveal>
          {/* Image placeholder */}
          <ScrollReveal direction="right" delay={0.15}>
            <div className="aspect-[4/3] bg-neutral-50 rounded-2xl flex items-center justify-center text-neutral-400 text-sm border border-neutral-100 shadow-premium">
              <div className="text-center">
                <Hammer size={48} className="mx-auto mb-3 text-neutral-300" />
                <p>Photo de l&apos;équipe / du chantier</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper background="neutral">
        <ScrollReveal>
          <SectionTitle
            title="Nos valeurs"
            subtitle="Les principes qui guident chacune de nos interventions."
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, i) => (
            <ScrollReveal key={value.title} delay={i * 0.08}>
              <div className="bg-white rounded-2xl p-6 text-center shadow-premium border border-neutral-100 hover:shadow-premium-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 text-accent flex items-center justify-center mx-auto mb-4 border border-accent/10">
                  <value.icon size={24} />
                </div>
                <h3 className="font-bold text-primary text-lg mb-2 tracking-tight">
                  {value.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      {/* Team */}
      <SectionWrapper>
        <ScrollReveal>
          <SectionTitle
            title="Notre équipe"
            subtitle="Des professionnels passionnés à votre service."
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 0.1}>
              <div className="text-center">
                {/* Photo placeholder */}
                <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 border-2 border-primary/5 mx-auto mb-5 flex items-center justify-center text-primary-300 shadow-premium">
                  <Users size={36} />
                </div>
                <h3 className="font-bold text-primary text-lg tracking-tight">{member.name}</h3>
                <p className="text-accent font-semibold text-sm mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-neutral-500 max-w-xs mx-auto leading-relaxed">
                  {member.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      {/* Certifications */}
      <SectionWrapper background="neutral">
        <ScrollReveal>
          <SectionTitle
            title="Nos certifications"
            subtitle="Des qualifications reconnues pour votre tranquillité d'esprit."
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, i) => (
            <ScrollReveal key={cert.title} delay={i * 0.1}>
              <div className="bg-white rounded-2xl p-8 text-center shadow-premium border border-neutral-100 hover:shadow-premium-lg transition-shadow duration-300">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary flex items-center justify-center mx-auto mb-4 border border-primary/10">
                  <cert.icon size={28} />
                </div>
                <h3 className="font-bold text-primary text-lg mb-2 tracking-tight">
                  {cert.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <CTABanner
        title="Envie de travailler avec nous ?"
        subtitle="Contactez-nous pour discuter de votre projet. Devis gratuit et sans engagement."
      />
    </>
  );
}
