# VOLTARA — L'énergie qui fait avancer l'Afrique

Site vitrine premium de VOLTARA, opérateur intégré de mobilité électrique et d'énergie en
Afrique (véhicules et motos électriques, recharge, swapping de batteries, VTC, livraison,
solaire).

**Périmètre de cette phase :** front-end uniquement (React), sans backend ni CMS. Les
données (véhicules, stations, tarifs, articles) sont statiques dans `src/data/`. Les
formulaires (devis, partenariat, dossier VOLTARA Pay) fonctionnent en état local React et
simulent une confirmation, sans appel réseau.

## Stack

- [Vite](https://vite.dev) + [React](https://react.dev) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) (thème CSS-first dans `src/index.css`)
- [React Router](https://reactrouter.com) v6
- [Framer Motion](https://www.framer.com/motion/) pour les animations
- [Lucide](https://lucide.dev) pour les icônes

## Démarrer en local

```bash
npm install
npm run dev
```

## Build de production

```bash
npm run build
npm run preview
```

## Déploiement

Le site est déployé sur GitHub Pages via `.github/workflows/deploy.yml` à chaque push sur
`main`, avec le domaine personnalisé `voltara.myoctogone.com` (fichier `public/CNAME`).
Le routage React Router en mode "history" est géré sur GitHub Pages via le mécanisme
`public/404.html` + script de restauration dans `index.html` (spa-github-pages).

## Structure

```
src/
  components/
    layout/   Header (méga-menu), Footer, Layout, LegalLayout, WhatsAppButton
    ui/       Design system (Button, Section, PageHero, VehicleCard, StationsMap, ...)
  data/       Données statiques (véhicules, stations, pôles, FAQ, articles...)
  lib/        Utilitaires (formatage, simulateur VOLTARA Pay)
  pages/      Une page par route de l'arborescence du site
```
