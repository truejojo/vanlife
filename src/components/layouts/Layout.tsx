import { Outlet } from "react-router-dom";
import Header from "../main/Header";
import Footer from "../main/Footer";

const Layout = () => (
  <>
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default Layout;
