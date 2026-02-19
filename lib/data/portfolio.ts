export type PortfolioCategory = "construction" | "renovation" | "extension";

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: PortfolioCategory;
  location: string;
  year: number;
  imageBefore: string;
  imageAfter: string;
  images: string[];
  duration: string;
  surface?: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "maison-plain-pied",
    title: "Maison plain-pied 120m²",
    description: "Construction complète d'une maison plain-pied avec garage intégré. Fondations, gros œuvre, charpente traditionnelle et couverture tuiles.",
    category: "construction",
    location: "Écully (69)",
    year: 2025,
    imageBefore: "/images/portfolio/maison-plainpied-avant.jpg",
    imageAfter: "/images/portfolio/maison-plainpied-apres.jpg",
    images: [
      "/images/portfolio/maison-plainpied-1.jpg",
      "/images/portfolio/maison-plainpied-2.jpg",
    ],
    duration: "10 mois",
    surface: "120 m²",
  },
  {
    id: "ravalement-facade",
    title: "Ravalement façade maison ancienne",
    description: "Ravalement complet d'une façade en pierre avec rejointoiement, traitement anti-humidité et enduit de finition.",
    category: "renovation",
    location: "Lyon 3e",
    year: 2025,
    imageBefore: "/images/portfolio/facade-avant.jpg",
    imageAfter: "/images/portfolio/facade-apres.jpg",
    images: [
      "/images/portfolio/facade-1.jpg",
      "/images/portfolio/facade-2.jpg",
    ],
    duration: "3 semaines",
    surface: "85 m²",
  },
  {
    id: "extension-laterale",
    title: "Extension latérale 35m²",
    description: "Extension d'une maison existante pour créer une suite parentale avec salle de bain. Raccordement parfait à la toiture existante.",
    category: "extension",
    location: "Caluire-et-Cuire (69)",
    year: 2024,
    imageBefore: "/images/portfolio/extension-avant.jpg",
    imageAfter: "/images/portfolio/extension-apres.jpg",
    images: [
      "/images/portfolio/extension-1.jpg",
      "/images/portfolio/extension-2.jpg",
    ],
    duration: "4 mois",
    surface: "35 m²",
  },
  {
    id: "surelevation-etage",
    title: "Surélévation d'un étage complet",
    description: "Ajout d'un étage complet sur une maison de plain-pied. Étude structurelle, renforcement des fondations et construction de l'étage.",
    category: "extension",
    location: "Villeurbanne (69)",
    year: 2024,
    imageBefore: "/images/portfolio/surelevation-avant.jpg",
    imageAfter: "/images/portfolio/surelevation-apres.jpg",
    images: [
      "/images/portfolio/surelevation-1.jpg",
      "/images/portfolio/surelevation-2.jpg",
    ],
    duration: "6 mois",
    surface: "70 m²",
  },
  {
    id: "mur-porteur",
    title: "Ouverture mur porteur + IPN",
    description: "Création d'une grande ouverture dans un mur porteur avec pose d'un IPN pour ouvrir cuisine et salon.",
    category: "renovation",
    location: "Lyon 7e",
    year: 2025,
    imageBefore: "/images/portfolio/mur-porteur-avant.jpg",
    imageAfter: "/images/portfolio/mur-porteur-apres.jpg",
    images: [
      "/images/portfolio/mur-porteur-1.jpg",
    ],
    duration: "1 semaine",
  },
  {
    id: "construction-garage",
    title: "Construction garage double",
    description: "Construction d'un garage double indépendant avec dalle béton, murs en parpaing et toiture deux pentes.",
    category: "construction",
    location: "Tassin-la-Demi-Lune (69)",
    year: 2024,
    imageBefore: "/images/portfolio/garage-avant.jpg",
    imageAfter: "/images/portfolio/garage-apres.jpg",
    images: [
      "/images/portfolio/garage-1.jpg",
    ],
    duration: "2 mois",
    surface: "40 m²",
  },
];

export const portfolioCategories: { value: PortfolioCategory | "all"; label: string }[] = [
  { value: "all", label: "Tous les projets" },
  { value: "construction", label: "Construction" },
  { value: "renovation", label: "Rénovation" },
  { value: "extension", label: "Extension" },
];
