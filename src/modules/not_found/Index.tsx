import { Link } from "@tanstack/react-router";
import "modules/not_found/Index.scss";

// interface ProductPageProps {}

export const Index = () => {
  return (
    <section className="error-404 py-72">
      <h1>La page n'existe pas</h1>
      <Link to="/" className="">
        Retour à l'accueil
      </Link>
    </section>
  );
};
