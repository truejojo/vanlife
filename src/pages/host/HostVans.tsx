import { useState, useEffect } from "react";
import axios from "axios";
import HostVansList from "./components/HostVansList";
import { IVanProps } from "../van/components/Van";

const HostVans = () => {
  const [vans, setVans] = useState<IVanProps[] | []>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`/api/host/vans`);
      const data = await response.data;
      setVans(data.vans);
    };

    fetchData();
  }, []);
  console.log(vans);
  return (
    <div className="host-vans">
      <div className="container">
        <h1 className="fs-600 fw-bold p-block-48">Your listed vans</h1>
        {vans.length > 0 && <HostVansList vans={vans} />}
      </div>
    </div>
  );
};

export default HostVans;
