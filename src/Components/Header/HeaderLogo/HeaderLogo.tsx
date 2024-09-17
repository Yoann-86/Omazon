import { Link } from "react-router-dom";
import "./HeaderLogo.scss";

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
