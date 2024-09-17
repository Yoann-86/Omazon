import "./Categories.scss";
import CategoryCard from "./CategoryCard/CategoryCard";
import type ICategory from "../../../@Types/category";

interface CategoriesProps {
  categories: ICategory[] | null;
}

function Categories({ categories }: CategoriesProps) {
  return (
    <div className="categories">
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
