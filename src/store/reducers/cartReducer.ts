import { createAction, createReducer } from "@reduxjs/toolkit";
import actionAsyncFetchCart from "../middlewares/thunkFetchCarts";

import type { IProduct } from "@/@Types";

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
    .addCase(addToCartAction, (_, action) => {
      //!
      //todo: post data
      console.log(
        "#DEV / cartReducer : Produit à envoyer en BDD [POST /carts/userId]",
        action.payload,
      );
    });
});

export default cartReducer;
