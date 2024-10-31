import { createAction, createReducer } from "@reduxjs/toolkit";

import type { IUser } from "@/@Types";
import actionAsyncUserLogin from "../thunks/thunkUserLogin";

interface GeneralStateApp {
  isLogged: boolean;
  login: {
    user: IUser;
    status: "idle" | "loading" | "succeeded" | "failed";
    error: null | string;
  };
}
const initialState: GeneralStateApp = {
  isLogged: false,
  login: {
    user: {
      id: 0,
      firstName: "identifiez-vous",
      lastName: "none",
      email: "none",
      accessToken: "none",
    },
    status: "idle",
    error: null,
  },
};

// Actions
export const actionUserLogout = createAction("app/LOGOUT_USER");

// Reducer
const appReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actionAsyncUserLogin.pending, (state) => {
      state.login.status = "loading";
    })
    .addCase(actionAsyncUserLogin.fulfilled, (state, action) => {
      state.isLogged = true;
      state.login.user = action.payload;
      state.login.status = "succeeded";
    })
    .addCase(actionAsyncUserLogin.rejected, (state, action) => {
      state.isLogged = false;
      state.login.status = "failed";
      if (typeof action.error.message === "string") {
        state.login.error = action.error.message;
      } else {
        state.login.error = "Unknow error";
      }
    })
    .addCase(actionUserLogout, (state) => {
      state.isLogged = initialState.isLogged;
      state.login = initialState.login;
    });
});

export default appReducer;
