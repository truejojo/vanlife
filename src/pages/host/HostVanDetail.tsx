import React from "react";
import { Link } from "react-router-dom";

const HostVanDetail = () => {
  return (
    <div className="container">
      <Link to="./..">Back to all Vans</Link>
      <div className="host-van-detail | bg-neutral-100">HostVanDetail</div>
    </div>
  );
};

export default HostVanDetail;
