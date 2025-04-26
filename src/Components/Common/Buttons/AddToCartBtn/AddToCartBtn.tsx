import "components/common/Buttons/AddToCartBtn/AddToCartBtn.scss";

import type { IProductCart } from "types";
import { useAddToCart } from "hooks/useAddToCart";

export default function AddToCartBtn({ product }: { product: IProductCart }) {
  const add_to_cart = useAddToCart();

  return (
    <button
      className="button-add-cart"
      type="button"
      onClick={() => add_to_cart(product)}
    >
      Ajouter au panier
    </button>
  );
}
