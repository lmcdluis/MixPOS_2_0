// src/hooks/useProducto.js
import { useEffect, useState } from "react";
import apiClient from "../api/apiClient" // ajusta la ruta

const useProducto = (id) => {
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return; // si no hay id, no hacemos nada

    const fetchProducto = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await apiClient.get(`/api/Producto/obtenerProducto?id=${id}`, true);
        setProducto(data);
      } catch (err) {
        setError(err.message || "Error al obtener producto");
      } finally {
        setLoading(false);
      }
    };

    fetchProducto();
  }, [id]);

  return { producto, loading, error };
};

export default useProducto;
