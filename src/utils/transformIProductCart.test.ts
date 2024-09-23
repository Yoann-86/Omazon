import { describe, test, expect } from "vitest";

import type { IProduct } from "../@Types";
import type { IProductCart } from "@/@Types/product";
import transformIProductCart from "./transformIProductCart";

describe("transformIProductCart", () => {
  const cartList: IProduct[] = [
    {
      id: 1,
      title: "dummy title 1",
      price: 1,
      image: "https://omazon-dummy-image-1.webp",
      description: "Dummy description 1",
      categoryId: 1,
      tagId: 1,
    },
    {
      id: 2,
      title: "dummy title 2",
      price: 2,
      image: "https://omazon-dummy-image-2.webp",
      description: "Dummy description 2",
      categoryId: 2,
      tagId: 2,
    },
    {
      id: 3,
      title: "dummy title 3",
      price: 3,
      image: "https://omazon-dummy-image-3.webp",
      description: "Dummy description 3",
      categoryId: 3,
      tagId: 3,
    },
    {
      id: 3,
      title: "dummy title 3",
      price: 3,
      image: "https://omazon-dummy-image-3.webp",
      description: "Dummy description 3",
      categoryId: 3,
      tagId: 3,
    },
  ];

  test("should return an IProductCart[]", () => {
    const cartList = [
      {
        id: 1,
        title: "dummy title 1",
        price: 1,
        image: "https://omazon-dummy-image-1.webp",
        description: "Dummy description 1",
        categoryId: 1,
        tagId: 1,
      },
    ];
    const result = transformIProductCart(cartList);
    expect(result).toStrictEqual([
      {
        id: 1,
        title: "dummy title 1",
        price: 1,
        image: "https://omazon-dummy-image-1.webp",
        description: "Dummy description 1",
        categoryId: 1,
        tagId: 1,
        quantity: 1,
      },
    ]);
  });

  test("should return an IProductCart[] with no doubles product id", () => {
    const result = transformIProductCart(cartList);
    expect(result).toStrictEqual([
      {
        id: 1,
        title: "dummy title 1",
        price: 1,
        image: "https://omazon-dummy-image-1.webp",
        description: "Dummy description 1",
        categoryId: 1,
        tagId: 1,
        quantity: 1,
      },
      {
        id: 2,
        title: "dummy title 2",
        price: 2,
        image: "https://omazon-dummy-image-2.webp",
        description: "Dummy description 2",
        categoryId: 2,
        tagId: 2,
        quantity: 1,
      },
      {
        id: 3,
        title: "dummy title 3",
        price: 3,
        image: "https://omazon-dummy-image-3.webp",
        description: "Dummy description 3",
        categoryId: 3,
        tagId: 3,
        quantity: 2,
      },
    ]);
  });

  test("should return an empty array if cartList is an empty array", () => {
    const cartList = [] as IProduct[];
    const result = transformIProductCart(cartList);
    expect(result).toStrictEqual([] as IProductCart[]);
  });
});
