import { useState, useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import axios from "axios";
import { IVanProps } from "./components/Van";

const VanDetail = () => {
  const [van, setVan] = useState<IVanProps | null>(null);
  const location = useLocation();
  const { id } = useParams();
  console.log(`location search: ${location.search}`);
  console.log(`location state: ${location.state}`);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`/api/vans/${id}`);
      const data = await res.data.vans;

      setVan(data);
    };
    fetchData();
  }, [id]);

  return (
    <div className="container">
      <div className="m-block-36">
        <Link to={`./..${location.state ? `?type=${location.state}` : ""}`}>
          &larr; Back to {location.state ? location.state : "all"} Vans
        </Link>
      </div>

      {van ? (
        <div>
          <img src={van.imageUrl} alt={van.name} />
          <p>{van.type}</p>
          <h2>{van.name}</h2>
          <p>${van.price}/day</p>
          <p>{van.description}</p>
          <Link to="">Rent this van</Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default VanDetail;
