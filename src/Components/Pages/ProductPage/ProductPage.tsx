import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
import DOMPurify from "dompurify";

import "./ProductPage.scss";

import type { IProduct } from "@/@Types";

// interface ProductPageProps {}

function ProductPage() {
  const [product, setProduct] = useState<IProduct | null>(null);
  const [redirect, setRedirect] = useState(false);

  const pricePrimary = product?.price.toString().split(".")[0];
  const priceDecimal = product?.price.toString().split(".")[1];

  const API_URL = import.meta.env.VITE_API_URL;
  const params = useParams();

  const cleanHtml = product
    ? DOMPurify.sanitize(product.description, { FORBID_TAGS: ["img"] })
    : "";

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    const fetchProductData = async () => {
      try {
        const result = await axios.get(`${API_URL}products/${params.id}`);
        setProduct(result.data);
      } catch (error) {
        console.error(error);
        setRedirect(true);
      }
    };
    fetchProductData();
    scrollToTop();
  }, [params]);

  if (redirect) return <Navigate to="/404" replace />;

  return (
    <section className="product-page">
      <figure className="product-page--figure">
        <img src={`${product?.image}`} alt="" />
        <div className="img-filter" />
      </figure>
      <div className="product-page--description">
        <h2>{product?.title}</h2>
        <span />
        <div>
          <div className="price-component">
            <p>
              {pricePrimary}
              {priceDecimal && priceDecimal.length !== 0 ? (
                <span className="decimal">
                  ,
                  {priceDecimal.length === 1
                    ? `${priceDecimal}0`
                    : priceDecimal}
                  €
                </span>
              ) : (
                <span className="decimal">,00€</span>
              )}
            </p>
          </div>
          <button type="button" className="button-add-cart">
            Ajouter au panier
          </button>
        </div>
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
        <p dangerouslySetInnerHTML={{ __html: cleanHtml }} />
      </div>
    </section>
  );
}

export default ProductPage;
