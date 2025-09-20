// PosDashboard.jsx
import React from "react";
import Navbar from "../Navbar";
import SideBar from "../SideBar";
import WelcomeUser from "./WelcomeUser";

const PosDashboardLayout = ({ children }) => {

  return (
    <div className="">
      <div className="container-fluid">
        <div className="row">
          <SideBar />
           <Navbar />
          <div className="col px-0">
            <div className="container bg-light min-vh-100 dashboard-container">
              <WelcomeUser/>
              <div className="">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PosDashboardLayout;
