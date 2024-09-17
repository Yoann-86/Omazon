import { Navigate } from "react-router-dom";
import type { IProduct } from "../../@Types";
import { useEffect, useState } from "react";
import "./CartPage.scss";
import axios from "axios";
import ProductElm from "./ProductElm/ProductElm";

interface CartPageProps {
  products: IProduct[] | null;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
  setUSername: React.Dispatch<React.SetStateAction<string>>;
  isLogged: boolean;
}

function CartPage({
  products,
  setIsLogged,
  setUSername,
  isLogged,
}: CartPageProps) {
  const API_URL = import.meta.env.VITE_API_URL;
  const [productCart, setProductCart] = useState<number[]>([]);
  const [productList, setProductList] = useState<IProduct[]>([]);

  // console.log(cartList);

  useEffect(() => {
    const headers = localStorage.getItem("token");

    const fetchCartList = async () => {
      try {
        const result = await axios.get(`${API_URL}carts`, { headers });
        setProductCart(result.data.map((data) => data.productId));
      } catch (error) {
        console.log(error);
        setIsLogged(false);
        localStorage.removeItem("token");
        localStorage.removeItem("firstName");
        setUSername("");
      }
    };

    fetchCartList();
  }, [setIsLogged, setUSername]);

  useEffect(() => {
    const cartList = products?.filter((product) =>
      productCart.includes(product.id),
    );
    if (cartList && cartList?.length > 0) setProductList(cartList);
    console.log(cartList);
  }, [products, productCart]);

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
