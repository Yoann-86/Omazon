import { useSelector } from "react-redux";

import "modules/cart/Index.scss";

import CartItem from "components/common/CartItem/CartItem";
import type { RootState } from "store/store";
import type { ICartListItem, IProductCart } from "types";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "infrastructure/api/axios";

export const Index = () => {
  // Store state
  const isLogged = useSelector((state: RootState) => state.appStore.isLogged);
  const cartList = useSelector((state: RootState) => state.cartStore.cart);

  const local_cart = localStorage.getItem("cart");
  const cart_list: Array<ICartListItem> =
    (local_cart && JSON.parse(local_cart)) || [];

  const products_in_cart: IProductCart[] = [];

  cart_list.map((cart_item) => {
    const { data: product } = useQuery({
      queryKey: ["products", "id", cart_item.product_id],
      queryFn: async () => {
        const result = await axiosInstance.get(
          `products?id=${cart_item.product_id}`,
        );
        const product = result.data.data.product as IProductCart;
        product.quantity = cart_item.quantity;
        return product;
      },
    });
    if (product) {
      products_in_cart.push(product);
    }
  });

  // Variables
  const totalPrice = cartList
    .reduce((sum, product) => sum + product.price, 0)
    .toFixed(2);

  // Handle functions
  const handleSubmitCart = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
    alert("C'est un faux site voyons, vous n'aller pas commander ! ");
  };

  return (
    <section className="cart-page">
      {/* <h2 className="cart-page-title">Votre panier</h2> */}

      {!isLogged && cart_list.length === 0 && (
        <p>
          Votre panier est vide, visiter nos produits pour commander un article
        </p>
      )}

      <div className="cart-page-products" aria-label="Liste des produits">
        <h2 className="cart-page-products--title">Votre panier</h2>
        <button type="button" className="cart-page-products--deselect">
          Déselectionner tous les éléments
        </button>
        <p className="cart-page-products--price">Prix</p>
        <div className="cart-page-products--items">
          {products_in_cart.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
          <p className="subtotal">
            Sous-total (x articles) :
            <span className="subtotal-price">X,XX €</span>
          </p>
        </div>
      </div>

      <div className="cart-page-total" aria-label="Total du panier">
        <p>Total panier</p>
        <p className="total-price">{totalPrice}€</p>
        <button
          type="button"
          className="button-confirm-cart"
          onClick={handleSubmitCart}
        >
          Passer la commande
        </button>
      </div>
    </section>
  );
};
