import { Card, CardBody, Text } from "@chakra-ui/react";
import { getUserFromToken } from "../../utils/getUserFromToken";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const WelcomeUser = () => {
  const user = getUserFromToken();
  const [nameUser, setNameUser] = useState("Usuario");

  const location = useLocation();
  const {pathname} = location;

  useEffect(() => {
      setNameUser(user?.unique_name);
    }, [user]);

  return (
    <div className="welcome-user">
      <Card>
        <CardBody>
          {pathname === "/dashboard" && <DynamicBreadcrumb />}
          <Text as="h2" fontSize="2xl">
            Bienvenido de nuevo, <strong className="text-uppercase">{nameUser}</strong>
          </Text>
          <span>
            Este es un resumen de tu actividad reciente.
          </span>
        </CardBody>
      </Card>
    </div>
  );
};

export default WelcomeUser;
