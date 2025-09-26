import { useState, useEffect } from "react";
import { getUserFromToken } from "../utils/getUserFromToken";
import {
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Tooltip,
  AvatarBadge
} from "@chakra-ui/react";
import { useLogout } from "../utils/useLogout";
const ProfileMenu = () => {
  const user = getUserFromToken();
  const [nameUser, setNameUser] = useState("Usuario");
  const [dateTime, setDateTime] = useState(new Date());

  const logout = useLogout();

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
      <Tooltip label="Notificaciones" placement="bottom" aria-label="Notificaciones">
        <IconButton
          icon={<i className="bi bi-bell"></i>}
          aria-label="Notificaciones"
          className="me-2"
        />
      </Tooltip>
      <Tooltip label={nameUser} placement="bottom" aria-label={nameUser}>
        <Avatar name={nameUser} className="text-white" bg="teal.500" size="md">
          <AvatarBadge boxSize='0.85em' bg='green.500' />
        </Avatar>
      </Tooltip>
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
          <MenuItem onClick={logout}>Cerrar sesión</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default ProfileMenu;
