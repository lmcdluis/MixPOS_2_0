import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const navigate = useNavigate();

  const logout = useCallback(() => {
    const confirmed = window.confirm("¿Deseas cerrar sesión?");
    if (confirmed) {
      localStorage.removeItem("token");
      navigate("/", { replace: true });
      window.location.reload(); // fuerza limpiar estado global
    }
  }, [navigate]);

  return logout;
};
