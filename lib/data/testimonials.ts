export interface Testimonial {
  id: string;
  name: string;
  initials: string;
  location: string;
  rating: number;
  text: string;
  date: string;
  projectType: string;
  videoUrl?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Jean-Pierre M.",
    initials: "JP",
    location: "Écully (69)",
    rating: 5,
    text: "Excellent travail pour la construction de notre maison. Équipe sérieuse, délais respectés et finitions impeccables. Je recommande sans hésitation !",
    date: "2025-12-15",
    projectType: "Construction neuve",
  },
  {
    id: "2",
    name: "Marie L.",
    initials: "ML",
    location: "Lyon 3e",
    rating: 5,
    text: "Ravalement de façade réalisé avec beaucoup de soin. Le résultat est magnifique, notre maison a retrouvé une seconde jeunesse. Merci à toute l'équipe !",
    date: "2025-11-20",
    projectType: "Rénovation",
  },
  {
    id: "3",
    name: "Thomas D.",
    initials: "TD",
    location: "Villeurbanne (69)",
    rating: 5,
    text: "Extension de 30m² réalisée parfaitement. Le raccordement avec l'existant est invisible. Très professionnel du début à la fin.",
    date: "2025-10-08",
    projectType: "Extension",
  },
  {
    id: "4",
    name: "Sophie et Marc R.",
    initials: "SR",
    location: "Lyon 7e",
    rating: 4,
    text: "Très bon travail pour l'ouverture d'un mur porteur et la pose d'un IPN. Chantier propre et équipe ponctuelle. Petit retard dû à la météo mais communication transparente.",
    date: "2025-09-12",
    projectType: "Rénovation",
  },
  {
    id: "5",
    name: "Patrick B.",
    initials: "PB",
    location: "Caluire-et-Cuire (69)",
    rating: 5,
    text: "Surélévation de notre maison pour créer un étage supplémentaire. Travail remarquable, l'étude structurelle était très rassurante. Résultat au-delà de nos attentes.",
    date: "2025-08-25",
    projectType: "Extension",
  },
];

export const aggregateRating = {
  average: 4.8,
  count: 47,
  distribution: {
    5: 38,
    4: 7,
    3: 2,
    2: 0,
    1: 0,
  },
};
