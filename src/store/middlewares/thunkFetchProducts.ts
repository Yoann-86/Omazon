import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { IProduct } from "@/@Types";

const API_URL = import.meta.env.VITE_LOCAL_API_URL;

const actionAsyncFetchProducts = createAsyncThunk(
  "products/GET_PRODUCTS",
  async () => {
    const result = await axios.get(`${API_URL}products`);
    const response = result.data;
    if (response.status === "success")
      return response.data.products as IProduct[];
    return [] as IProduct[];
  },
);

export default actionAsyncFetchProducts;
