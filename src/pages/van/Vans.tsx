import { useState } from "react";
import { useSearchParams, useLoaderData } from "react-router-dom";
import VansList from "./components/VansList";
import { IVanProps } from "./components/Van";
import { fetchData } from "../../api";

export const loader = () => fetchData();

const Vans = () => {
  const vans = useLoaderData() as IVanProps[];
  // const [error, setError] = useState<Error | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");


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
      {/* {error && <h2 className="fs-600">Error {error.message}</h2>} */}
        {vans.length > 0 && <VansList vans={vans} typeFilter={typeFilter} />}
    </div>
  );
};

export default Vans;
