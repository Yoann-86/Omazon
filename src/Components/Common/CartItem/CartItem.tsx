import { Link } from "@tanstack/react-router";
import { FaRegTrashCan, FaMinus, FaPlus } from "react-icons/fa6";

import "./CartItem.scss";

import type { IProductCart } from "types";
import { useAddToCart } from "hooks/useAddToCart";
import { useRemoveFromCart } from "hooks/useRemoveFromCart";
import { useClearItemFromCart } from "hooks/useClearItemFromCart";

function CartItem({
  product,
}: {
  product: IProductCart;
}) {
  const API_URL = import.meta.env.VITE_LOCAL_API_URL;
  const add_to_cart = useAddToCart();
  const remove_from_cart = useRemoveFromCart();
  const clear_cart = useClearItemFromCart();

  const price_whole = Math.floor(product.price * product.quantity);
  const price_decimal = ((product.price * product.quantity) % 1)
    .toFixed(2)
    .slice(2);
  const is_single = product.quantity === 1;

  return (
    <article className="product-container">
      <div className="product-container--divider">
        <div className="checkbox">
          <input type="checkbox" name="checkbox" id="checkbox" />
        </div>

        <div className="image">
          <Link to="/product/$id" params={{ id: product.id.toString() }}>
            <img src={`${API_URL}pictures/products/${product.image}`} alt="" />
          </Link>
        </div>

        <div className="details">
          <div className="details-description">
            <Link
              className="details-description--title"
              to="/product/$id"
              params={{ id: product.id.toString() }}
            >
              <p>{product.title}</p>
            </Link>
            <div className="details-description--price">
              <p>
                <span className="whole">{price_whole}</span>
                <sup>
                  <span className="decimal">{price_decimal}</span>
                  <span className="symbol">€</span>
                </sup>
              </p>
            </div>
            <div className="details-description--present">
              <p className="stock">En stock</p>
              <div className="present-container">
                <input
                  type="checkbox"
                  className="present-container--checkbox"
                  name="present"
                />
                <label htmlFor="present" className="present-container--label">
                  <p>
                    Ceci sera un cadeau
                    <Link className="detail-link" to="/">
                      {" "}
                      En savoir plus
                    </Link>
                  </p>
                </label>
              </div>
            </div>
          </div>
          <div className="details-ctas">
            <div className="details-ctas--quantity">
              {is_single ? (
                <button type="button" onClick={() => remove_from_cart(product)}>
                  <FaRegTrashCan className="icon" />
                </button>
              ) : (
                <button type="button" onClick={() => remove_from_cart(product)}>
                  <FaMinus className="icon" />
                </button>
              )}

              <p>{product.quantity}</p>
              <button type="button" onClick={() => add_to_cart(product)}>
                <FaPlus />
              </button>
            </div>
            <span className="details-ctas--separator" />
            <button
              type="button"
              className="details-ctas--link"
              onClick={() => clear_cart(product)}
            >
              supprimer
            </button>
            <span className="details-ctas--separator" />
            <button className="details-ctas--link" type="button">
              Mettre de côté
            </button>
            <span className="details-ctas--separator" />
            <button className="details-ctas--link" type="button">
              Voir plus de produits similaires
            </button>
            <span className="details-ctas--separator" />
            <button className="details-ctas--link" type="button">
              Partager
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default CartItem;
