import { Outlet } from "react-router-dom";
import HostNav from "../main/HostNav";
const HostLayout = () => {
  return (
    <>
      <div className="container">
        <HostNav />
      </div>
      <Outlet />
    </>
  );
};

export default HostLayout;
