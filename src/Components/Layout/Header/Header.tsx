import { useEffect, useState } from "react";

import "./Header.scss";

import HeaderForm from "./HeaderForm/HeaderForm";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderMenu from "./HeaderMenu/HeaderMenu";

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
    <section className={!scroll ? "header" : "header header--scroll"}>
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
