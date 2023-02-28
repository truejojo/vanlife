import { NavLink } from "react-router-dom";

const HostVanNav = () => (
  <div className="nav host-van-nav">
    <ul className="nav flex-group p-block-24" role="list">
      <li>
        <NavLink to="." end>Details</NavLink>
      </li>
      <li>
        <NavLink to="pricing">Pricing</NavLink>
      </li>
      <li>
        <NavLink to="photos">Photos</NavLink>
      </li>
    </ul>
  </div>
);

export default HostVanNav;
