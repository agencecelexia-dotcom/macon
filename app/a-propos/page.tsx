import type { Metadata } from "next";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CTABanner } from "@/components/sections/CTABanner";
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
    name: "[Prénom Nom]",
    role: "Fondateur & Gérant",
    description:
      "Plus de 20 ans d'expérience dans la maçonnerie. Passionné par son métier et le travail bien fait.",
  },
  {
    name: "[Prénom Nom]",
    role: "Chef de Chantier",
    description:
      "Spécialiste de la construction neuve et des fondations. Encadre les équipes sur le terrain.",
  },
  {
    name: "[Prénom Nom]",
    role: "Maçon Qualifié",
    description:
      "Expert en rénovation et travaux de pierre. Maîtrise les techniques traditionnelles et modernes.",
  },
];

export default function AProposPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-primary-800 to-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            À propos de {company.name}
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Une entreprise de maçonnerie fondée sur l&apos;excellence, la
            proximité et la confiance depuis {company.yearFounded}.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
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
          </div>
          {/* Image placeholder */}
          <div className="aspect-[4/3] bg-neutral-100 rounded-xl flex items-center justify-center text-neutral-400 text-sm border border-neutral-200">
            <div className="text-center">
              <Hammer size={48} className="mx-auto mb-3 text-neutral-300" />
              <p>Photo de l&apos;équipe / du chantier</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper background="neutral">
        <SectionTitle
          title="Nos valeurs"
          subtitle="Les principes qui guident chacune de nos interventions."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-white rounded-xl p-6 text-center shadow-sm border border-neutral-200 hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto mb-4">
                <value.icon size={28} />
              </div>
              <h3 className="font-bold text-primary text-lg mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Team */}
      <SectionWrapper>
        <SectionTitle
          title="Notre équipe"
          subtitle="Des professionnels passionnés à votre service."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center">
              {/* Photo placeholder */}
              <div className="w-32 h-32 rounded-full bg-neutral-100 border-4 border-primary/10 mx-auto mb-4 flex items-center justify-center text-neutral-400">
                <Users size={40} />
              </div>
              <h3 className="font-bold text-primary text-lg">{member.name}</h3>
              <p className="text-accent font-medium text-sm mb-2">
                {member.role}
              </p>
              <p className="text-sm text-neutral-500 max-w-xs mx-auto">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Certifications */}
      <SectionWrapper background="neutral">
        <SectionTitle
          title="Nos certifications"
          subtitle="Des qualifications reconnues pour votre tranquillité d'esprit."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="bg-white rounded-xl p-8 text-center shadow-sm border border-neutral-200"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                <cert.icon size={32} />
              </div>
              <h3 className="font-bold text-primary text-lg mb-2">
                {cert.title}
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                {cert.description}
              </p>
            </div>
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
