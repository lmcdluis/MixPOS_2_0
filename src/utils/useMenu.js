import { useState, useEffect } from "react";
import apiClient from "../api/apiClient";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMenu = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiClient.get("/api/Menu/getMenu", true);
      setMenu(data);
    } catch (err) {
      setError("Error al cargar el menú");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  return { menu, loading, error, refetch: fetchMenu };
};

export default useMenu;
