# InfoAymane - Agence de Marketing Digital

Bienvenue sur le projet web de **InfoAymane**, une agence spécialisée dans le marketing digital, la création de sites web et le design graphique basée au Maroc (Casablanca).

Ce site est conçu pour être une vitrine rapide, moderne et ultra-optimisée, permettant de présenter les services de l'agence, d'attirer des prospects et de faciliter la conversion directe via WhatsApp.

---

## ⚡ Performances & Vitesse

Ce projet a été optimisé pour une vitesse de chargement maximale :
- **Rendu côté serveur (SSR) et Génération statique (SSG)** via Next.js 16.
- **Images optimisées** : Toutes les images (y compris le logo et les bannières) utilisent le composant `next/image` qui compresse et charge paresseusement (lazy-load) les médias, convertissant nativement en format WebP/AVIF.
- **Splash Screen** : Une animation d'entrée rapide de 2 secondes qui masque le chargement des polices et rend l'expérience d'ouverture du site agréable et fluide.
- **Polices optimisées** : Intégration via `next/font/google` (Inter, Space Grotesk, Anton) pour éviter les sauts de contenu (CLS) et précharger les polices cruciales au moment du build.
- **Code splitting automatique** : Next.js se charge de diviser le code JavaScript pour ne charger que ce qui est nécessaire à l'écran.
- **Styles en ligne** : Tailwind CSS élimine le CSS non utilisé lors du build de production, résultant en une très petite taille de fichier de style.

---

## 🚀 Stack Technique

- **Framework :** [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Librairie UI :** [React 19](https://react.dev/)
- **Stylisation :** [Tailwind CSS 3](https://tailwindcss.com/)
- **Animations :** [Framer Motion](https://www.framer.com/motion/) pour les interactions, les défilements fluides et les rubans.
- **Composants UI interactifs :** [Radix UI](https://www.radix-ui.com/) et [shadcn/ui](https://ui.shadcn.com/) (pour les dialogues, menus mobiles et boutons).
- **Icônes :** [Lucide React](https://lucide.dev/)

---

## 📁 Structure du Projet

```text
infoaymane-next/
├── public/                 # Images, vidéos, favicon et assets statiques
│   ├── NV-image/           # Images compressées pour le site
│   └── Agence InfoAymane-images/ # Archive des visuels
├── src/
│   ├── app/                # Configuration Next.js App Router
│   │   ├── layout.tsx      # Structure globale, polices, métadonnées
│   │   ├── page.tsx        # Page d'accueil principale (Home)
│   │   └── globals.css     # Styles de base et utilitaires Tailwind
│   ├── components/         # Composants React modulaires
│   │   ├── About.tsx       # Section À propos
│   │   ├── DiagonalRibbons.tsx # Animation des rubans dynamiques (jaune & bleu)
│   │   ├── Footer.tsx      # Pied de page
│   │   ├── Header.tsx      # Barre de navigation et Logo
│   │   ├── Hero.tsx        # Section principale (carrousel et scroll-down)
│   │   ├── Processus.tsx   # Section processus client
│   │   ├── Promo.tsx       # Offres spéciales
│   │   ├── Services.tsx    # Accordéon de services interactif
│   │   ├── SplashScreen.tsx# Animation d'entrée
│   │   └── SplashWrapper.tsx # Wrapper client pour bloquer le scroll
│   └── lib/                # Fonctions utilitaires (cn, etc.)
├── tailwind.config.ts      # Thème, couleurs de marque (brand-yellow, brand-blue)
└── package.json            # Dépendances du projet
```

---

## 🎨 Design System

Le design est centré autour de l'identité visuelle de **InfoAymane** :

- **Couleurs de la marque :**
  - Bleu (Primary) : `#29abe2` (brand-blue) et sa version sombre `#0284c7`.
  - Jaune (Accent) : `#fde047` (brand-yellow) et ses variations or.
- **Typographie :**
  - **Inter** : Pour le texte de corps, lisible et moderne.
  - **Space Grotesk** : Pour la Navbar, l'interface technique et les grands numéros.
  - **Serif** (Playfair/Times) : Pour un effet très luxueux et impactant dans les titres (Rubans, Services).
  - **Anton** : Anciennement utilisé pour un aspect blocky, conservé pour les gros impacts.

---

## 💻 Démarrage Local

1. Installez les dépendances :
   ```bash
   npm install
   ```

2. Lancez le serveur de développement avec Turbopack (ultra rapide) :
   ```bash
   npm run dev
   ```

3. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

4. Pour créer la version de production ultra-rapide (SSG) :
   ```bash
   npm run build
   npm start
   ```

---

## 🛠️ Fonctionnalités clés

- **Navigation fluide** avec des ancres (`#accueil`, `#services`) et scroll smooth.
- **Rubans Diagonaux Parallax** défilant infiniment pour ajouter du dynamisme.
- **Menu Mobile** moderne avec un panneau glissant (Sheet component).
- **Intégration WhatsApp** directe pour l'acquisition de leads ("Commander sur WhatsApp").
- **Section Services en Accordéon Horizontal** : Une conception visuelle de pointe permettant de voir les détails au survol.

Développé pour l'équipe InfoAymane.
