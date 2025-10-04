import { Table, Empty, Card } from "antd";
import useProducto from "../utils/useProduct";

const ProductosGeneralesPage = () => {
    const { producto, loading, error } = useProducto();
    console.log(producto);
    const columns = [
        {
            title: "ID",
            dataIndex: "ID",
            key: "ID",
        },
        {
            title: "Marca",
            dataIndex: "Marca",
            key: "Marca",
        },
        {
            title: "Codigo de Producto",
            dataIndex: "CodigoProducto",
            key: "CodigoProducto",
        },
    ];

    if (error) return <div>Error: {error}</div>;
    if (!producto || producto.length === 0) return <Empty description="No hay productos disponibles" className="frozen-card"/>;

    return (
       <>
         <Card className="frozen-card" style={{ margin: 20 }} loading={loading}>
            <Table
            columns={columns}
            dataSource={producto}
            rowKey="id"
            pagination={{ pageSize: 10 }}
            title={() => <h3>Lista de Productos</h3>} 
            scroll={{ x: 'max-content' }}
         />
         </Card>
       </>
    )
}
export default ProductosGeneralesPage;