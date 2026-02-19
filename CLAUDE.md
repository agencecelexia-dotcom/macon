# CLAUDE.md — Conventions & Setup du projet

## Stack technique

- **Framework** : Next.js (App Router)
- **Style** : Tailwind CSS v3
- **Language** : TypeScript
- **Package manager** : npm
- **Node** : v24.x

## Structure du projet (à venir après PRD)

```
macon/
├── app/              # App Router Next.js (pages, layouts, routes)
├── components/       # Composants React réutilisables
├── public/           # Assets statiques (images, fonts, icons)
├── styles/           # CSS global si besoin
├── lib/              # Utilitaires, helpers
└── CLAUDE.md
```

## Conventions de code

### TypeScript
- Toujours typer les props des composants avec une interface ou un type
- Pas de `any` sauf cas exceptionnel justifié
- Préférer les types explicites aux inférences ambiguës

### Composants React
- Un composant = un fichier
- Nommage en **PascalCase** : `HeroSection.tsx`, `NavBar.tsx`
- Props interface nommée `<ComponentName>Props`
- Exporter en default export pour les composants de page, named export pour les UI

### Fichiers & dossiers
- Pages : `app/page.tsx`, `app/about/page.tsx`
- Composants partagés : `components/ui/`, `components/sections/`
- Nommage dossiers en **kebab-case** : `hero-section/`, `contact-form/`

### CSS / Tailwind
- Utiliser les classes Tailwind en priorité
- Éviter les styles inline sauf cas dynamique inévitable
- Variables CSS dans `tailwind.config.ts` pour les couleurs et fonts du projet

## Workflow Git

```bash
# Toujours travailler sur une branche feature
git checkout -b feature/nom-de-la-feature

# Commits en français ou anglais, format conventionnel :
git commit -m "feat: ajout section hero"
git commit -m "fix: correction responsive mobile navbar"
git commit -m "style: alignement boutons CTA"
```

### Préfixes de commits
- `feat` : nouvelle fonctionnalité
- `fix` : correction de bug
- `style` : changements visuels sans impact logique
- `refactor` : refactoring sans changement de comportement
- `docs` : documentation
- `chore` : maintenance, configs

## Config Git (à faire avant le premier commit)

```bash
git config --global user.name "Ton Nom"
git config --global user.email "ton@email.com"
```

## Commandes utiles

```bash
# Développement
npm run dev          # Lance le serveur de dev sur http://localhost:3000

# Build & vérification
npm run build        # Build de production
npm run lint         # Lint ESLint
npm run type-check   # Vérification TypeScript (si configuré)

# Après installation d'un nouveau paquet
npm install          # Installe les dépendances
```

## Skills disponibles pour ce projet

| Skill | Usage |
|-------|-------|
| `frontend-design` | Créer des composants UI beaux et modernes |
| `webapp-testing` | Tester le site avec Playwright |
| `canvas-design` | Créer des visuels / posters / assets |
| `doc-coauthoring` | Rédiger documentation ou specs |

## Règles de qualité

- Mobile-first : toujours designer pour mobile en premier
- Accessibilité : attributs `alt` sur toutes les images, rôles ARIA si nécessaire
- Performance : images optimisées via `next/image`, lazy loading par défaut
- SEO : metadata dans chaque page (`generateMetadata` ou `<Head>`)

## À faire avant de commencer le développement

- [ ] Configurer git user.name et user.email
- [ ] Initialiser le projet Next.js : `npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir no --import-alias "@/*"`
- [ ] Vérifier que `npm run dev` fonctionne
- [ ] Recevoir et lire le PRD
- [ ] Créer les composants selon le PRD
