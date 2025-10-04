import { Layout} from "antd";
import SideBar from "../SideBar";
import Navbar from "../Navbar";
import { useState } from "react";
import { Content } from "antd/es/layout/layout";

const PosDashboardLayout = ({children}) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{ minHeight: "100vh", margin: 0, padding: 0 }}>
      <Layout>
        <SideBar collapsed={collapsed}/>
        <Layout>
          <Navbar onToggleSidebar={() => setCollapsed(!collapsed)}  />
          <Content className="dashboard-container" style={{overflow: 'auto'}}>
              {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default PosDashboardLayout;
