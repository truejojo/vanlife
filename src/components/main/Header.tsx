import { Link } from "react-router-dom";
import MainNav from "./MainNav";

const Header = () => (
  <header className="p-block-36">
    <div className="container">
      <div className="flex-space-between">
        <Link to="/" className="logo uppercase">🚐Vanlife</Link>
        <MainNav />
      </div>
    </div>
  </header>
);

export default Header;
