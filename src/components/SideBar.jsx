import MainLogo from "./MainLogo";
import menuData from "../routes/menu.json"; // Ajusta la ruta si es necesario
import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import LogoutButton from "./LogoutButton";
import apiClient from "../api/apiClient";
import { Skeleton, Stack } from "@chakra-ui/react";

const SideBar = () => {
  const [menu, setMenu] = useState([]);
  const [openMenu, setOpenMenu] = useState(null);
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // 👉 Cargar el menú desde el JSON al montar el componente
  useEffect(() => {
    const fetchMenu = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await apiClient.get("/api/Menu/getMenu", true);
        setMenu(data);
      } catch (err) {
        setError("Error al cargar el menú");
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  // 👉 Mantener abierto el submenú si la ruta coincide con algún hijo
  useEffect(() => {
    menu.forEach((item, index) => {
      if (
        item.children &&
        item.children.some((subItem) => subItem.path === location.pathname)
      ) {
        setOpenMenu(index);
      }
    });
  }, [location.pathname, menu]);

  const toggleSubmenu = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  return (
    <>
      {loading && <Stack><Skeleton height={"20px"}/></Stack>}
      <div className="col-lg-2">
        <div
          className="offcanvas offcanvas-start show side-bar"
          id="offcanvas"
          aria-labelledby="offcanvasLabel"
          data-bs-scroll="true"
        >
          {/* Logo */}
          <div className="offcanvas-header d-flex justify-content-center">
            <div>
              <MainLogo size={"small"} linked />
            </div>
          </div>

        {/* Menú */}
        <div className="offcanvas-body">
          <ul className="list-unstyled">
            {menu.map((item, index) => (
              <li key={index} className="mb-2">
                {item.children ? (
                  <>
                    {/* Botón para menú con hijos */}
                    <button
                      onClick={() => toggleSubmenu(index)}
                      className="btn w-100 d-flex justify-content-between align-items-center text-start text-white main-menu-item"
                    >
                      <span>
                        {item.icon && <i className={`${item.icon} me-2`}></i>}
                        {item.title}
                      </span>
                      <i
                        className={`bi ${
                          openMenu === index
                            ? "bi-chevron-up"
                            : "bi-chevron-down"
                        }`}
                      ></i>
                    </button>

                    {/* Submenú */}
                    {openMenu === index && (
                      <ul className="list-unstyled ps-4 mt-2 p-2">
                        {item.children.map((subItem, subIndex) => (
                          <li key={subIndex} className="mb-1 submenu-item">
                            <NavLink
                              to={subItem.path}
                              className={({ isActive }) =>
                                `d-flex align-items-center text-decoration-none ${
                                  isActive ? "active-link" : "text-white"
                                }`
                              }
                            >
                              {subItem.icon && (
                                <i className={`${subItem.icon} me-2`}></i>
                              )}
                              {subItem.title}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  // Menú simple (sin hijos)
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `btn d-flex align-items-center text-decoration-none main-menu-item ${
                        isActive ? "active-link" : "text-white"
                      }`
                    }
                  >
                    {item.icon && <i className={`${item.icon} me-2`}></i>}
                    <span>{item.title}</span>
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="d-flex">
          <LogoutButton />
        </div>
      </div>
    </div>
    </>
  );
};

export default SideBar;
