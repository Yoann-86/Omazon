import type IProduct from "../../../@Types/product";
import type ITag from "../../../@Types/tag";
import Product from "./Product/Product";
import "./Products.scss";

interface ProductsProps {
  products: IProduct[];
  tags: ITag[];
  addToCart: (product: IProduct) => void;
}

function Products({ products, addToCart, tags }: ProductsProps) {
  return (
    <div className="products">
      <h2 className="products--title">Tous nos produits</h2>
      <div className="products--list">
        {products?.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCart={addToCart}
            tag={tags.find((tag) => tag.id === product.tagId) || null}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
