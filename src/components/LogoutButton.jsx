import { useLogout } from "../utils/useLogout"
import { Button, Flex } from "antd";
export const LogoutButton = () => {
  const logout = useLogout();

  return (
    <Flex vertical gap="small" style={{ width: '100%' }}>
       <Button type={"primary"} size="lg" onClick={logout} icon={<i className="bi bi-box-arrow-right me-2"></i>}>Cerrar sesión</Button>
    </Flex>

  );
};

export default LogoutButton;
