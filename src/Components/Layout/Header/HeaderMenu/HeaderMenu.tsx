import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./HeaderMenu.scss";

import LoginForm from "../../../Common/LoginModal/LoginModal";
import type { RootState } from "@/store/store";

function HeaderMenu() {
  // Store state #1
  const userName = useSelector(
    (state: RootState) => state.appStore.login.user.firstName,
  );
  // Store state #2
  const cartCount = useSelector(
    (state: RootState) => state.cartStore.cart,
  ).length;
  // Store state #4
  const isLogged = useSelector((state: RootState) => state.appStore.isLogged);

  // Component state #1
  const [openConnexionModal, setOpenConnexionModal] = useState(false);

  // handleFunction #1
  const handleOpenModal = () => {
    setOpenConnexionModal(!openConnexionModal);
  };

  // Local variable #1
  const domNode = document.getElementById("account");

  //* JSX
  return (
    <>
      <div className="right-menu">
        <div className="mobile-account">
          <Link to="/signin" type="button">
            <img src="/Omazon/icons/user.svg" alt="" />
          </Link>
        </div>
        <div className="account" id="account">
          <p className="account-text">Bonjour, {userName}</p>
          <div className="account--frame1">
            <button
              className="account--frame1-button button-reset"
              type="button"
              onClick={handleOpenModal}
            >
              <p className="account--frame1-text">Compte et listes</p>
              <img
                className="account--frame1-img"
                src="/Omazon/icons/caret-down.svg"
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

        <Link to="/cart" className="cart">
          <div className="cart-icon">
            <img
              className="cart-icon--img"
              src="/Omazon/icons/cart.svg"
              alt=""
            />
            <p
              className={
                cartCount > 9
                  ? "cart-icon--count count-more"
                  : "cart-icon--count"
              }
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
