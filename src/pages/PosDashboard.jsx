import CardInfo from "../components/CardInfo";
import { useEffect, useState } from "react";
import apiClient from "../api/apiClient";
import SkeletonCard from "../components/SkeletonCard";

const PosDashboardPage = () => {
  const [productos, setProductos] = useState(null);
  const [almacenes, setAlmacenes] = useState(null);
  const [loadingProd, setLoadingProd] = useState(false);
  const [error, setError] = useState(null);

  const getProductos = async () => {
    setLoadingProd(true);
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
      setLoadingProd(false);
    }
  };

  const getAlmacenes = async () => {
    setLoadingAlm(true);
    setError(null);
    try {
      const response = await apiClient.get(
        "/api/Catalogo/obtenerAlmacenes",
        true
      );
      if (response) {
        setAlmacenes(response);
      } else {
        setError("Error al cargar los almacenes");
      }
    } catch (error) {
      setError("Error al cargar los almacenes", error);
    } finally {
      setLoadingAlm(false);
    }
  };
  const [loadingAlm, setLoadingAlm] = useState(false);

  const loading = loadingProd || loadingAlm;

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <div
      className="p-4 m-0"
    >
      <div className="row">
        <div className="col-lg-4 col-md-3 col-sm-12">
          <CardInfo
            title="Productos Activos"
            value={productos ? productos.length : 0}
            percentage="+5% desde ayer"
            loading={loading}
          />
        </div>
        <div className="col-lg-4 col-md-3 col-sm-12">
          <CardInfo
            title="Almacenes"
            value={almacenes ? almacenes.length : 0}
            percentage="+5% desde ayer"
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
};

export default PosDashboardPage;
