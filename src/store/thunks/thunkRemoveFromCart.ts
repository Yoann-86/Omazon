import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import type { IProduct } from "@/@Types";

const API_URL = import.meta.env.VITE_LOCAL_API_URL;

const actionAsyncRemoveFromCart = createAsyncThunk<
  IProduct[],
  { userId: number; productId: number; deleteAll: boolean },
  { rejectValue: string }
>(
  "cart/PUT_CART",
  async ({ productId, userId, deleteAll }, { rejectWithValue }) => {
    try {
      const result = await axios.put(
        `${API_URL}cart`,
        {
          productId,
          userId,
          deleteAll,
        },
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        },
      );

      return result.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.data) {
          return rejectWithValue(error.response.data.message);
        }
        return rejectWithValue(error.message);
      }
      return rejectWithValue("# : An unexpected error occurred.");
    }
  },
);

export default actionAsyncRemoveFromCart;
