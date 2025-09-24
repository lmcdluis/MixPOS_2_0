import MainLogo from "./MainLogo";
import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import LogoutButton from "./LogoutButton";
import { Skeleton, Stack } from "@chakra-ui/react";
import  useMenu  from "../utils/useMenu"; // asegúrate de importarlo bien

const SideBar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const location = useLocation();

  // 👉 Hook personalizado para cargar el menú
  const { menu, loading, error, refetch } = useMenu();

  // 👉 Mantener abierto el submenú si la ruta coincide con algún hijo
  useEffect(() => {
    if (menu && menu.length > 0) {
      menu.forEach((item, index) => {
        if (
          item.children &&
          item.children.some((subItem) => subItem.path === location.pathname)
        ) {
          setOpenMenu(index);
        }
      });
    }
  }, [location.pathname, menu]);

  const toggleSubmenu = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  return (
    <>
      {loading && (
        <Stack>
          <Skeleton height={"20px"} />
        </Stack>
      )}
      {error && <p className="text-danger">{error}</p>}
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
              {menu?.map((item, index) => (
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
