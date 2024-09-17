import type { IProduct } from "../../../@Types";
import "./ProductElm.scss";

interface ProductElmProps {
  product: IProduct;
}

function ProductElm({ product }: ProductElmProps) {
  return (
    <section className="product-elm">
      <div className="separator" />
      <div className="flex-stretch">
        <div className="product-elm--details">
          <img src={`${product.image}`} alt="" />
          <p className="product-elm--title">{product.title}</p>
        </div>
        <p className="product-elm--price">{product.price}€</p>
      </div>
    </section>
  );
}

export default ProductElm;
