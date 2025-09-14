import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/slices/authSlice"; // Import the async thunk
import { useNavigate } from "react-router-dom";
import mainLogo from "../assets/img/mix-pos-proto.png"; // Adjust the path as necessary

const Login = () => {
  const [credentials, setCredentials] = useState({
    usuario: "",
    password: "",
    compania: 0,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token, user, loading, error } = useSelector((state) => state.auth);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(login(credentials)); // Dispatch the async thunk
  };
  useEffect(() => {
    if (token && user) {
      navigate("/pos");
    }
  }, [token, user, navigate]);
  return (
    <div className="card p-4 shadow-sm card-login">
      <div className="text-center mb-4">
        <img
          src={mainLogo}
          alt="Logo"
          className="img-fluid"
          style={{ maxWidth: "150px" }}
        />
      </div>
      <h2 className="mb-3 text-center">Iniciar sesión</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input
            id="usuario"
            type="text"
            autoComplete="username"
            autoFocus
            className="form-control mb-2 form-control-lg"
            placeholder="Usuario"
            value={credentials.usuario}
            onChange={(e) =>
              setCredentials({ ...credentials, usuario: e.target.value })
            }
            required
          />
          <label htmlFor="usuario">Usuario</label>
        </div>
        <div className="form-floating mb-3">
          <input
            className="form-control mb-2 form-control-lg"
            placeholder="Contraseña"
            type="password"
            autoComplete="current-password"
            id="password"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
            required
          />
          <label htmlFor="password">Contraseña</label>
        </div>
        <div className="form-floating">
          <select
            value={credentials.compania}
            id="compania"
            className="form-select mb-2 form-select-lg"
            onChange={(e) => {
              setCredentials({
                ...credentials,
                compania: Number(e.target.value),
              });
            }}
          >
            <option value="0">Selecione compañia</option>
            <option value={201}>Farmacia</option>
          </select>
          <label htmlFor="compania">Compañía</label>
        </div>

        <button
          className="btn btn-primary w-100 btn-lg mt-3"
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
