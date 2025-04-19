import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import "./CategoryPage.scss";
import type { IProduct, ITag, ICategory } from "@/@Types";

import Product from "@/Components/Common/ProductCard/ProductCard";
import { axiosInstance } from "@/infrastructure/api/axios";

function CategoryPage() {
  const params = useParams();

  const { data: category, isLoading: loading_category } = useQuery({
    queryKey: ["categories", `${params.slug}`],
    enabled: !!params.slug,
    queryFn: async () => {
      const result = await axiosInstance.get("categories");
      const findedCategory = result.data.data.categories.find(
        (category: ICategory) => category.slug === params.slug,
      );
      return findedCategory as ICategory;
    },
  });

  const { data: products = [], isLoading: loading_products } = useQuery({
    queryKey: ["products", "category", `${category?.id}`],
    // We need to fetch products only if we have a category
    enabled: !!category?.id,
    queryFn: async () => {
      const result = await axiosInstance.get(
        `products?categoryId=${category?.id}`,
      );
      return result.data.data.products as IProduct[];
    },
  });

  const { data: tags, isLoading: loading_tags } = useQuery({
    queryKey: ["tags"],
    queryFn: async () => {
      const result = await axiosInstance.get("tags");
      return result.data.data.tags as ITag[];
    },
  });

  return (
    <section className="category-page">
      {!loading_products && !loading_category && !loading_tags && (
        <>
          <h2>{category?.title}</h2>
          <div className="product-list">
            {products.map((product) => (
              <Product
                key={product.id}
                product={product}
                tag={tags?.find((tag) => tag.id === product.tagId) || null}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}

export default CategoryPage;
