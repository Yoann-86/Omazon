import { useParams } from "react-router-dom";
import "./CategoryPage.scss";
import { useEffect, useState } from "react";
import type IProduct from "../../@Types/product";
import type ICategory from "../../@Types/category";
import Product from "../HomePage/Products/Product/Product";
import type { RootState } from "../store/store";
import { useSelector } from "react-redux";

function CategoryPage() {
  // Store states :
  const categories = useSelector(
    (state: RootState) => state.categoryStore.categories,
  );
  const products = useSelector(
    (state: RootState) => state.productStore.products,
  );
  const tags = useSelector((state: RootState) => state.tagStore.tags);

  // Component States :
  const [currentCategory, setCurrentCategory] = useState<null | ICategory>(
    null,
  );
  const [categoryProductList, setCategoryProducList] = useState<IProduct[]>([]);

  // Variables :
  const params = useParams();

  // Effects :
  useEffect(() => {
    const findCategory = () => {
      if (categories.length > 0) {
        const findedCategory = categories.find(
          (category) => category.slug === params.slug,
        );

        // todo => Redirect if (!findedCategory)
        if (!findedCategory) return;

        const filteredProducts = products?.filter(
          (product) => product.categoryId === findedCategory?.id,
        );
        if (filteredProducts.length > 0)
          setCategoryProducList(filteredProducts);

        return setCurrentCategory(findedCategory);
      }
    };

    findCategory();
  }, [categories, products, params]);

  //* JSX :

  return (
    <section className="category-page">
      <h2>{currentCategory?.title}</h2>
      <div className="product-list">
        {categoryProductList.map((product) => (
          <Product
            key={product.id}
            product={product}
            tag={tags.find((tag) => tag.id === product.tagId) || null}
          />
        ))}
      </div>
    </section>
  );
}

export default CategoryPage;
