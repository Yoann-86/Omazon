import { useEffect, useRef, useState } from "react";
import type ICategory from "../../../@Types/category";
import type IProduct from "../../../@Types/product";
import "./Header.scss";
import HeaderForm from "./HeaderForm/HeaderForm";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderMenu from "./HeaderMenu/HeaderMenu";

interface HeaderProps {
  categories: ICategory[];
  products: IProduct[];
  cartCount: number;
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
  userName: string;
  setUSername: React.Dispatch<React.SetStateAction<string>>;
}

function Header({
  categories,
  products,
  cartCount,
  isLogged,
  setIsLogged,
  userName,
  setUSername,
}: HeaderProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
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
      ref={sectionRef}
      className={!scroll ? "header" : "header header--scroll"}
    >
      <HeaderLogo />
      <HeaderForm categories={categories} products={products} />
      <HeaderMenu
        count={cartCount}
        isLogged={isLogged}
        setIsLogged={setIsLogged}
        userName={userName}
        setUSername={setUSername}
      />
    </section>
  );
}

export default Header;
