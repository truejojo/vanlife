import { Routes, Route } from "react-router-dom";
import Header from "./components/main/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import VanDetail from "./pages/VanDetail";
import Footer from "./components/main/Footer";

import "../server.js";

const App = () => (
  <>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="vans" element={<Vans />} />
        <Route path="vans/:id" element={<VanDetail />} />
      </Routes>
    </main>
    <Footer />
  </>
);

export default App;
