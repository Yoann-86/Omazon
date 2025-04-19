import "modules/Index.scss";
import Categories from "modules/index/Categories/Categories";
import Products from "modules/index/Products/Products";
import Novelties from "modules/index/Novelties/Novelties";

export const Index = () => {
  return (
    <section className="home">
      <Categories />
      <Novelties />
      <Products />
    </section>
  );
};
