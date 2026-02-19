export interface NavLink {
  href: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/avis-clients", label: "Avis" },
  { href: "/a-propos", label: "À propos" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const footerServices: NavLink[] = [
  { href: "/construction-neuve", label: "Construction neuve" },
  { href: "/renovation-maconnerie", label: "Rénovation" },
  { href: "/extension-surelevation", label: "Extension & Surélévation" },
  { href: "/services", label: "Tous nos services" },
];

export const footerLinks: NavLink[] = [
  { href: "/realisations", label: "Nos réalisations" },
  { href: "/avis-clients", label: "Avis clients" },
  { href: "/a-propos", label: "À propos" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/mentions-legales", label: "Mentions légales" },
];
