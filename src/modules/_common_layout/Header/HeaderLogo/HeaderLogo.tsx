import { Link } from "@tanstack/react-router";
import "modules/_common_layout/Header/HeaderLogo/HeaderLogo.scss";

function HeaderLogo() {
  return (
    <Link to="/" aria-label="Omazon - Retour à l'accueil">
      <img src="/logos/omazon.svg" alt="Logo Omazon" />
    </Link>
  );
}

export default HeaderLogo;
