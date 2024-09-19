import { describe, test, expect } from "vitest";
import type { IProduct } from "../@Types";
import groupByKeyWithValue from "./groupByKeyWithFilter";

describe("groupByKeyWithValue", () => {
  const products: IProduct[] = [
    {
      id: 1,
      title: "Product 1",
      price: 10,
      image: "img1",
      description: "desc1",
      categoryId: 1,
      tagId: 1,
    },
    {
      id: 2,
      title: "Product 2",
      price: 15,
      image: "img2",
      description: "desc2",
      categoryId: 1,
      tagId: 1,
    },
    {
      id: 3,
      title: "Product 3",
      price: 20,
      image: "img3",
      description: "desc3",
      categoryId: 2,
      tagId: 2,
    },
    {
      id: 4,
      title: "Product 4",
      price: 25,
      image: "img4",
      description: "desc4",
      categoryId: 2,
      tagId: 0,
    },
  ];

  // Test 1:
  test("should group products by tagId = 1", () => {
    const result = groupByKeyWithValue(products, "tagId", 1);
    expect(result["1"]).toEqual([
      {
        id: 1,
        title: "Product 1",
        price: 10,
        image: "img1",
        description: "desc1",
        categoryId: 1,
        tagId: 1,
      },
      {
        id: 2,
        title: "Product 2",
        price: 15,
        image: "img2",
        description: "desc2",
        categoryId: 1,
        tagId: 1,
      },
    ]);

    expect(result).toEqual({
      1: [
        {
          id: 1,
          title: "Product 1",
          price: 10,
          image: "img1",
          description: "desc1",
          categoryId: 1,
          tagId: 1,
        },
        {
          id: 2,
          title: "Product 2",
          price: 15,
          image: "img2",
          description: "desc2",
          categoryId: 1,
          tagId: 1,
        },
      ],
    });
  });

  // Test 2:
  test("should return an empty object if no products match the filterValue", () => {
    const result = groupByKeyWithValue(products, "tagId", 3);
    expect(result["3"]).toEqual(undefined);
    expect(result).toEqual({});
  });

  // Test 3:
  test("should return an empty object if the input array is empty", () => {
    const result = groupByKeyWithValue([] as IProduct[], "tagId", 1);
    expect(result).toEqual({});
    expect(result["1"]).toEqual(undefined);
  });
});
