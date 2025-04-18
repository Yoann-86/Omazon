import { Link } from "react-router-dom";

import "./CartItem.scss";

import type { AppDispatch, RootState } from "@/store/store";
import type { IProductCart } from "@/@Types/product";
import { useDispatch, useSelector } from "react-redux";
import actionAsyncPostToCart from "@/store/thunks/thunkPostToCart";
import actionAsyncFetchCart from "@/store/thunks/thunkFetchCarts";
import actionAsyncRemoveFromCart from "@/store/thunks/thunkRemoveFromCart";

interface CartItemProps {
  product: IProductCart;
}

function CartItem({ product }: CartItemProps) {
  const API_URL = import.meta.env.VITE_LOCAL_API_URL;

  // Hooks :
  const dispatch: AppDispatch = useDispatch();

  // Store states :
  const userId = useSelector(
    (state: RootState) => state.appStore.login.user.id,
  );
  const token = useSelector(
    (state: RootState) => state.appStore.login.user.accessToken,
  );

  // Handle functions:
  const handleRemoveAnItem = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
    try {
      const resultAction = await dispatch(
        actionAsyncRemoveFromCart({
          productId: product.id,
          userId: userId,
          deleteAll: false,
        }),
      );
      if (actionAsyncRemoveFromCart.fulfilled.match(resultAction)) {
        dispatch(actionAsyncFetchCart({ token }));
      }
    } catch (error) {
      alert("Erreur de supression du panier");
    }
  };

  const handleRemoveAllItems = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
    try {
      const resultAction = await dispatch(
        actionAsyncRemoveFromCart({
          productId: product.id,
          userId: userId,
          deleteAll: true,
        }),
      );
      if (actionAsyncRemoveFromCart.fulfilled.match(resultAction)) {
        dispatch(actionAsyncFetchCart({ token }));
      }
    } catch (error) {
      alert("Erreur de supression du panier");
    }
  };

  const handleAddAnItem = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
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
  };

  return (
    <section className="product-elm">
      <div className="separator" />
      <div className="flex-stretch">
        <div className="product-elm--details">
          <Link to={`/product/${product.id}`}>
            <img src={`${API_URL}pictures/products/${product.image}`} alt="" />
          </Link>
          <Link to={`/product/${product.id}`}>
            <p className="product-elm--title">{product.title}</p>
          </Link>
        </div>
        <div className="right-section">
          <div className="quantity-section">
            <button type="button" onClick={handleRemoveAnItem}>
              -
            </button>
            <input type="number" name="qty" id="qty" value={product.quantity} />
            <button type="button" onClick={handleAddAnItem}>
              +
            </button>
          </div>
          <button
            type="button"
            className="right-section--delete-btn"
            onClick={handleRemoveAllItems}
          >
            supprimer
          </button>
          <p className="right-section--price">
            {(product.price * product.quantity).toFixed(2)}€
          </p>
        </div>
      </div>
    </section>
  );
}

export default CartItem;
