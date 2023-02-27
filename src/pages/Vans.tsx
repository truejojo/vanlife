import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { IVanProps } from "./VanDetail";

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
      <div className="g-auto-fit-columns  m-block-48">
        {vans.length > 0 ? (
          vans.map((van) => (
            <Link to={`/vans/${van.id}`} key={van.id} className="card">
              <img src={van.imageUrl} alt={van.name} />
              <div className="flex-space-between">
                  <h3 className="fw-bold">{van.name}</h3>
                  <p className="fw-bold">
                    ${van.price}
                    <span className="fs-200">/day</span>
                  </p>
              </div>
                <p>{van.type}</p>
            </Link>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Vans;
