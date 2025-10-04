// src/hooks/useProducto.js
import { useEffect, useState } from "react";
import apiClient from "../api/apiClient" // ajusta la ruta

const useProducto = () => {
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchProducto = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await apiClient.get(`/api/Producto/obtenerProductosActivos`, true);
        setProducto(data);
      } catch (err) {
        setError(err.message || "Error al obtener producto");
      } finally {
        setLoading(false);
      }
    };

    fetchProducto();
  }, []);

  return { producto, loading, error };
};

export default useProducto;
