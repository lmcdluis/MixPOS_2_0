import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes/routes.json";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginLayout from "./components/Layaouts/LoginLayout";
//import POSDashboardLayout from "./components/Layouts/POSDashboardLayout";
//import AdminPanelLayout from "./components/Layouts/AdminPanelLayout";

const layouts = {
  LoginLayout,
  POSDashboardLayout,
  AdminPanelLayout,
};

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Cargando...</div>}>
        <Routes>
          {routes.map(({ path, component, layout, protected: isProtected }) => {
            const PageComponent = React.lazy(
              () => import(`./pages/${component}.js`),
            );
            const Layout = layouts[layout];
            const element = (
              <Layout>
                <PageComponent />
              </Layout>
            );
            return (
              <Route
                key={path}
                path={path}
                element={
                  isProtected ? (
                    <ProtectedRoute>{element}</ProtectedRoute>
                  ) : (
                    element
                  )
                }
              />
            );
          })}
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
