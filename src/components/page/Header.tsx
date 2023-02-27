import { Link } from "react-router-dom";
import MainNav from "./MainNav";

const Header = () => (
  <header>
    <div className="container">
      <div>
        <Link to="/" className="logo">🚐Vanlife</Link>
        <MainNav />
      </div>
    </div>
  </header>
);

export default Header;
