import { useState, useEffect } from "react";
import { getUserFromToken } from "../utils/getUserFromToken";
import { Avatar, HStack } from "@chakra-ui/react";
const ProfileMenu = () => {
  const user = getUserFromToken();
   const [nameUser, setNameUser] = useState("Usuario");

   useEffect(() => {
        setNameUser(user?.unique_name);
   }, [user]);

  return (
    <div className="profile-menu">
        <div className="d-flex">
            <Avatar name={nameUser || "Usuario"} src="https://bit.ly/broken-link"/>
            <div className="ms-2">
                <p className="text-capitalize">{nameUser || "Usuario"}</p>
            </div>
        </div>
    </div>
  );
};

export default ProfileMenu;
