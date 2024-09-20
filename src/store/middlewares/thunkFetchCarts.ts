import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

import type { IProduct } from "@/@Types";

const API_URL = import.meta.env.VITE_API_URL;

const actionAsyncFetchCart = createAsyncThunk<
  IProduct[],
  { token: string },
  { rejectValue: string }
>("cart/GET_CART", async (payload, { rejectWithValue }) => {
  try {
    const result = await axios.get(`${API_URL}cart`, {
      headers: {
        authorization: `Bearer ${payload.token}`,
      },
    });

    return result.data as IProduct[];
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.data) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue(error.message);
    }
    return rejectWithValue("# : An unexpected error occurred.");
  }
});

export default actionAsyncFetchCart;
