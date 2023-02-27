import { NavLink } from "react-router-dom";

const MainNav = () => (
  <nav>
    <ul className="flex" role="list">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/vans">Vans</NavLink>
      </li>
    </ul>
  </nav>
);

export default MainNav;
