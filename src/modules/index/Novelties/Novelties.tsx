import { useQuery } from "@tanstack/react-query";

import "modules/Index/Novelties/Novelties.scss";
import type { IProduct, ITag } from "types";

import { axiosInstance } from "infrastructure/api/axios";
import Product from "components/common/ProductCard/ProductCard";

function Novelties() {
  const { data: tagId, isLoading: loading_tagId } = useQuery({
    queryKey: ["tags", "tagId", "new"],
    queryFn: async () => {
      const result = await axiosInstance.get("tags");
      const newTag = result.data.data.tags.find(
        (tag: ITag) => tag.type === "new",
      );
      return newTag.id as number;
    },
  });

  const { data: products = [], isLoading: loading_products } = useQuery({
    queryKey: ["products", "new"],
    enabled: !!tagId,
    queryFn: async () => {
      const result = await axiosInstance.get("products");
      const newProducts = result.data.data.products.filter(
        (product: IProduct) => product.tagId === tagId,
      );
      return newProducts as IProduct[];
    },
  });

  return (
    <div className="novelties desktop-ui">
      <h2 className="novelties-title">Nouveautés</h2>
      <div className="novelties-list">
        {!loading_products &&
          !loading_tagId &&
          products.map((product) => (
            <Product key={product.id} product={product} tag={null} />
          ))}
      </div>
    </div>
  );
}

export default Novelties;
