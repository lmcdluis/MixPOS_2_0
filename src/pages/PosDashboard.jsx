import CardInfo from "../components/CardInfo";
import { useEffect } from "react";
import useProducto from "../utils/useProduct"; // asegúrate que el hook se llame así

const PosDashboardPage = ({ id }) => {
  // 👇 si no viene un id, usamos 1 como valor por defecto
  const productId = id ?? 1;

  const { producto, loading, error } = useProducto(productId);

  useEffect(() => {
    console.log("Products value", producto);
  }, [producto]);

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-md-3">
          {loading && <p>Cargando...</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}
          {producto && <CardInfo />}
        </div>
      </div>
    </div>
  );
};

export default PosDashboardPage;
