import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import "./CartPage.scss";

import CartItem from "@/Components/Common/CartItem/CartItem";
import type { RootState } from "@/store/store";
import type { IProductCart } from "@/@Types/product";
import transformIProductCart from "@/utils/transformIProductCart";

function CartPage() {
  // Store state
  const isLogged = useSelector((state: RootState) => state.appStore.isLogged);
  const cartList = useSelector((state: RootState) => state.cartStore.cart);

  // Component states
  const [productList, setProductList] = useState<IProductCart[]>([]);

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

  // Effects
  useEffect(() => {
    if (cartList && cartList?.length > 0) {
      // Ajouter un champ quantité à chaque produit initialisé à 1
      // Si l'id est déja présent, ne pas l'ajouter et ajouté 1 à l'existant
      setProductList(transformIProductCart(cartList));
    }
  }, [cartList]);

  return (
    <section className="cart-page">
      <h2>Votre panier</h2>

      {/* Case 1 : Logged out user */}
      {!isLogged && (
        <p>Merci de vous authentifier pour accéder à votre panier</p>
      )}

      {/* Case 2 : Logged in user with empty cart */}
      {isLogged && productList.length === 0 && (
        <p>
          Votre panier est vide, visiter nos produits pour commander un article
        </p>
      )}

      {/* Case 3 : Logged in user */}
      {isLogged &&
        productList.length > 0 &&
        productList.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      <div className="total-cart">
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
}

export default CartPage;
