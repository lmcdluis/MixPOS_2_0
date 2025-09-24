import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import routes from "../routes/routes.json"; // importa tu json de rutas

const ProtectedRoute = ({ children }) => {
  const { token, user } = useSelector((state) => state.auth);
  const location = useLocation();

  // Si no hay token o no hay usuario -> ir al login
  if (!token || !user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Verificar si la ruta actual existe en el JSON
  const validPaths = routes.map((r) => r.path);
  const isValidPath = validPaths.includes(location.pathname);

  if (!isValidPath) {
    return <Navigate to="/login" replace />;
  }

  // Si todo bien, renderizar los hijos
  return children;
};

export default ProtectedRoute;
