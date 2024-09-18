import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import "./App.scss";
import type { ICategory, IProduct, ITag } from "./@Types/index";

import HomePage from "./Components/HomePage/HomePage";
import ProductPage from "./Components/ProductPage/ProductPage";
import Error404 from "./Components/Error404/Error404";
import CategoryPage from "./Components/CategoryPage/CategoryPage";
import CartPage from "./Components/CartPage/CartPage";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

//todo :
// Fermer la fenetre de connexion au clic en dehors de celle-ci
// Fakestoreapi.com

function App() {
  //* Environment
  const API_URL = import.meta.env.VITE_API_URL;

  //* States
  // Data
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [tags, setTags] = useState<ITag[]>([]);
  // Cart
  const [cartProducts, setCartProducts] = useState<number[]>([]);
  // User
  const [isLogged, setIsLogged] = useState(false);
  const [userName, setUSername] = useState("");

  //* Variables
  const cartProductsCount = cartProducts.length;

  //* Effects
  // Fetch datas
  useEffect(() => {
    const fetchCategories = async () => {
      const result = await axios.get(`${API_URL}categories`);
      setCategories(result.data);
    };

    const fetchProducts = async () => {
      const result = await axios.get(`${API_URL}products`);
      setProducts(result.data);
    };

    const fetchTags = async () => {
      const result = await axios.get(`${API_URL}tags`);
      setTags(result.data);
    };

    fetchCategories();
    fetchProducts();
    fetchTags();
  }, []);

  // Check authentication
  useEffect(() => {

    const userAuthenticate = localStorage.getItem("token");
    const userFirstName = localStorage.getItem("firstName");
    if (userAuthenticate && userFirstName) {
      setIsLogged(true);
      setUSername(userFirstName);
    }
  }, [isLogged]);

  // Set Page title
  useEffect(() => {
    document.title =
      cartProductsCount > 0
        ? cartProductsCount === 1
          ? `Omazon (panier: ${cartProductsCount} produit)`
          : `Omazon (panier: ${cartProductsCount} produits)`
        : "Omazon";
  }, [cartProductsCount]);

  //* JSX
  return (
    <>
      <Header
        categories={categories}
        products={products}
        cartCount={cartProducts.length}
        isLogged={isLogged}
        setIsLogged={setIsLogged}
        userName={userName}
        setUSername={setUSername}
      />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              products={products}
              categories={categories}
              cartProducts={cartProducts}
              addProduct={setCartProducts}
              tags={tags}
            />
          }
        />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route
          path="/category/:slug"
          element={
            <CategoryPage
              categories={categories}
              products={products}
              addToCart={setCartProducts}
              cartProducts={cartProducts}
              tags={tags}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <CartPage
              products={products}
              setIsLogged={setIsLogged}
              setUSername={setUSername}
              isLogged={isLogged}
            />
          }
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
