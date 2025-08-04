import React from "react";
import Navbar from "../Navbar";

const PosDashboardLayout = ({ children }) => (
  <div className="container d-flex align-items-center justify-content-center vh-100">
    <Navbar />
    <div className="col-md-4">{children}</div>
  </div>
);

export default PosDashboardLayout;
