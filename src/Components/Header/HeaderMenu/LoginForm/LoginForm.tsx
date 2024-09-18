import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import "./LoginForm.scss";
import axios from "axios";
import type IUser from "../../../../../@Types/user";

interface LoginFormProps {
  domNode: HTMLElement | null;
  openModal: boolean;
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
  userName: string;
  setUSername: React.Dispatch<React.SetStateAction<string>>;
}

interface IError {
  status: number;
  message: string;
}

function LoginForm({
  domNode,
  openModal,
  isLogged,
  setIsLogged,
  setUSername,
}: LoginFormProps) {
  const API_URL = import.meta.env.VITE_API_URL;

  const inputRef = useRef<HTMLInputElement>(null);

  const [message, setMessage] = useState("");
  const [user, setUser] = useState<IUser>();

  const handleSubmitLoginForm = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const result = await axios.post(`${API_URL}login`, { email, password });
      const loggedUser = result.data as IUser;
      setUser(loggedUser);

      handleLogin(loggedUser);
    } catch (error) {
      console.error("Erreur renvoyée par le serveur ", (error as IError).message);
      if ((error as IError).status === 401) {
        return setMessage("Erreur d'authentification");
      }
      if ((error as IError).status === 404) {
        return setMessage("Erreur serveur non atteint");
      }
    }
  };

  const handleLogin = (user: IUser) => {
    setMessage("");
    setIsLogged(true);
    setUSername(user.firstName);
    localStorage.setItem("token", user.accessToken);
    localStorage.setItem("firstName", user.firstName);
  };

  const handleLogout = () => {
    setIsLogged(false);
    setUSername("");
    localStorage.removeItem("token");
    localStorage.removeItem("firstName");
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
                            {user?.firstName} {user?.lastName}
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
