export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readingTime: number;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "prix-maconnerie-2026",
    title: "Quel est le prix au m² pour de la maçonnerie en 2026 ?",
    excerpt: "Découvrez les tarifs moyens pour vos travaux de maçonnerie : construction, rénovation, extension. Guide complet des prix actualisés.",
    content: `## Les prix de la maçonnerie en 2026

Les tarifs de la maçonnerie varient selon le type de travaux, les matériaux utilisés et la complexité du chantier.

### Construction neuve

Pour une construction neuve en gros œuvre, comptez en moyenne :

- **Fondations** : 100 à 200 €/m²
- **Élévation des murs** : 40 à 80 €/m²
- **Dalle béton** : 50 à 100 €/m²
- **Charpente** : 60 à 130 €/m²

### Rénovation

Les travaux de rénovation en maçonnerie se situent généralement entre :

- **Ravalement de façade** : 30 à 100 €/m²
- **Rejointoiement** : 25 à 60 €/m²
- **Ouverture mur porteur** : 1 500 à 5 000 € selon la portée

### Extension

L'extension de maison coûte en moyenne :

- **Extension classique** : 1 200 à 2 500 €/m²
- **Surélévation** : 1 500 à 3 000 €/m²
- **Véranda maçonnée** : 1 000 à 2 000 €/m²

### Comment obtenir le meilleur prix ?

1. Demandez plusieurs devis pour comparer
2. Privilégiez un artisan local avec garantie décennale
3. Prévoyez les travaux hors période hivernale si possible
4. Groupez les travaux pour réduire les coûts de déplacement

**Besoin d'un devis précis pour votre projet ?** [Contactez-nous](/contact) pour un devis gratuit sous 48h.`,
    author: "Maçonnerie [Nom]",
    date: "2026-02-01",
    category: "Prix & Tarifs",
    image: "/images/blog/prix-maconnerie.jpg",
    readingTime: 5,
    tags: ["prix", "tarifs", "maçonnerie", "devis"],
  },
  {
    slug: "choisir-son-macon",
    title: "Comment choisir son maçon : 7 critères essentiels",
    excerpt: "Ne vous trompez pas dans le choix de votre maçon. Voici les 7 critères indispensables pour trouver un professionnel fiable.",
    content: `## 7 critères pour bien choisir son maçon

Choisir le bon maçon est crucial pour la réussite de votre projet. Voici les critères à vérifier.

### 1. La garantie décennale

C'est le critère n°1. Tout maçon doit être couvert par une assurance décennale. Demandez une copie de l'attestation avant de signer le devis.

### 2. Les références et réalisations

Un bon maçon sera fier de vous montrer ses réalisations précédentes. Demandez des photos et si possible les coordonnées de clients précédents.

### 3. Les avis clients

Consultez les avis Google, les témoignages sur le site web. Un artisan avec de nombreux avis positifs et vérifiés est un gage de confiance.

### 4. Le devis détaillé

Méfiez-vous des devis trop vagues. Un bon devis doit détailler :
- Les matériaux utilisés avec les quantités
- La main d'œuvre
- Les délais prévisionnels
- Les conditions de paiement

### 5. Les qualifications

Les labels comme **RGE** ou **Qualibat** attestent d'un niveau de compétence vérifié par un organisme indépendant.

### 6. La proximité géographique

Un artisan local connaît les spécificités du sol, le PLU de votre commune, et sera plus réactif en cas de besoin.

### 7. Le relationnel

Le chantier va durer plusieurs semaines voire mois. Le courant doit bien passer avec votre maçon pour une collaboration sereine.

**Vous cherchez un maçon de confiance ?** [Demandez votre devis gratuit](/contact) et jugez par vous-même notre sérieux.`,
    author: "Maçonnerie [Nom]",
    date: "2026-01-15",
    category: "Conseils",
    image: "/images/blog/choisir-macon.jpg",
    readingTime: 4,
    tags: ["conseils", "maçon", "choix", "qualité"],
  },
  {
    slug: "extension-maison-permis-construire",
    title: "Extension maison : permis de construire ou déclaration préalable ?",
    excerpt: "Quelle autorisation d'urbanisme pour votre extension de maison ? Permis de construire ou déclaration préalable ? On vous explique tout.",
    content: `## Quelle autorisation pour votre extension ?

Avant de commencer des travaux d'extension, il est essentiel de savoir quelle autorisation d'urbanisme vous devez obtenir.

### Déclaration préalable de travaux

La déclaration préalable (DP) suffit dans ces cas :
- Extension de **moins de 20 m²** de surface de plancher
- En zone urbaine avec PLU : extension de **moins de 40 m²**
- À condition que la surface totale après travaux ne dépasse pas 150 m²

### Permis de construire

Le permis de construire (PC) est obligatoire quand :
- L'extension dépasse **20 m²** (ou 40 m² en zone urbaine avec PLU)
- La surface totale après travaux dépasse **150 m²**
- Le projet modifie la structure porteuse ou la façade

### Cas particulier : le recours à un architecte

Si la surface totale de votre maison après extension dépasse **150 m²**, le recours à un architecte est **obligatoire**.

### Les délais d'instruction

- **Déclaration préalable** : 1 mois
- **Permis de construire** : 2 mois (3 mois si secteur protégé)

### Notre conseil

Avant tout projet d'extension, consultez le PLU de votre commune et rapprochez-vous du service urbanisme de votre mairie. Nous pouvons également vous accompagner dans ces démarches.

**Vous avez un projet d'extension ?** [Contactez-nous](/contact) pour une étude de faisabilité gratuite.`,
    author: "Maçonnerie [Nom]",
    date: "2025-12-20",
    category: "Réglementation",
    image: "/images/blog/extension-permis.jpg",
    readingTime: 4,
    tags: ["extension", "permis de construire", "déclaration préalable", "urbanisme"],
  },
];

export const blogCategories = ["Tous", "Prix & Tarifs", "Conseils", "Réglementation"];
