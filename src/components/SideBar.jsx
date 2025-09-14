import MainLogo from "./MainLogo";
import menuData from "../routes/menu.json"; // Ajusta la ruta si es necesario
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import LogoutButton from "./LogoutButton";

const SideBar = () => {
  const [menu, setMenu] = useState([]);
  const [openMenu, setOpenMenu] = useState(null);

  useEffect(() => {
    setMenu(menuData);
  }, []);

  const toggleSubmenu = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  return (
    <div className="col-lg-3">
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
                          openMenu === index ? "bi-chevron-up" : "bi-chevron-down"
                        }`}
                      ></i>
                    </button>

                    {/* Submenú */}
                    {openMenu === index && (
                      <ul className="list-unstyled ps-4 mt-2 p-2">
                        {item.children.map((subItem, subIndex) => (
                          <li key={subIndex} className="mb-1 submenu-item">
                            <Link
                              to={subItem.path}
                              className="d-flex align-items-center text-decoration-none"
                            >
                              <span>
                                {subItem.icon && <i className={`${subItem.icon} me-2`}></i>}
                                {subItem.title}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  // Menú simple (sin hijos)
                  <Link
                    to={item.path}
                    className="btn d-flex align-items-center text-decoration-none text-white main-menu-item"
                  >
                    {item.icon && <i className={`${item.icon} me-2`}></i>}
                    <span>{item.title}</span>
                  </Link>
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
  );
};

export default SideBar;
