import "./HomePage.scss";
import Categories from "./Categories/Categories";
import Products from "./Products/Products";
import Novelties from "./Novelties/Novelties";

function HomePage() {
  return (
    <section className="home">
      <Categories />
      <Novelties />
      <Products />
    </section>
  );
}

export default HomePage;
