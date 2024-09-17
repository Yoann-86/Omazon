import { Navigate, useParams } from "react-router-dom";
import "./CategoryPage.scss";
import { useEffect, useState } from "react";
import type IProduct from "../../@Types/product";
import type ICategory from "../../@Types/category";
import Product from "../HomePage/Products/Product/Product";
import type ITag from "../../@Types/tag";

interface CategoryPageProps {
  categories: ICategory[] | null;
  products: IProduct[] | null;
  tags: ITag[];
  cartProducts: number[];
  addToCart: React.Dispatch<React.SetStateAction<number[]>>;
}

function CategoryPage({
  categories,
  products,
  tags,
  addToCart,
  cartProducts,
}: CategoryPageProps) {
  const [category, setCategory] = useState<ICategory | null>(null);
  const [productList, setProducList] = useState<IProduct[]>([]);
  const [redirect, setRedirect] = useState(false);

  const params = useParams();

  const handleAddToCart = (product: IProduct) => {
    if (cartProducts.length > 0 && cartProducts.includes(product.id)) return;
    addToCart((current) => [...current, product.id]);
  };

  useEffect(() => {
    const findCategory = () => {
      if (categories && categories.length > 0) {
        const findedCategory = categories.find(
          (category) => category.slug === params.slug,
        );

        if (findedCategory) {
          const filteredProducts = products?.filter(
            (product) => product.categoryId === findedCategory.id,
          );
          if (filteredProducts && filteredProducts.length > 0)
            setProducList(filteredProducts);

          return setCategory(findedCategory);
        }
        setRedirect(true);
      }
    };

    findCategory();
  }, [categories, products, params]);

  if (redirect) return <Navigate to="/404" replace />;

  return (
    <section className="category-page">
      <h2>{category?.title}</h2>
      <div className="product-list">
        {productList.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCart={handleAddToCart}
            tag={tags.find((tag) => tag.id === product.tagId) || null}
          />
        ))}
      </div>
    </section>
  );
}

export default CategoryPage;
