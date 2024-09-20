import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type ICart from "@/@Types/cart";

const API_URL = import.meta.env.VITE_API_URL;

const actionAsyncPostToCart = createAsyncThunk(
  "cart/POST_CART",
  async (product) => {
    const result = await axios.post(`${API_URL}carts`, { product });

    return result.data as ICart[];
  },
);

export default actionAsyncPostToCart;
