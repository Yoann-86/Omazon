const productsData = [
  {
    id: 1,
    title:
      "Trixie Frisbee Caoutchouc Naturel 22 cm pour Chien, Coloris aléatoire",
    price: 8.99,
    image: "frisbee.webp",
    category: {
      id: 1,
      title: "Animalerie",
      slug: "animalerie",
      image: "animalerie.webp",
    },
    tag: {
      id: 3,
      type: "best-seller",
      text: "N°1 des ventes",
    },
  },
  {
    id: 2,
    title:
      "PETKIT Pura Max Litiere Chat Autonettoyante, Bac à Litière Autonettoyante, xSecure/élimination des Odeurs/Contrôle APP/Capacité Maximale de 76L pour Plusieurs Chats",
    price: 599.99,
    image: "litiere.webp",
    category: {
      id: 1,
      title: "Animalerie",
      slug: "animalerie",
      image: "animalerie.webp",
    },
    tag: 0,
  },
  {
    id: 3,
    title:
      "Omazon Basics sacs à déjections canines avec distributeur et clip pou",
    price: 6.29,
    image: "sacs-caca.webp",
    category: {
      id: 1,
      title: "Animalerie",
      slug: "animalerie",
      image: "animalerie.webp",
    },
    tag: {
      id: 1,
      type: "choice",
      text: "Choix <span>d'Omazon</span>",
    },
  },
  {
    id: 4,
    title:
      "LUXÉOL - Sérum Barbe Pousse - Densité & Epaisseur - Aide À La Pousse De La Barbe & Amélioration Du Poils - Fabriqué En Europe - 60ml",
    price: 22.49,
    image: "barbe.webp",
    category: {
      id: 2,
      title: "Beauté et parfum",
      slug: "beaute-et-parfum",
      image: "beaute-et-parfum.webp",
    },
    tag: {
      id: 2,
      type: "new",
      text: "Nouveauté",
    },
  },
  {
    id: 5,
    title: "ESSIE nail polish - Vernis à ongles 13.5 ml color Strut Your Stuff",
    price: 9.11,
    image: "vernis.webp",
    category: {
      id: 2,
      title: "Beauté et parfum",
      slug: "beaute-et-parfum",
      image: "beaute-et-parfum.webp",
    },
    tag: 0,
  },
  {
    id: 6,
    title:
      "Palette Lancôme Hypnôse 5 teintes roses - palette de fards à paupières, couleur 06 Reflets d’Amethyste 4 g",
    price: 51.64,
    image: "maquillage.webp",
    category: {
      id: 2,
      title: "Beauté et parfum",
      slug: "beaute-et-parfum",
      image: "beaute-et-parfum.webp",
    },
    tag: {
      id: 4,
      type: "flash",
      text: "Vente flash",
    },
  },
  {
    id: 7,
    title:
      "Loctite Super Glue-3 | Précision (flacon de 5 g) – Colle forte pour réparations précises – Colle liquide tous matériaux – Colle transparente à séchage rapide",
    price: 3.59,
    image: "glue.webp",
    category: {
      id: 3,
      title: "Bricolage",
      slug: "bricolage",
      image: "bricolage.webp",
    },
    tag: {
      id: 3,
      type: "best-seller",
      text: "N°1 des ventes",
    },
  },
  {
    id: 8,
    title:
      "Multimètre Numérique KAIWEETS, Multimètre Digital, Voltmètre Multifonctions 2000 Comptes, Testeur Électrique, Ohmmètre, Mesure La Tension CA/CC, Courant CC, Résistance, Continuité, Diode",
    price: 16.97,
    image: "multimetre.webp",
    category: {
      id: 3,
      title: "Bricolage",
      slug: "bricolage",
      image: "bricolage.webp",
    },
    tag: 0,
  },
  {
    id: 9,
    title:
      "FACOM Monture de Scie à Métaux - Poignée Ergonomique - Légère et Compact - 601PB",
    price: 24.9,
    image: "scie.webp",
    category: {
      id: 3,
      title: "Bricolage",
      slug: "bricolage",
      image: "bricolage.webp",
    },
    tag: 0,
  },
  {
    id: 10,
    title:
      "Scie sauteuse 720W avec 6 lames dans coffret Makpac - MAKITA 4351FCTJ",
    price: 146.0,
    image: "scie-sauteuse.webp",
    category: {
      id: 3,
      title: "Bricolage",
      slug: "bricolage",
      image: "bricolage.webp",
    },
    tag: {
      id: 2,
      type: "new",
      text: "Nouveauté",
    },
  },
  {
    id: 11,
    title: "Facom Coffret de tournevis, Multi, 5 Pièces",
    price: 28.78,
    image: "tournevis.webp",
    category: {
      id: 3,
      title: "Bricolage",
      slug: "bricolage",
      image: "bricolage.webp",
    },
    tag: 0,
  },
  {
    id: 12,
    title: "Vans Sk8-Hi rose léopard Slim VQG369O, Baskets mode mixte adulte",
    price: 59.57,
    image: "vans.webp",
    category: {
      id: 8,
      title: "Chaussures",
      slug: "chaussures",
      image: "chaussures.webp",
    },
    tag: {
      id: 2,
      type: "new",
      text: "Nouveauté",
    },
  },
  {
    id: 13,
    title: "Pantoufles Mignon Furry Alpaga Rose Peluche Animal Fun",
    price: 18.99,
    image: "chaussons.webp",
    category: {
      id: 8,
      title: "Chaussures",
      slug: "chaussures",
      image: "chaussures.webp",
    },
    tag: 0,
  },
  {
    id: 14,
    title: "LA SPORTIVA Jackal II - Chaussures Trail Femme",
    price: 138.9,
    image: "sportiva.webp",
    category: {
      id: 8,
      title: "Chaussures",
      slug: "chaussures",
      image: "chaussures.webp",
    },
    tag: 0,
  },
  {
    id: 15,
    title: "DC Shoes Homme Pure High-Top WC Winter Basket",
    price: 71.95,
    image: "dc-shoes.webp",
    category: {
      id: 8,
      title: "Chaussures",
      slug: "chaussures",
      image: "chaussures.webp",
    },
    tag: 0,
  },
  {
    id: 16,
    title:
      "Tommy Hilfiger Femme Chaussures Semelles Compensées Espadrilles Talon Compensé",
    price: 64.95,
    image: "espadrilles.webp",
    category: {
      id: 8,
      title: "Chaussures",
      slug: "chaussures",
      image: "chaussures.webp",
    },
    tag: {
      id: 1,
      type: "choice",
      text: "Choix <span>d'Omazon</span>",
    },
  },
  {
    id: 17,
    title:
      "Weber Barbecue à Charbon Compact Kettle 47cm - Barbecue à Couvercle, Trépied et Roues - Barbecue d'Extérieur Autoportant avec Vasque en Porcelaine Émaillée - Noir (1221004)",
    price: 70.95,
    image: "bbq.webp",
    category: {
      id: 5,
      title: "Jardin",
      slug: "jardin",
      image: "jardin.webp",
    },
    tag: {
      id: 2,
      type: "new",
      text: "Nouveauté",
    },
  },
  {
    id: 18,
    title:
      "Edihome, Kit Barbecue, Ustensiles Barbecue, Ensemble d'accessoires de 25 pièces, Professionnel, Acier Inoxydable, Cadeau d'homme, Étui de Gril de Qualité Supérieure.",
    price: 31.99,
    image: "kit-bbq.webp",
    category: {
      id: 5,
      title: "Jardin",
      slug: "jardin",
      image: "jardin.webp",
    },
    tag: 0,
  },
  {
    id: 19,
    title:
      "LTLJX Couverture d’Hiver en Laine épaisse pour Chat de Noël, Gants de Noël Cadeaux de Chien, Vêtements de Noël pour Chien de Compagnie, Hiver Chaud",
    price: 15.99,
    image: "couverture.webp",
    category: {
      id: 1,
      title: "Animalerie",
      slug: "animalerie",
      image: "animalerie.webp",
    },
    tag: {
      id: 2,
      type: "new",
      text: "Nouveauté",
    },
  },
  {
    id: 20,
    title: "INTEX Piscinette Enfant Pirate, Multicolore, 142 x 142 x 42 cm",
    price: 21.95,
    image: "piscine.webp",
    category: {
      id: 5,
      title: "Jardin",
      slug: "jardin",
      image: "jardin.webp",
    },
    tag: {
      id: 3,
      type: "best-seller",
      text: "N°1 des ventes",
    },
  },
];

export default productsData;
