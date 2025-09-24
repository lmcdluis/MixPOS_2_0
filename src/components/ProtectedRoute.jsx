import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";
import apiClient from "../api/apiClient";
import { logout } from "../redux/slices/authSlice";
import routes from "../routes/routes.json";

const isTokenExpired = (token) => {
  try {
    const decoded = jwtDecode(token);
    const now = Date.now() / 1000;
    return decoded.exp && decoded.exp < now;
  } catch {
    return true;
  }
};

const ProtectedRoute = ({ children }) => {
  const { token, user } = useSelector((state) => state.auth);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Validación inmediata y periódica del token
  useEffect(() => {
    if (!token || !user || isTokenExpired(token)) {
      dispatch(logout());
      navigate("/login", { replace: true });
      return;
    }

    const interval = setInterval(async () => {
      try {
        await apiClient.get("/echouser", true); // endpoint que valide token
      } catch {
        dispatch(logout());
        navigate("/login", { replace: true });
      }
    }, 10 * 60 * 1000); // cada 10 minutos

    return () => clearInterval(interval);
  }, [token, user, dispatch, navigate]);

  // Verificar si la ruta actual existe en el JSON
  const validPaths = routes.map((r) => r.path);
  const isValidPath = validPaths.includes(location.pathname);

  if (!isValidPath) {
    const defaultRoute = routes.find((r) => r.default) || { path: "/pos" };
    return <Navigate to={defaultRoute.path} replace />;
  }

  return children;
};

export default ProtectedRoute;
