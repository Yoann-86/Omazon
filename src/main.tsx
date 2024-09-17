import { HashRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
// import "dotenv/config";

createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <App />
  </HashRouter>,
);
