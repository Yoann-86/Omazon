import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { ITag } from "../../@Types";

const API_URL = import.meta.env.VITE_API_URL;

const actionAsyncFetchTags = createAsyncThunk("tag/GET_TAGS", async () => {
  const result = await axios.get(`${API_URL}tags`);
  return result.data as ITag[];
});

export default actionAsyncFetchTags;
