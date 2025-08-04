// LoginLayout.js
import React from "react";

const LoginLayout = ({ children }) => (
  <div className="container d-flex align-items-start justify-content-center vh-100">
    <div className="col-md-4">{children}</div>
  </div>
);

export default LoginLayout;
