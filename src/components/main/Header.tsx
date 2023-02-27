import Logo from "./Logo";
import MainNav from "./MainNav";

const Header = () => (
  <header className="p-block-36">
    <div className="container">
      <div className="main-header">
        <Logo />
        <MainNav />
      </div>
    </div>
  </header>
);

export default Header;
