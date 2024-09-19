import "./Novelties.scss";
import Product from "../Products/Product/Product";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";
import groupByKeyWithValue from "../../../utils/groupByKeyWithFilter";

function Novelties() {
  // Store state :
  const products = useSelector(
    (state: RootState) => state.productStore.products,
  );

  const noveltiesTagId = useSelector(
    (state: RootState) =>
      state.tagStore.tags.find((tag) => tag.type === "new")?.id as number,
  );

  const newProducts =
    groupByKeyWithValue(products, "tagId", noveltiesTagId)[noveltiesTagId] ||
    [];

  //* JSX
  return (
    <div className="novelties">
      <h2 className="novelties-title">Nouveautés</h2>
      <div className="novelties-list">
        {newProducts.map((product) => (
          <Product key={product.id} product={product} tag={null} />
        ))}
      </div>
    </div>
  );
}

export default Novelties;
