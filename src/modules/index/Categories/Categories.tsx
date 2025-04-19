import { useQuery } from "@tanstack/react-query";

import "modules/Index/Categories/Categories.scss";
import type { ICategory } from "types";

import { axiosInstance } from "infrastructure/api/axios";
import CategoryCard from "components/common/CategoryCard/CategoryCard";

function Categories() {
  const { data: categories, isLoading: loading_categories } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const result = await axiosInstance.get("categories");
      return result.data.data.categories as ICategory[];
    },
  });
  return (
    <div className="categories desktop-ui">
      <h2 className="categories--header">Catégories à l'honneur</h2>
      <div className="categories--list">
        {!loading_categories &&
          categories?.map((category) => (
            <CategoryCard category={category} key={category.id} />
          ))}
      </div>
    </div>
  );
}

export default Categories;
