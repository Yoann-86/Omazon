import { useSelector } from "react-redux";

import "./Categories.scss";

import CategoryCard from "@/Components/Common/CategoryCard/CategoryCard";
import type { RootState } from "@/store/store";

function Categories() {
  // Store state :
  const categories = useSelector(
    (state: RootState) => state.categoryStore.categories,
  );
  return (
    <div className="categories desktop-ui">
      <h2 className="categories--header">Catégories à l'honneur</h2>
      <div className="categories--list">
        {categories?.map((category) => (
          <CategoryCard category={category} key={category.id} />
        ))}
      </div>
    </div>
  );
}

export default Categories;
