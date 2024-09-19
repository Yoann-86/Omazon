import type { IProduct } from "../../@Types";
import { useEffect, useState } from "react";
import "./CartPage.scss";
import ProductElm from "./ProductElm/ProductElm";
import type { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import groupByKey from "../../utils/groupByKey";

function CartPage() {
  // Store state
  const isLogged = useSelector((state: RootState) => state.appStore.isLogged);
  const carts = useSelector((state: RootState) => state.cartStore.cart);
  const userId = useSelector(
    (state: RootState) => state.appStore.login.user.id,
  );

  const products = useSelector(
    (state: RootState) => state.productStore.products,
  );

  // Component states
  const [productList, setProductList] = useState<IProduct[]>([]);

  // Effects
  useEffect(() => {
    const productCart = carts
      .filter((cart) => cart.userId === userId)
      .map((cart) => cart.productId);

    const cartProductList = products?.filter((product) =>
      productCart.includes(product.id),
    );

    if (cartProductList && cartProductList?.length > 0)
      setProductList(cartProductList);
  }, [products, carts, userId]);

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
