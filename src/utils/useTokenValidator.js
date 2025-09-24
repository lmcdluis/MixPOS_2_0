import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode"
import apiClient from "../api/apiClient";

const isTokenExpired = (token) => {
  try {
    const decoded = jwtDecode(token);
    const now = Date.now() / 1000; // en segundos
    return decoded.exp && decoded.exp < now;
  } catch {
    return true; // token corrupto
  }
};

const useTokenValidator = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!token) return;

    // 🔹 Verificación inmediata por exp
    if (isTokenExpired(token)) {
      dispatch(logout());
      navigate("/login", { replace: true });
      return;
    }

    // 🔹 Verificación periódica contra backend
    const interval = setInterval(async () => {
      try {
        await apiClient.get("/echouser", true); // o tu endpoint de validación
        console.log("Token válido");
      } catch {
        dispatch(logout());
        navigate("/login", { replace: true });
      }
    }, 10 * 60 * 1000); // cada 10 minutos

    return () => clearInterval(interval);
  }, [token, dispatch, navigate]);
};

export default useTokenValidator;
