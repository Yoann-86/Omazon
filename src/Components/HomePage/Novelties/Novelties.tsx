import type IProduct from "../../../@Types/product";
import "./Novelties.scss";
import Product from "../Products/Product/Product";

interface NoveltiesProps {
  products: IProduct[];
  addToCart: (product: IProduct) => void;
}

function Novelties({ products, addToCart }: NoveltiesProps) {
  return (
    <div className="novelties">
      <h2 className="novelties-title">Nouveautés</h2>
      <div className="novelties-list">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCart={addToCart}
            tag={null}
          />
        ))}
      </div>
    </div>
  );
}

export default Novelties;
