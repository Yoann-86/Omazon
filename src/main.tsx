import { HashRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { Provider } from "react-redux";
import store from "./Components/store/store.ts";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
);
