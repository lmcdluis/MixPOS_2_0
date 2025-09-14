import { useState, useEffect } from "react";
import { getUserFromToken } from "../utils/getUserFromToken";
const ProfileMenu = () => {
  const user = getUserFromToken();
  const [firstLetter, setFirstLetter] = useState("");

  const getFirtLetter = (name) => {
    if (!name) return "";
    return name.trim().charAt(0).toUpperCase();
  };

  useEffect(() => {
    setFirstLetter(getFirtLetter(user?.unique_name));
  }, [user]);

  return (
    <div className="profile-menu">
      <div
        className="avatar"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        data-bs-custom-class="custom-tooltip"
        data-bs-title={user ? user.unique_name || user.name || "Usuario" : "Invitado"}
      >
        <span className="first-letter">{firstLetter}</span>
      </div>
    </div>
  );
};

export default ProfileMenu;
``;
