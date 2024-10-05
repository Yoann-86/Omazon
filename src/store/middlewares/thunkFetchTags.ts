import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { ITag } from "@/@Types";

const API_URL = import.meta.env.VITE_LOCAL_API_URL;

const actionAsyncFetchTags = createAsyncThunk("tag/GET_TAGS", async () => {
  const result = await axios.get(`${API_URL}tags`);

  const response = result.data;
  if (response.status === "success") return response.data.tags as ITag[];
  return [] as ITag[];
});

export default actionAsyncFetchTags;
