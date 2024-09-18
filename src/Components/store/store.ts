import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/productsReducer";
import categoriesReducer from "./reducers/categoriesReducer";
import cartReducer from "./reducers/cartReducer";
import appReducer from "./reducers/appReducer";
import tagsReducer from "./reducers/tagsReducer";

const store = configureStore({
  reducer: {
    appStore: appReducer,
    productStore: productsReducer,
    categoryStore: categoriesReducer,
    cartStore: cartReducer,
    tagStore: tagsReducer,
  },
});

export default store;

//* https://redux.js.org/usage/usage-with-typescript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
