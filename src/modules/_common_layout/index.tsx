import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Layout = () => {
  return (
    <>
      <div className="layout">
        <Header />
        <main className="main">
          <Outlet />
        </main>
        <Footer />
      </div>
      {process.env.NODE_ENV === "development" && <TanStackRouterDevtools />}
    </>
  );
};
