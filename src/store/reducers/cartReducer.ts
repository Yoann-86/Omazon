import { createAction, createReducer } from "@reduxjs/toolkit";

import type { IProduct } from "@/@Types";
import actionAsyncFetchCart from "../middlewares/thunkFetchCarts";
import actionAsyncPostToCart from "../middlewares/thunkPostToCart";

interface CartStateApp {
  cart: IProduct[];
}
const initialState: CartStateApp = {
  cart: [],
};

// Actions
export const addToCartAction = createAction<{
  productId: number;
  userId: number;
}>("cart/ADD_PRODUCT");

// Reducer
const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actionAsyncFetchCart.fulfilled, (state, action) => {
      state.cart = action.payload;
    })
    .addCase(actionAsyncPostToCart.fulfilled, () => {});
});

export default cartReducer;

// todo create function @/utils/addToCart.ts, @/utils/removeFromCart.ts
// todo setup cartPage style with total, delete button, qty input & buttons +/-, delivery delay, payment button
