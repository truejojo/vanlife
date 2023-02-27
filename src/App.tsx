import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import Header from "./components/main/Header";
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
      </Routes>
    </main>
    <Footer />
  </>
);

export default App;
