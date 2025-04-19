import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartReducer";
import appReducer from "./reducers/appReducer";

const store = configureStore({
  reducer: {
    appStore: appReducer,
    cartStore: cartReducer,
  },
});

export default store;

//* https://redux.js.org/usage/usage-with-typescript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
