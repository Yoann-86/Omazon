import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { IProduct } from "../../@Types";

const API_URL = import.meta.env.VITE_API_URL;

const actionAsyncFetchProducts = createAsyncThunk(
  "products/GET_PRODUCTS",
  async () => {
    const result = await axios.get(`${API_URL}products`);
    return result.data as IProduct[];
  },
);

export default actionAsyncFetchProducts;
