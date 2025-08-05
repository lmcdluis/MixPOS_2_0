import React from "react";
import Navbar from "../Navbar";

const AdminPanelLayout = ({ children }) => (
  <>
    <Navbar />
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">{children}</div>
      </div>
    </div>
  </>
);

export default AdminPanelLayout;
