import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type ICart from "../../@Types/cart";

const API_URL = import.meta.env.VITE_API_URL;

const actionAsyncFetchCart = createAsyncThunk("cart/GET_CART", async () => {
  const result = await axios.get(`${API_URL}carts`);

  return result.data as ICart[];
});

export default actionAsyncFetchCart;
