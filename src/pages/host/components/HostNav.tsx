import { NavLink } from "react-router-dom";

const HostNav = () => (
  <div className="host-nav nav">
    <ul className="flex-group" role="list">
      <li>
        <NavLink
          to="."
          end
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="income"
        >
          Income
        </NavLink>
      </li>
      <li>
        <NavLink
          to="vans"
        >
          Vans
        </NavLink>
      </li>
      <li>
        <NavLink
          to="reviews"
        >
          Reviews
        </NavLink>
      </li>
    </ul>
  </div>
);

export default HostNav;
