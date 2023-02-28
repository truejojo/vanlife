import { useState, useEffect } from "react";
import axios from "axios";
import VansList from "./components/VansList";
import { IVanProps } from "./components/Van";

const Vans = () => {
  const [vans, setVans] = useState<IVanProps[] | []>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("/api/vans");
      const data = await res.data;
      setVans(data.vans);
    };

    fetchData();
  }, []);

  return (
    <div className="vans container">
      <h2 className="fs-600 fw-bold">Explore our van options</h2>
      { vans.length > 0 && <VansList vans={vans} />}
    </div>
  );
};

export default Vans;
