import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.scss";
import Header from "./Components/Header/Header";
import HomePage from "./Components/HomePage/HomePage";
import ProductPage from "./Components/ProductPage/ProductPage";
import Error404 from "./Components/Error404/Error404";
import CategoryPage from "./Components/CategoryPage/CategoryPage";
import CartPage from "./Components/CartPage/CartPage";
import actionAsyncFetchProducts from "./Components/store/middlewares/thunkFetchProducts";
import type { AppDispatch, RootState } from "./Components/store/store";
import actionAsyncFetchCategories from "./Components/store/middlewares/thunkFetchCategories";
import actionAsyncFetchCart from "./Components/store/middlewares/thunkFetchCarts";
import actionAsyncFetchTags from "./Components/store/middlewares/thunkFetchTags";
import Footer from "./Components/Footer/Footer";

//todo :
// Fermer la fenetre de connexion au clic en dehors de celle-ci
// Fakestoreapi.com

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
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
