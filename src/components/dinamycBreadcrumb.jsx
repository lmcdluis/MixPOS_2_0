import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { useLocation, Link as RouterLink } from "react-router-dom";

// 📌 Diccionario de rutas amigables
const breadcrumbNameMap = {
  "/dashboard": "Dashboard",
  "/dashboard/users": "Usuarios",
  "/dashboard/users/:id": "Detalle Usuario",
  "/dashboard/settings": "Configuración",
  "/products": "Productos",
  "/products/new": "Nuevo Producto",
};

const DynamicBreadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Breadcrumb
      className="mt-4 breadcrumb-custom"
      separator={<i className="bi bi-chevron-right"></i>}
    >
      {/* Home fijo */}
      <BreadcrumbItem>
        <BreadcrumbLink as={RouterLink} to="/">
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>

      {/* Rutas dinámicas */}
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        // Buscar nombre amigable o fallback con el path en crudo
        const label =
          breadcrumbNameMap[to] ||
          value.charAt(0).toUpperCase() + value.slice(1);

        return (
          <BreadcrumbItem key={to} isCurrentPage={isLast}>
            <BreadcrumbLink
              as={RouterLink}
              to={to}
              fontWeight={isLast ? "bold" : "normal"}
              color={isLast ? "teal.600" : "gray.600"}
            >
              {label}
            </BreadcrumbLink>
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
};

export default DynamicBreadcrumb;
