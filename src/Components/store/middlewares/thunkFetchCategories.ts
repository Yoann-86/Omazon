import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { ICategory } from "../../../@Types";

const API_URL = import.meta.env.VITE_API_URL;

const actionAsyncFetchCategories = createAsyncThunk(
  "categories/GET_CATEGORIES",
  async () => {
    const result = await axios.get(`${API_URL}categories`);
    return result.data as ICategory[];
  },
);

export default actionAsyncFetchCategories;
