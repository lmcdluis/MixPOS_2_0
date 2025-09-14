// PosDashboard.jsx
import React from "react";
import Navbar from "../Navbar";
import SideBar from "../SideBar";

const PosDashboardLayout = ({ children }) => (
  <div className="">
    <Navbar />
    <div className="container-fluid">
      <div className="row">
          <SideBar />
        <div className="col">
          <div className="container d-flex align-items-center justify-content-center vh-100">
          <div className="col-md-4">{children}</div>
        </div>
        </div>
      </div>
    </div>
  </div>
);

export default PosDashboardLayout;
