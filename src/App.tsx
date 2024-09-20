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
import Footer from "./Components/Layout/Footer/Footer";
import Header from "./Components/Layout/Header/Header";
// Pages
import HomePage from "./Components/Pages/HomePage/HomePage";
import ProductPage from "./Components/Pages/ProductPage/ProductPage";
import CategoryPage from "./Components/Pages/CategoryPage/CategoryPage";
import CartPage from "./Components/Pages/Cart/CartPage";
import Error404 from "./Components/Pages/NotFound/NotFound";
import Layout from "./Components/Layout";

//todo :
// - Fermer la fenetre de connexion au clic en dehors de celle-ci
// - Fakestoreapi.com
// -

function App() {
  // Hooks
  const dispatch: AppDispatch = useDispatch();

  // Store states
  const userId = useSelector(
    (state: RootState) => state.appStore.login.user.id,
  );
  const cartProductsCount = useSelector(
    (state: RootState) =>
      state.cartStore.cart.filter((cart) => cart.userId === userId).length,
  );
  const isLogged = useSelector((state: RootState) => state.appStore.isLogged);

  // Effects [fetch datas]
  useEffect(() => {
    dispatch(actionAsyncFetchProducts());
    dispatch(actionAsyncFetchCategories());
    dispatch(actionAsyncFetchTags());
  }, [dispatch]);

  useEffect(() => {
    if (isLogged) dispatch(actionAsyncFetchCart());
  }, [dispatch, isLogged]);

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
          path="*"
          element={
            <Layout>
              <Error404 />
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
