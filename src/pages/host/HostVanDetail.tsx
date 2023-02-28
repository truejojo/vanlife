import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, Outlet } from "react-router-dom";
import HostVanDetailCard from "./components/HostVanDetailCard";
import HostVanNav from "./components/HostVanNav";
import { IVanProps } from "../van/components/Van";

const HostVanDetail = () => {
  const [van, setVan] = useState<IVanProps | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`/api/host/vans/${id}`);
      const data = await response.data;

      setVan(data.vans);
    };

    fetchData();
  }, [id]);

  return (
    <div className="container">
      <div className="m-block-36">
        <Link to="./..">&larr; Back to all Vans</Link>
      </div>

      {van ? (
        <div className="host-van-detail | bg-neutral-100 p-28">
          <HostVanDetailCard {...van} />
          <HostVanNav />
          <Outlet context={{ ...van }} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default HostVanDetail;
