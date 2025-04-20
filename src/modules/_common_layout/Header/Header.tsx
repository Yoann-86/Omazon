import { useEffect, useState } from "react";

import "modules/_common_layout/Header/Header.scss";

import HeaderForm from "modules/_common_layout/Header/HeaderForm/HeaderForm";
import HeaderLogo from "modules/_common_layout/Header/HeaderLogo/HeaderLogo";
import HeaderMenu from "modules/_common_layout/Header/HeaderMenu/HeaderMenu";

function Header() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50) setScroll(false);
      else setScroll(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={!scroll ? "header" : "header header--scroll"}
      id="header"
      aria-label="En-tête de la page"
    >
      <div className="desktop-ui">
        <HeaderLogo />
        <HeaderForm />
        <HeaderMenu />
      </div>
      <div className="mobile-ui">
        <div className="header-top">
          <HeaderLogo />
          <HeaderMenu />
        </div>
        <div className="header-bottom">
          <HeaderForm />
        </div>
      </div>
    </section>
  );
}

export default Header;
