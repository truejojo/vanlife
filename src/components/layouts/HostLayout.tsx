import { Outlet } from "react-router-dom";
import HostNav from "../../pages/host/components/HostNav";

const HostLayout = () => (
  <>
    <div className="container">
      <HostNav />
    </div>
    <Outlet />
  </>
);

export default HostLayout;
