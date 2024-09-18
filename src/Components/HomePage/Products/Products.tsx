import { useSelector } from "react-redux";
import Product from "./Product/Product";
import "./Products.scss";
import type { RootState } from "../../store/store";

function Products() {
  // Store state :
  // #1
  const products = useSelector(
    (state: RootState) => state.productStore.products,
  );
  // #2
  const tags = useSelector((state: RootState) => state.tagStore.tags);

  //* JSX
  return (
    <div className="products">
      <h2 className="products--title">Tous nos produits</h2>
      <div className="products--list">
        {products?.map((product) => (
          <Product
            key={product.id}
            product={product}
            tag={tags.find((tag) => tag.id === product.tagId) || null}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
