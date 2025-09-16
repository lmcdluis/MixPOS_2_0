import { useState, useEffect } from "react";
import { getUserFromToken } from "../utils/getUserFromToken";
import { Avatar, Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
const ProfileMenu = () => {
  const user = getUserFromToken();
  const [nameUser, setNameUser] = useState("Usuario");
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    setNameUser(user?.unique_name);

    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, [user]);

  const formatTime = (date) => {
    return date.toLocaleTimeString("es-Es", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };
  return (
    <div className="d-flex align-items-center">
        <Button rightIcon={<i className="bi bi-bell"></i>} className="me-2">Notificaciones</Button>
      <Avatar name={nameUser} className="text-white" />
      <div className="mx-2">
        <strong className="text-capitalize">{nameUser}</strong>
        <div>
          <small>{formatTime(dateTime)}</small>
        </div>
      </div>
      <Menu>
        <MenuButton as={Button}>
          <i className="bi bi-three-dots"></i>
        </MenuButton>
        <MenuList>
          <MenuItem>Perfil</MenuItem>
          <MenuItem>Cerrar sesión</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default ProfileMenu;
