import type ICategory from "./category";
import type ITag from "./tag";

export default interface IProduct {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  categoryId: number;
  tagId: number;
}

export interface IProductCart extends IProduct {
  quantity: number;
}

// {
//   id: 1,
//   title:
//     "Trixie Frisbee Caoutchouc Naturel 22 cm pour Chien, Coloris aléatoire",
//   price: 8.99,
//   image: "frisbee.webp",
//   category: {
//     id: 1,
//     title: "Animalerie",
//     slug: "animalerie",
//     image: "animalerie.webp",
//   },
//   tag: {
//     id: 3,
//     type: "best-seller",
//     text: "N°1 des ventes",
//   },
// }
