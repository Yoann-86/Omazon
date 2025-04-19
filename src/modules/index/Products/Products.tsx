import { useQuery } from "@tanstack/react-query";

import "modules/Index/Products/Products.scss";
import type { IProduct, ITag } from "types";

import { axiosInstance } from "infrastructure/api/axios";
import Product from "components/common/ProductCard/ProductCard";

function Products() {
  const { data: products = [], isLoading: loading_products } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const result = await axiosInstance.get("products");
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
    <div className="products">
      <h2 className="products--title">Tous nos produits</h2>
      <div className="products--list">
        {!loading_products &&
          !loading_tags &&
          products?.map((product) => (
            <Product
              key={product.id}
              product={product}
              tag={tags?.find((tag) => tag.id === product.tagId) || null}
            />
          ))}
      </div>
    </div>
  );
}

export default Products;
