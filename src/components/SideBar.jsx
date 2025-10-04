import MainLogo from "./MainLogo";
import { useLocation, useNavigate } from "react-router-dom";
import useMenu from "../utils/useMenu";
import { Layout, Menu } from "antd";
import LogoutButton from "./LogoutButton";

const SideBar = ({ collapsed }) => {
  const location = useLocation();
  const { Sider } = Layout;
  const navigate = useNavigate();

  // 👉 Hook personalizado para cargar el menú
  const { menu, loading, error, refetch } = useMenu();

  const menuConverted = menu.map((item) => ({
    key: item.path || item.title,
    icon: <i className={item.icon}></i>,
    label: item.title,
    children: item.children
      ? item.children.map((child) => ({
          key: child.path || child.title,
          icon: <i className={child.icon}></i>,
          label: child.title,
        }))
      : null,
  }));

  const handleClick = ({ key }) => {
    const clickedItem = findMenuItem(menuConverted, key);

    if (clickedItem?.children) {
      // tiene hijos → solo expande/colapsa
      return;
    }

    // no tiene hijos → navegamos
    navigate(key);
  };

  const findMenuItem = (items, key) => {
    for (const item of items) {
      if (item.key === key) return item;
      if (item.children) {
        const found = findMenuItem(item.children, key);
        if (found) return found;
      }
    }
    return null;
  };

  if (loading) return <p>Cargando menú...</p>;
  if (error) return (
    <p>
      Error al cargar el menú. <button onClick={refetch}>Reintentar</button>
    </p>
  );

  const selectedKey =
    menuConverted
      .flatMap((item) => [
        item.key,
        ...(item.children ? item.children.map((child) => child.key) : []),
      ])
      .find((key) => location.pathname.includes(key)) || "1";

  return (
    <Sider
      width={200}
      style={{ background: "#06535eff", minHeight: "100vh" , overflow: 'auto'}}
      trigger={null}
      collapsible
      collapsed={collapsed}
      className="side-bar"
      breakpoint="lg"
      collapsedWidth={collapsed ? 80 : 200}
      loading={loading}
    >
      <div className="text-center my-3">
        <MainLogo size={"small"} linked />
      </div>
      <Menu
        mode="inline"
        selectedKeys={[selectedKey]}
        theme="dark"
        style={{  borderRight: 0, background: "#06535eff" }}
        items={menuConverted}
        className="sidebar-menu"
        onClick={handleClick}
      />
        <div className="ms-auto">
          <LogoutButton />
        </div>
    </Sider>
  );
};

export default SideBar;
