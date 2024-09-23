import type { IProduct } from "@/@Types";
import type { IProductCart } from "@/@Types/product";

export default function transformIProductCart(
  cartList: IProduct[],
): IProductCart[] {
  if (cartList.length > 0) {
    return Object.values(
      cartList.reduce(
        (acc, product) => {
          if (acc[product.id]) {
            acc[product.id].quantity += 1;
          } else {
            acc[product.id] = { ...product, quantity: 1 };
          }
          return acc;
        },
        {} as { [key: number]: IProductCart },
      ),
    );
  }
  return [];
}
