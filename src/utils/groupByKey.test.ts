import groupByKey from "./groupByKey";
import { describe, test, expect } from "vitest";

describe("groupByKey", () => {
  test("should return an empty object when the input array is empty", () => {
    const result = groupByKey([], "id");

    expect(result).toEqual({});
  });

  test("should group items by a given key", () => {
    const input = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 1, name: "Charlie" },
    ];

    const expectedOutput = {
      "1": [
        { id: 1, name: "Alice" },
        { id: 1, name: "Charlie" },
      ],
      "2": [{ id: 2, name: "Bob" }],
    };

    const result = groupByKey(input, "id");
    expect(result).toEqual(expectedOutput);
  });

  test("should handle grouping by string keys", () => {
    const input = [
      { category: "Fruit", name: "Apple" },
      { category: "Fruit", name: "Banana" },
      { category: "Vegetable", name: "Carrot" },
    ];

    const expectedOutput = {
      Fruit: [
        { category: "Fruit", name: "Apple" },
        { category: "Fruit", name: "Banana" },
      ],
      Vegetable: [{ category: "Vegetable", name: "Carrot" }],
    };

    const result = groupByKey(input, "category");
    expect(result).toEqual(expectedOutput);
  });

  test("should handle grouping by keys with numeric values", () => {
    const input = [
      { id: 1, name: "Item 1" },
      { id: 2, name: "Item 2" },
      { id: 3, name: "Item 3" },
    ];

    const expectedOutput = {
      "1": [{ id: 1, name: "Item 1" }],
      "2": [{ id: 2, name: "Item 2" }],
      "3": [{ id: 3, name: "Item 3" }],
    };

    const result = groupByKey(input, "id");
    expect(result).toEqual(expectedOutput);
  });

  test("should handle objects with unique keys", () => {
    const input = [
      { id: 1, value: "A" },
      { id: 2, value: "B" },
      { id: 3, value: "C" },
    ];

    const expectedOutput = {
      "1": [{ id: 1, value: "A" }],
      "2": [{ id: 2, value: "B" }],
      "3": [{ id: 3, value: "C" }],
    };

    const result = groupByKey(input, "id");
    expect(result).toEqual(expectedOutput);
  });

  test("should handle keys with non-string values and convert them to strings", () => {
    const input = [
      { key: 123, name: "Item 1" },
      { key: 456, name: "Item 2" },
      { key: 123, name: "Item 3" },
    ];

    const expectedOutput = {
      "123": [
        { key: 123, name: "Item 1" },
        { key: 123, name: "Item 3" },
      ],
      "456": [{ key: 456, name: "Item 2" }],
    };

    const result = groupByKey(input, "key");
    expect(result).toEqual(expectedOutput);
  });
});
