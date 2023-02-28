import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/van/Vans";
import VanDetail from "./pages/van/VanDetail";
import Layout from "./components/layouts/Layout";

import "../server.js";
import HostLayout from "./components/layouts/HostLayout";
import Dashboard from "./pages/host/Dashboard";
import Income from "./pages/host/Income";
import HostVans from "./pages/host/HostVans";
import HostVanDetail from "./pages/host/HostVanDetail";
import Reviews from "./pages/host/Reviews";

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="vans" element={<Vans />} />
      <Route path="vans/:id" element={<VanDetail />} />

      <Route path="host" element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="income" element={<Income />} />        
        <Route path="vans" element={<HostVans />} />        
        <Route path="vans/:id" element={<HostVanDetail />} />        
        <Route path="reviews" element={<Reviews />} />
      </Route>
    </Route>
  </Routes>
);

export default App;
