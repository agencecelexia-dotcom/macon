export interface FAQ {
  question: string;
  answer: string;
}

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  image: string;
  features: ServiceFeature[];
  process: ProcessStep[];
  faqs: FAQ[];
  seoTitle: string;
  seoDescription: string;
}

export const services: Service[] = [
  {
    id: "construction-neuve",
    slug: "construction-neuve",
    title: "Construction Neuve",
    shortDescription: "Construction de maisons individuelles et bâtiments, du terrassement aux finitions gros œuvre.",
    longDescription: "Nous prenons en charge l'intégralité du gros œuvre pour vos projets de construction neuve. De la réalisation des fondations à la pose de la charpente, notre équipe expérimentée garantit une construction solide, conforme aux normes en vigueur et adaptée à vos besoins.",
    icon: "Building2",
    image: "/images/services/construction-neuve.jpg",
    features: [
      { title: "Fondations et terrassement", description: "Préparation du terrain et coulage des fondations adaptées à votre sol." },
      { title: "Élévation des murs", description: "Construction en parpaing, brique ou pierre selon votre projet." },
      { title: "Dalles et planchers", description: "Réalisation de dalles béton et planchers pour tous niveaux." },
      { title: "Charpente et toiture", description: "Pose de charpente traditionnelle ou fermette, couverture complète." },
    ],
    process: [
      { step: 1, title: "Étude du projet", description: "Visite sur site, analyse des plans et devis détaillé gratuit." },
      { step: 2, title: "Préparation du terrain", description: "Terrassement, fondations et mise en conformité du sol." },
      { step: 3, title: "Gros œuvre", description: "Élévation des murs, dalles, planchers et charpente." },
      { step: 4, title: "Réception", description: "Vérification de conformité et remise des clés." },
    ],
    faqs: [
      { question: "Combien de temps dure une construction neuve ?", answer: "En moyenne 8 à 12 mois selon la complexité du projet et les conditions météorologiques." },
      { question: "Quelles garanties proposez-vous ?", answer: "Nous offrons une garantie décennale couvrant tous les dommages structurels pendant 10 ans après livraison." },
      { question: "Travaillez-vous avec des architectes ?", answer: "Oui, nous collaborons régulièrement avec des architectes et bureaux d'études pour les projets nécessitant un permis de construire." },
    ],
    seoTitle: "Construction Neuve à Lyon | Maçonnerie Durand",
    seoDescription: "Construction de maison neuve à Lyon et environs. Fondations, gros œuvre, murs porteurs. Artisan maçon qualifié, garantie décennale. Devis gratuit sous 48h.",
  },
  {
    id: "renovation-maconnerie",
    slug: "renovation-maconnerie",
    title: "Rénovation",
    shortDescription: "Rénovation de façades, murs porteurs, joints et structures anciennes pour redonner vie à votre bâti.",
    longDescription: "La rénovation en maçonnerie demande un savoir-faire spécifique pour respecter le bâti existant tout en le modernisant. Nous intervenons sur tous types de rénovation : ravalement de façade, reprise de murs porteurs, réfection des joints et consolidation des structures.",
    icon: "Hammer",
    image: "/images/services/renovation.jpg",
    features: [
      { title: "Ravalement de façade", description: "Nettoyage, réparation et embellissement de vos façades extérieures." },
      { title: "Reprise de murs porteurs", description: "Ouverture, renforcement ou démolition partielle en toute sécurité." },
      { title: "Réfection des joints", description: "Rejointoiement en pierre, brique ou parpaing pour étanchéité et esthétique." },
      { title: "Consolidation structurelle", description: "Renforcement des fondations et structures fragilisées par le temps." },
    ],
    process: [
      { step: 1, title: "Diagnostic", description: "Évaluation de l'état du bâti et identification des travaux nécessaires." },
      { step: 2, title: "Proposition technique", description: "Devis détaillé avec solutions adaptées et planning prévisionnel." },
      { step: 3, title: "Travaux de rénovation", description: "Intervention soignée dans le respect du bâti existant." },
      { step: 4, title: "Finitions et nettoyage", description: "Finitions soignées et nettoyage complet du chantier." },
    ],
    faqs: [
      { question: "Faut-il un permis pour rénover une façade ?", answer: "Un ravalement de façade nécessite généralement une déclaration préalable de travaux auprès de votre mairie." },
      { question: "Peut-on ouvrir un mur porteur ?", answer: "Oui, avec une étude structurelle préalable par un bureau d'études. Nous posons des IPN ou poutres de renfort adaptées." },
      { question: "Quel est le coût moyen d'une rénovation de façade ?", answer: "Le prix varie de 30 à 100 €/m² selon l'état de la façade, le type de traitement et la hauteur du bâtiment." },
    ],
    seoTitle: "Rénovation Maçonnerie à Lyon | Maçonnerie Durand",
    seoDescription: "Rénovation maçonnerie à Lyon. Ravalement façade, murs porteurs, joints, consolidation. Artisan qualifié, devis gratuit sous 48h.",
  },
  {
    id: "extension-surelevation",
    slug: "extension-surelevation",
    title: "Extension & Surélévation",
    shortDescription: "Agrandissez votre maison avec une extension au sol ou une surélévation pour gagner en surface habitable.",
    longDescription: "Besoin de plus d'espace ? L'extension ou la surélévation de votre maison est souvent la solution la plus économique et la plus rapide par rapport à un déménagement. Nous réalisons tous types d'agrandissements, de la simple véranda maçonnée à la surélévation complète d'un étage.",
    icon: "Maximize2",
    image: "/images/services/extension.jpg",
    features: [
      { title: "Extension latérale", description: "Agrandissement au sol avec raccordement parfait à l'existant." },
      { title: "Surélévation", description: "Ajout d'un étage complet ou partiel sur votre maison existante." },
      { title: "Aménagement de combles", description: "Transformation de combles perdus en espace habitable." },
      { title: "Véranda maçonnée", description: "Construction de véranda en dur, intégrée à votre habitation." },
    ],
    process: [
      { step: 1, title: "Faisabilité", description: "Étude de faisabilité technique et vérification du PLU de votre commune." },
      { step: 2, title: "Conception", description: "Plans détaillés en collaboration avec un architecte si nécessaire." },
      { step: 3, title: "Construction", description: "Travaux de gros œuvre et raccordement à la structure existante." },
      { step: 4, title: "Livraison", description: "Finitions gros œuvre, vérification étanchéité et réception." },
    ],
    faqs: [
      { question: "Faut-il un permis de construire pour une extension ?", answer: "Une extension de moins de 20 m² (ou 40 m² en zone urbaine avec PLU) nécessite une simple déclaration préalable. Au-delà, un permis de construire est requis." },
      { question: "Peut-on surélever n'importe quelle maison ?", answer: "Non, il faut vérifier que les fondations et la structure existante peuvent supporter le poids supplémentaire. Une étude structurelle est indispensable." },
      { question: "Combien coûte une extension de maison ?", answer: "Le coût varie de 1 200 à 2 500 €/m² selon le type d'extension, les matériaux choisis et la complexité du projet." },
    ],
    seoTitle: "Extension & Surélévation Maison à Lyon | Maçonnerie Durand",
    seoDescription: "Extension et surélévation de maison à Lyon. Agrandissement, aménagement combles, véranda. Artisan maçon qualifié. Devis gratuit.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
