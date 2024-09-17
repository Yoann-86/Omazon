import "./HomePage.scss";
import Categories from "./Categories/Categories";
import Products from "./Products/Products";
import Novelties from "./Novelties/Novelties";
import type ICategory from "../../@Types/category";
import type IProduct from "../../@Types/product";
import type ITag from "../../@Types/tag";

interface HomePageProps {
  categories: ICategory[];
  products: IProduct[];
  tags: ITag[];
  cartProducts: number[];
  addProduct: React.Dispatch<React.SetStateAction<number[]>>;
}

function HomePage({
  categories,
  products,
  addProduct,
  tags,
  cartProducts,
}: HomePageProps) {
  const newProducts = products?.filter((product) => product.tagId === 2);

  const handleAddToCart = (product: IProduct) => {
    if (cartProducts.length > 0 && cartProducts.includes(product.id)) return;
    addProduct((current) => [...current, product.id]);
  };

  return (
    <section className="home">
      <Categories categories={categories} />
      <Novelties
        products={newProducts || products}
        addToCart={handleAddToCart}
      />
      <Products products={products} addToCart={handleAddToCart} tags={tags} />
    </section>
  );
}

export default HomePage;
