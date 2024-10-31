import { createReducer } from "@reduxjs/toolkit";
import actionAsyncFetchProducts from "../thunks/thunkFetchProducts";
import type { IProduct } from "@/@Types";

interface ProductsStateApp {
  products: IProduct[];
}
const initialState: ProductsStateApp = {
  products: [],
};

const productsReducer = createReducer(initialState, (builder) => {
  builder.addCase(actionAsyncFetchProducts.fulfilled, (state, action) => {
    state.products = action.payload;
  });
});

export default productsReducer;
