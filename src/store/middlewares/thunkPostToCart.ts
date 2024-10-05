import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import type { IProduct } from "@/@Types";

const API_URL = import.meta.env.VITE_LOCAL_API_URL;

const actionAsyncPostToCart = createAsyncThunk<
  IProduct[],
  { userId: number; productId: number },
  { rejectValue: string }
>("cart/POST_CART", async ({ productId, userId }, { rejectWithValue }) => {
  try {
    const result = await axios.post(
      `${API_URL}cart`,
      {
        productId,
        userId,
      },
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      },
    );
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

export default actionAsyncPostToCart;
