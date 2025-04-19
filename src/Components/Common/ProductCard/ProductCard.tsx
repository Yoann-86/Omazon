import { Link } from "@tanstack/react-router";

import "components/common/ProductCard/ProductCard.scss";

import type { IProduct } from "types";
import type { ITag } from "types";
import AddToCartBtn from "components/common/Buttons/AddToCartBtn/AddToCartBtn";

interface ProductProps {
  product: IProduct;
  tag: ITag | null;
}

function Product({ product, tag }: ProductProps) {
  // Variables :
  const API_URL = import.meta.env.VITE_LOCAL_API_URL;
  const pricePrimary = product.price.toString().split(".")[0];
  const priceDecimal = product.price.toString().split(".")[1];

  return (
    <>
      <div className="product-card">
        <Link to="/product/$id" params={{ id: product.id.toString() }}>
          <div className="product-card-img">
            <div className="product-card-img--filter" />
            <img
              src={`${API_URL}pictures/products/${product.image}`}
              alt=""
              className="product-card-img--image"
            />
          </div>
        </Link>
        <div className="product-card--title">
          <Link to="/product/$id" params={{ id: product.id.toString() }}>
            <p>{product.title}</p>
          </Link>
        </div>
        <div className="price-component">
          <p>
            {pricePrimary}
            {priceDecimal && priceDecimal.length !== 0 ? (
              <span className="decimal">
                ,{priceDecimal.length === 1 ? `${priceDecimal}0` : priceDecimal}
                €
              </span>
            ) : (
              <span className="decimal">,00€</span>
            )}
          </p>
        </div>
        <div className="product-card--button">
          <AddToCartBtn product={product} />
        </div>

        <div className={tag ? "product-card--tag" : "hidden"}>
          {product.tagId === 1 ? (
            <p className={`tag-component ${tag?.type}`}>
              Choix <span>d'Omazon</span>
            </p>
          ) : (
            <p className={`tag-component ${tag?.type}`}>{tag?.text}</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Product;
