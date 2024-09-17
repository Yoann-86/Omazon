import { useState } from "react";
import "./HeaderMenu.scss";
import LoginForm from "./LoginForm/LoginForm";
import { Link } from "react-router-dom";

interface HeaderMenuProps {
  count: number;
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
  userName: string;
  setUSername: React.Dispatch<React.SetStateAction<string>>;
}

function HeaderMenu({
  count,
  isLogged,
  setIsLogged,
  userName,
  setUSername,
}: HeaderMenuProps) {
  const [openConnexionModal, setOpenConnexionModal] = useState(false);

  const handleOpenModal = () => {
    openConnexionModal
      ? setOpenConnexionModal(false)
      : setOpenConnexionModal(true);
  };

  const domNode = document.getElementById("account");

  return (
    <div className="right-menu">
      <div className="account" id="account">
        <p className="account-text">
          Bonjour, {(userName.length > 0 && userName) || "identifiez-vous"}
        </p>
        <div className="account--frame1">
          <button
            className="account--frame1-button button-reset"
            type="button"
            onClick={handleOpenModal}
          >
            <p className="account--frame1-text">Compte et listes</p>
            <img
              className="account--frame1-img"
              src="/icons/caret-down.svg"
              alt=""
            />
          </button>
        </div>
        <LoginForm
          domNode={domNode}
          openModal={openConnexionModal}
          isLogged={isLogged}
          setIsLogged={setIsLogged}
          userName={userName}
          setUSername={setUSername}
        />
      </div>
      <Link to="/cart" className="cart">
        <div className="cart-icon">
          <img className="cart-icon--img" src="/icons/cart.svg" alt="" />
          <p
            className={
              count > 9 ? "cart-icon--count count-more" : "cart-icon--count"
            }
          >
            {count}
          </p>
        </div>
        <p className="cart-text">Panier</p>
      </Link>
    </div>
  );
}

export default HeaderMenu;
