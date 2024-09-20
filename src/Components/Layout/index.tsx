import type { PropsWithChildren } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

type LayoutProps = PropsWithChildren;

function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
