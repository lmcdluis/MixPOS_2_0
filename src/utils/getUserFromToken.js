import { jwtDecode } from "jwt-decode"; // Compatible con jwt-decode v4

export const getUserFromToken = () => {
  const token = localStorage.getItem("token");
      if (!token) return null;
  
      try {
        return jwtDecode(token);
      } catch (error) {
        console.error("Token inválido:", error);
        return null;
      }
};
