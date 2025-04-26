import { useSelector } from "react-redux";
import { useMutation } from "@tanstack/react-query";

import type { RootState } from "store/store";
import type { IProductCart, ICart, ICartListItem } from "types";
import { axiosInstance } from "infrastructure/api/axios";

export const useAddToCart = () => {
  //todo : add toast notification for success and error
  const { mutate: syncCart } = useMutation({
    mutationFn: async ({ user_id, cart }: ICart) => {
      const result = await axiosInstance.put("cart", { user_id, cart });
      return result.data;
    },
    onSuccess: () => {},
    onError: () => {
      alert("Erreur d'ajout au panier");
    },
  });
  const user_id = useSelector(
    (state: RootState) => state.appStore.login.user.id,
  );
  const is_logged = useSelector((state: RootState) => state.appStore.isLogged);

  return (product: IProductCart) => {
    try {
      const local_cart = localStorage.getItem("cart");
      let cart_list: Array<ICartListItem> = [];
      if (local_cart) {
        cart_list = JSON.parse(local_cart);
        const product_in_cart = cart_list.find(
          (item: ICartListItem) => item.product_id === product.id,
        );
        if (product_in_cart) {
          product_in_cart.quantity += 1;
        } else {
          cart_list.push({ product_id: product.id, quantity: 1 });
        }
      }
      localStorage.setItem("cart", JSON.stringify(cart_list));

      if (is_logged) {
        syncCart({ user_id, cart: cart_list });
      }
      return true;
    } catch (error) {
      alert("Erreur d'ajout au panier");
      return false;
    }
  };
};
