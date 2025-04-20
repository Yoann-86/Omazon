import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { useSelector } from "react-redux";

import "modules/_common_layout/Header/HeaderMenu/HeaderMenu.scss";

import LoginForm from "../../../../components/common/LoginModal/LoginModal";
import type { RootState } from "store/store";

function HeaderMenu() {
  // Store state #1
  const userName = useSelector(
    (state: RootState) => state.appStore.login.user.firstName,
  );
  // Store state #2
  const cartCount = useSelector(
    (state: RootState) => state.cartStore.cart,
  ).length;
  // Store state #3
  const isLogged = useSelector((state: RootState) => state.appStore.isLogged);

  // Component state #1
  const [openConnexionModal, setOpenConnexionModal] = useState(false);

  // handleFunction #1
  const handleOpenModal = () => {
    setOpenConnexionModal(!openConnexionModal);
  };

  // Local variable #1
  const domNode = document.getElementById("account");

  return (
    <>
      <div className="right-menu">
        {/* <div className="mobile-account">
          <Link to="/signin" type="button">
            <img src="/icons/user.svg" alt="" />
          </Link>
        </div> */}
        <div className="account" id="account" aria-label="Menu de connexion">
          <p className="account-text">Bonjour, {userName}</p>
          <div className="account--frame1">
            <button
              className="account--frame1-button button-reset"
              type="button"
              onClick={handleOpenModal}
              aria-label="Ouvrir le menu de connexion"
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
            toggleModal={setOpenConnexionModal}
          />
        </div>

        <Link to="/cart" className="cart" aria-label="Accéder au panier">
          <div className="cart-icon">
            <img className="cart-icon--img" src="/icons/cart.svg" alt="" />
            <p
              className={
                cartCount > 9
                  ? "cart-icon--count count-more"
                  : "cart-icon--count"
              }
              aria-label="Nombre d'articles dans le panier"
            >
              {isLogged ? cartCount : 0}
            </p>
          </div>
          <p className="cart-text desktop-ui">Panier</p>
        </Link>
      </div>
    </>
  );
}

export default HeaderMenu;
