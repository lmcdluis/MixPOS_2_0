// LoginLayout.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginLayout = ({ children }) => (
  <div className="container d-flex align-items-center justify-content-center vh-100">
    <div className="col-md-4">{children}</div>
  </div>
);

export default LoginLayout;
