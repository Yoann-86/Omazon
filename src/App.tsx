/**
 * Externals imports
 */
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
/**
 * Style import
 */
import "./App.scss";
/**
 * Internal imports
 */
// Store
import type { AppDispatch, RootState } from "./store/store";
import actionAsyncFetchCategories from "./store/middlewares/thunkFetchCategories";
import actionAsyncFetchCart from "./store/middlewares/thunkFetchCarts";
import actionAsyncFetchTags from "./store/middlewares/thunkFetchTags";
import actionAsyncFetchProducts from "./store/middlewares/thunkFetchProducts";
// Layout
import Layout from "./Components/Layout";
// Pages
import HomePage from "./Components/Pages/HomePage/HomePage";
import ProductPage from "./Components/Pages/ProductPage/ProductPage";
import CategoryPage from "./Components/Pages/CategoryPage/CategoryPage";
import CartPage from "./Components/Pages/Cart/CartPage";
import Signin from "./Components/Pages/Mobile/Signin/Signin";
import NotFound from "./Components/Pages/NotFound/NotFound";

//todo :
// - Fermer la fenetre de connexion au clic en dehors de celle-ci
// - Ajouter modal de connexion en version mobile

function App() {
  // Hooks
  const dispatch: AppDispatch = useDispatch();

  // Store states
  const cartProductsCount = useSelector(
    (state: RootState) => state.cartStore.cart,
  ).length;

  const isLogged = useSelector((state: RootState) => state.appStore.isLogged);
  const token = useSelector(
    (state: RootState) => state.appStore.login.user.accessToken,
  );

  // Effects [fetch datas]
  useEffect(() => {
    dispatch(actionAsyncFetchProducts());
    dispatch(actionAsyncFetchCategories());
    dispatch(actionAsyncFetchTags());
  }, [dispatch]);

  useEffect(() => {
    if (isLogged && token) dispatch(actionAsyncFetchCart({ token }));
  }, [dispatch, isLogged, token]);

  // Effetct [Set Page title]
  useEffect(() => {
    document.title =
      isLogged && cartProductsCount > 0
        ? cartProductsCount === 1
          ? `Omazon (panier: ${cartProductsCount} produit)`
          : `Omazon (panier: ${cartProductsCount} produits)`
        : "Omazon";
  }, [cartProductsCount, isLogged]);

  //* JSX
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/product/:id"
          element={
            <Layout>
              <ProductPage />
            </Layout>
          }
        />
        <Route
          path="/category/:slug"
          element={
            <Layout>
              <CategoryPage />
            </Layout>
          }
        />
        <Route
          path="/signin"
          element={
            <Layout>
              <Signin />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <NotFound />
            </Layout>
          }
        />
        <Route
          path="/cart"
          element={
            <Layout>
              <CartPage />
            </Layout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
