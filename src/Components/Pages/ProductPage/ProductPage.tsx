import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import DOMPurify from "dompurify";

import "./ProductPage.scss";

import type { RootState } from "@/store/store";
import AddToCartBtn from "@/Components/Common/Buttons/AddToCartBtn/AddToCartBtn";

function ProductPage() {
  const params = useParams();

  // Store states :
  const product = useSelector((state: RootState) =>
    state.productStore.products.find(
      (product) => product.id === Number(params.id),
    ),
  );
  console.log(product);

  // Local variables :
  const pricePrimary = product?.price.toString().split(".")[0];
  const priceDecimal = product?.price.toString().split(".")[1];
  const cleanHtml = product
    ? DOMPurify.sanitize(product.description, { FORBID_TAGS: ["img"] })
    : "";

  // Effects :
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    scrollToTop();
  }, []);

  if (!product) return <Navigate to="/404" replace />;

  return (
    <section className="product-page">
      {product ? (
        <>
          <figure className="product-page--figure">
            <img src={`${product.image}`} alt="" />
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

              {product && <AddToCartBtn product={product} />}
            </div>
            {/* biome-ignore lint/security/noDangerouslySetInnerHtml: HTML sanitized with DomPurify */}
            <p dangerouslySetInnerHTML={{ __html: cleanHtml }} />
          </div>
        </>
      ) : (
        <p>Erreur de récupération des données</p>
      )}
    </section>
  );
}

export default ProductPage;
