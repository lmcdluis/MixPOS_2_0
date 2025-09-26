import CardInfo from "../components/CardInfo";
import { useEffect, useState } from "react";
import apiClient from "../api/apiClient";
import SkeletonCard from "../components/SkeletonCard";

const PosDashboardPage = ({ id }) => {
  const [productos, setProductos] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getProductos = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await apiClient.get(
        "/api/Producto/obtenerProductosActivos",
        true
      );
      if (response) {
        //  const data = await response.json();
        setProductos(response);
      } else {
        setError("Error al cargar los productos");
      }
    } catch (error) {
      setError("Error al cargar los productos", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-md-3">
          {loading ? (
            <SkeletonCard />
          ) : productos ? (
            <CardInfo title="Productos" value={productos.length} />
          ) : (
            <p>{error || "No hay productos"}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PosDashboardPage;
