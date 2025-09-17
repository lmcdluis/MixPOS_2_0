import React from "react";
import { useNavigate } from "react-router-dom";
import { getUserFromToken} from "../utils/getUserFromToken";
import { useLogout } from "../utils/useLogout"
export const LogoutButton = () => {
  const logout = useLogout();
  const user = getUserFromToken();

  return (
      <button onClick={logout} className="btn text-white w-100"><i className="bi bi-box-arrow-right me-2"></i>Cerrar sesión</button>
  );
};

export default LogoutButton;
