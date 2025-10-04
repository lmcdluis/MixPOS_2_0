
// import { getUserFromToken } from "../utils/getUserFromToken";
// import { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import DynamicBreadcrumb from "../components/dinamycBreadcrumb"; // 👈 importa el breadcrumb

// const WelcomeUser = () => {
//   const user = getUserFromToken();
//   const [nameUser, setNameUser] = useState("Usuario");

//   const location = useLocation();
//   const { pathname } = location;

//   useEffect(() => {
//     setNameUser(user?.unique_name);
//   }, [user]);

//   return (
//     <div className="welcome-user">
//       <Card rounded={"lg"} className="frozen-card">
//         <Card.Body>
//           {pathname === "/pos" ? (
//             <>
//               <Text as="h2" fontSize="2xl">
//                 Bienvenido de nuevo,{" "}
//                 <strong className="text-uppercase name-user">{nameUser}</strong>
//               </Text>
//               <span>Este es un resumen de tu actividad reciente.</span>
//             </>
//           ) : (
//             <DynamicBreadcrumb />
//           )}
//         </Card.Body>
//       </Card>
//     </div>
//   );
// };

// export default WelcomeUser;
