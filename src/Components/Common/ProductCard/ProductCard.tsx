import { Link } from "react-router-dom";

import "./ProductCard.scss";

import type IProduct from "@/@Types/product";
import type ITag from "@/@Types/tag";
import AddToCartBtn from "../Buttons/AddToCartBtn/AddToCartBtn";

interface ProductProps {
  product: IProduct;
  tag: ITag | null;
}

function Product({ product, tag }: ProductProps) {
  // Variables :
  const pricePrimary = product.price.toString().split(".")[0];
  const priceDecimal = product.price.toString().split(".")[1];

  return (
    <>
      <div className="product-card">
        <Link to={`/product/${product.id}`}>
          <div className="product-card-img">
            <div className="product-card-img--filter" />
            <img
              src={product.image}
              alt=""
              className="product-card-img--image"
            />
          </div>
        </Link>
        <div className="product-card--title">
          <Link to={`/product/${product.id}`}>
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
