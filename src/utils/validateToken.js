import apiClient from "../api/apiClient";

const validateToken = async () => {
  try {
    await apiClient.get("/echouser", true); // o un endpoint que devuelva el usuario
    return true;
  } catch {
    return false;
  }
};
export { validateToken };