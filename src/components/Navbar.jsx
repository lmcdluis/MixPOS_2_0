// import LogoutButton from "./LogoutButton";
import ProfileMenu from "../components/ProfileMenu";
import { Button, Layout } from "antd";

const { Header } = Layout;

const Navbar = ({ onToggleSidebar }) => {
  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: "0 20px",
        position: "sticky",
        top: "0",
        zIndex  : 100,
      }}
      className="main-navbar"
    >
      <div className="me-auto">
        <Button icon={<i className="bi bi-list"></i>} onClick={onToggleSidebar} />
      </div>
      <Button type="dashed" size="large" icon={<i className="bi bi-bell"></i>} />
      <ProfileMenu />
    </Header>
  );
};

export default Navbar;
