import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes/routes.json";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginLayout from "./components/Layaouts/LoginLayout";

const layouts = {
  LoginLayout,
};

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Cargando...</div>}>
        <Routes>
          {routes.map(({ path, component, layout, protected: isProtected }) => {
            const PageComponent = React.lazy(
              () => import(`./pages/${component}.jsx`),
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
