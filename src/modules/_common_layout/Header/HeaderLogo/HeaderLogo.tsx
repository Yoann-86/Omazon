import { Link } from "@tanstack/react-router";
import "modules/_common_layout/Header/HeaderLogo/HeaderLogo.scss";

function HeaderLogo() {
  return (
    <h1>
      <Link to="/">
        <img src="/logos/omazon.svg" alt="paizjd" />
      </Link>
    </h1>
  );
}

export default HeaderLogo;
