import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import VansList from "./components/VansList";
import { IVanProps } from "./components/Van";

const Vans = () => {
  const [vans, setVans] = useState<IVanProps[] | []>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("/api/vans");
      const data = await res.data;
      setVans(data.vans);
    };

    fetchData();
  }, [vans, searchParams]);

  const handleFilterChange = (key: string, value: string | null) => {
    setSearchParams((prevParams) => {
      value === null ? prevParams.delete(key) : prevParams.set(key, value);

      return prevParams;
    });
  };

  return (
    <div className="vans container">
      <h2 className="fs-600 fw-bold">Explore our van options</h2>

      <div className="flex-group">
        <button
          onClick={() => handleFilterChange("type", "simple")}
          className={`button ${typeFilter === "simple" ? "selected" : ""}`}
          data-search="search"
          data-type="accent-1"
        >
          Simple
        </button>
        <button
          onClick={() => handleFilterChange("type", "rugged")}
          className={`button ${typeFilter === "rugged" ? "selected" : ""}`}
          data-search="search"
          data-type="accent-2"
        >
          Rugged
        </button>
        <button
          onClick={() => handleFilterChange("type", "luxury")}
          className={`button ${typeFilter === "luxury" ? "selected" : ""}`}
          data-search="search"
          data-type="accent-3"
        >
          Luxury
        </button>
        {typeFilter && (
          <button
            className="button"
            onClick={() => handleFilterChange("type", null)}
            data-search="search"
          >
            Clear
          </button>
        )}
      </div>
      {vans.length > 0 && (
        <VansList
          vans={vans}
          typeFilter={typeFilter}
        />
      )}
    </div>
  );
};

export default Vans;
