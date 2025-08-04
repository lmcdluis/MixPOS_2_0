// PosDashboard.jsx
import React from "react";

const PosDashboardLayout = ({ children }) => (
  <div className="container d-flex align-items-center justify-content-center vh-100">
    <div className="col-md-4">{children}</div>
  </div>
);

export default PosDashboardLayout;
