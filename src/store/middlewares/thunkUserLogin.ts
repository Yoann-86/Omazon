import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { IUser } from "../../@Types";

const API_URL = import.meta.env.VITE_API_URL;

const actionAsyncUserLogin = createAsyncThunk<
  IUser,
  { email: string; password: string },
  { rejectValue: string }
>("app/LOGIN_USER", async (loginData, { rejectWithValue }) => {
  if (!loginData.email || !loginData.password)
    return rejectWithValue("Email and password are required");
  try {
    const result = await axios.post(`${API_URL}login`, loginData);
    return result.data as IUser;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(
        error.response?.data?.message || "An API error occurred",
      );
    }
    return rejectWithValue("An unknown error occured");
  }
});

export default actionAsyncUserLogin;
