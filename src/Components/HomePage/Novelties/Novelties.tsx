import "./Novelties.scss";
import Product from "../Products/Product/Product";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

function Novelties() {
  // Store state :
  const products = useSelector(
    (state: RootState) => state.productStore.products,
  );

  //* JSX
  return (
    <div className="novelties">
      <h2 className="novelties-title">Nouveautés</h2>
      <div className="novelties-list">
        {products.map((product) => (
          <Product key={product.id} product={product} tag={null} />
        ))}
      </div>
    </div>
  );
}

export default Novelties;
