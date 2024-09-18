import { createReducer } from "@reduxjs/toolkit";
import type { ICategory } from "../../../@Types";
import actionAsyncFetchCategories from "../middlewares/thunkFetchCategories";

interface CategoriesStateApp {
  categories: ICategory[];
}
const initialState: CategoriesStateApp = {
  categories: [],
};

const categoriesReducer = createReducer(initialState, (builder) => {
  builder.addCase(actionAsyncFetchCategories.fulfilled, (state, action) => {
    state.categories = action.payload;
  });
});

export default categoriesReducer;
