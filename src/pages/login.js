import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login, fetchUser } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(login(credentials));
    await dispatch(fetchUser());
    navigate("/pos");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="mb-3">Iniciar sesión</h2>
      <input
        className="form-control mb-2"
        placeholder="Usuario"
        value={credentials.username}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
      />
      <input
        className="form-control mb-2"
        placeholder="Contraseña"
        type="password"
        value={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />
      <button className="btn btn-primary w-100" type="submit">
        Entrar
      </button>
    </form>
  );
};

export default Login;
