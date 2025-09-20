import { Link } from "react-router-dom";
// import LogoutButton from "./LogoutButton";
import ProfileMenu from "./ProfileMenu";

const Navbar = () => {
  return (
    <nav className="navbar fixed-top bg-white border-bottom">
      <div className="container-fluid">
        
        {/* <Link to="/" className="h3">MixPOS</Link> */}
        <div className="navbar-nav ms-auto">
          {/* <LogoutButton /> */}
          <ProfileMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
