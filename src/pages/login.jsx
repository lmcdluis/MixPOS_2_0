import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    compania: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { token, user, loading, error } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(login(credentials));
  };

  // Si ya está logueado (token y user), redirigir al POS
  useEffect(() => {
    if (token && user) {
      navigate("/pos");
    }
  }, [token, user, navigate]);

  return (
    <div className="card p-4 shadow-sm">
      <h2 className="mb-3 text-center">Iniciar sesión</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          placeholder="Usuario"
          value={credentials.username}
          onChange={(e) =>
            setCredentials({ ...credentials, username: e.target.value })
          }
          required
        />
        <input
          className="form-control mb-2"
          placeholder="Contraseña"
          type="password"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
          required
        />
        <select
          className="form-select mb-2"
          onChange={(e) => {
            setCredentials({ ...credentials, compania: e.target.value });
          }}
        >
          <option value="0" selected>
            Select compania
          </option>
          <option value="201">201</option>
        </select>
        <button
          className="btn btn-primary w-100"
          type="submit"
          disabled={loading}
        >
          {loading ? "Cargando..." : "Entrar"}
        </button>
      </form>
    </div>
  );
};

export default Login;
