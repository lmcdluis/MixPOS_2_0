// src/components/ProfileMenu.jsx
import { useState, useEffect } from "react";
import { getUserFromToken } from "../utils/getUserFromToken";
import { useLogout } from "../utils/useLogout";
import { Avatar, Dropdown } from "antd";

const ProfileMenu = () => {
  const user = getUserFromToken();
  const [nameUser, setNameUser] = useState("Usuario");
  const [dateTime, setDateTime] = useState(new Date());
    const logout = useLogout();

  const items = [
    {key: 1, label: 'Perfil', icon: <i className="bi bi-person"></i>},
    {key: 2, label: 'Configuración', icon: <i className="bi bi-gear"></i>},
    {key: 3, label: 'Cerrar sesión', icon: <i className="bi bi-box-arrow-right"></i>, onClick: logout}
  ]

  

  useEffect(() => {
    setNameUser(user?.unique_name || "Usuario");

    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, [user]);

  const formatTime = (date) =>
    date.toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

  return (
    <Dropdown menu={{items}} arrow>
        <div className="d-flex align-items-center lh-1 profile-menu p-3">
          <Avatar  className="me-2 text-uppercase" style={{ backgroundColor: '#05434c'}}>{nameUser.charAt(0)}</Avatar>
          <div className="d-flex flex-column align-items-start">
            <span className="text-uppercase mb-2">{nameUser}</span>
            <small className="">{formatTime(dateTime)}</small>
          </div>
        </div>
    </Dropdown>
  );
};

export default ProfileMenu;
