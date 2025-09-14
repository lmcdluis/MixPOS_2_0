import React from "react";
import { useNavigate } from "react-router-dom";
import { getUserFromToken} from "../utils/getUserFromToken";
export const LogoutButton = () => {
  const navigate = useNavigate();

  const user = getUserFromToken();

  const handleLogout = () => {
    const confirmed = window.confirm("¿Deseas cerrar sesión?");
    if (confirmed) {
      localStorage.removeItem("token");
      navigate("/", {replace: true});
      window.location.reload(); // Recargar la página para reflejar el cambio de estado
    }
    
  };

  return (
      // <button onClick={handleLogout} className="btn btn-danger btn-sm">
      //   Cerrar sesión{" "}
      //   {user && <span> | (👤{user.unique_name || user.name || "Usuario"})</span>}
      // </button>
      <button onClick={handleLogout} className="btn text-white w-100"><i className="bi bi-box-arrow-right me-2"></i>Cerrar sesión</button>
  );
};

export default LogoutButton;
