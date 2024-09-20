/**
 * External imports
 */
import { HashRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
/**
 * Styles import
 */
import "./index.scss";
/**
 * Internal imports
 */
import App from "./App.tsx";
import store from "./store/store.ts";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
);
