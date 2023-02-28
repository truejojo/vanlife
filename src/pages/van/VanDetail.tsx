import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { IVanProps } from "./components/Van";

const VanDetail = () => {
  const [van, setVan] = useState<IVanProps | null>(null);
  const { id } = useParams();

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
