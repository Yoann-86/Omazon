import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import "./LoginForm.scss";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../../store/store";
import actionAsyncUserLogin from "../../../../store/middlewares/thunkUserLogin";
import { actionUserLogout } from "../../../../store/reducers/appReducer";

interface LoginFormProps {
  domNode: HTMLElement | null;
  openModal: boolean;
  toggleModal: React.Dispatch<React.SetStateAction<boolean>>;
}

//todo : error messages to refactor

function LoginForm({ domNode, openModal, toggleModal }: LoginFormProps) {
  const isLogged = useSelector((state: RootState) => state.appStore.isLogged);
  const userFirstName = useSelector(
    (state: RootState) => state.appStore.login.user.firstName,
  );
  const userLastName = useSelector(
    (state: RootState) => state.appStore.login.user.lastName,
  );
  const message = useSelector((state: RootState) => state.appStore.login.error);
  const dispatch: AppDispatch = useDispatch();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmitLoginForm = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    dispatch(actionAsyncUserLogin({ email, password }));
    toggleModal(false);
  };

  const handleLogout = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
    dispatch(actionUserLogout());
    toggleModal(false);
  };

  useEffect(() => {
    openModal && inputRef.current?.focus();
  }, [openModal]);

  return (
    <>
      {!domNode
        ? ""
        : openModal &&
          createPortal(
            <>
              <dialog className="account-modal">
                <div className="arrow-div" />
                {!isLogged ? (
                  <>
                    <form
                      method="POST"
                      className="account-modal--form"
                      onSubmit={handleSubmitLoginForm}
                    >
                      <div className="form-item">
                        <label htmlFor="email">Adresse e-mail</label>
                        <input
                          ref={inputRef}
                          type="text"
                          name="email"
                          id="email"
                          placeholder="nicole.martin@mail.fr"
                        />
                      </div>
                      <div className="form-item">
                        <label htmlFor="password">Mot de passe</label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                        />
                      </div>
                      <button type="submit" className="form-button">
                        Identifiez-vous
                      </button>
                    </form>
                    {message !== "" && (
                      <p className="error-message">{message}</p>
                    )}
                    <p className="account-modal--new-client">
                      Nouveau client ? <Link to="/">Commencer-ici.</Link>
                    </p>
                  </>
                ) : (
                  <div className="is-logged">
                    <div className="is-logged--profile">
                      <div className="left">
                        <figure>
                          <img src="/Omazon/icons/user.svg" alt="" />
                          <div className="img-background" />
                        </figure>

                        <div className="profil-who">
                          <p className="profil-who--name">
                            {userFirstName} {userLastName}
                          </p>
                          <p className="profil-who--status">
                            Titulaire du compte
                          </p>
                        </div>
                      </div>
                      <button type="button" className="button-reset right">
                        <p>Gérer les profils</p>
                        <img src="/Omazon/icons/chevron-right.svg" alt="" />
                      </button>
                    </div>
                    <button
                      type="button"
                      className="is-logged--button  button-reset"
                      onClick={handleLogout}
                    >
                      Déconnexion
                    </button>
                  </div>
                )}
              </dialog>
            </>,
            domNode,
          )}
    </>
  );
}

export default LoginForm;
