import { useDispatch, useSelector } from "react-redux";

import "./AddToCartBtn.scss";

import type { AppDispatch, RootState } from "@/store/store";
import actionAsyncPostToCart from "@/store/thunks/thunkPostToCart";
import actionAsyncFetchCart from "@/store/thunks/thunkFetchCarts";
import type { IProduct } from "@/@Types";

interface AddtoCartBtnProps {
  product: IProduct;
}

export default function AddToCartBtn({ product }: AddtoCartBtnProps) {
  // Hooks :
  const dispatch: AppDispatch = useDispatch();

  // Store states:
  const userId = useSelector(
    (state: RootState) => state.appStore.login.user.id,
  );
  const isLogged = useSelector((state: RootState) => state.appStore.isLogged);
  const token = useSelector(
    (state: RootState) => state.appStore.login.user.accessToken,
  );

  // Handle functions :
  const handleAddToCart = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
    if (isLogged) {
      try {
        const resultAction = await dispatch(
          actionAsyncPostToCart({
            productId: product.id,
            userId: userId,
          }),
        );
        if (actionAsyncPostToCart.fulfilled.match(resultAction)) {
          dispatch(actionAsyncFetchCart({ token }));
        }
      } catch (error) {
        alert("Erreur d'ajout au panier");
      }
    } else alert("Vous devez être connecté !");
  };

  return (
    <button className="button-add-cart" type="button" onClick={handleAddToCart}>
      Ajouter au panier
    </button>
  );
}
