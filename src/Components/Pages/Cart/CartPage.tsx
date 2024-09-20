import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import "./CartPage.scss";

import ProductElm from "@/Components/Common/CartItem/CartItem";
import type { RootState } from "@/store/store";
import type { IProduct } from "@/@Types";

function CartPage() {
  // Store state
  const isLogged = useSelector((state: RootState) => state.appStore.isLogged);
  const cartList = useSelector((state: RootState) => state.cartStore.cart);

  // Component states
  const [productList, setProductList] = useState<IProduct[]>([]);

  // Effects
  useEffect(() => {
    if (cartList && cartList?.length > 0) setProductList(cartList);
  }, [cartList]);

  return (
    <section className="cart-page">
      <h2>Panier</h2>

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
          <ProductElm key={product.id} product={product} />
        ))}
    </section>
  );
}

export default CartPage;
