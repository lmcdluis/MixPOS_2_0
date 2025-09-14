import React, { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes/routes.json";
import ProtectedRoute from "./components/ProtectedRoute";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./redux/slices/authSlice";

// Layouts
import LoginLayout from "./components/Layaouts/LoginLayout";
import POSDashboardLayout from "./components/Layaouts/PosDashboard";
import AdminPanelLayout from "./components/Layaouts/AdminPanelLayout";

const layouts = {
  LoginLayout,
  POSDashboardLayout,
  AdminPanelLayout,
};

const App = () => {
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.auth);

  // Si hay token en localStorage, obtener datos del usuario al cargar la app
  useEffect(() => {
    if (token && !user) {
      dispatch(fetchUser());
    }
  }, [token, user, dispatch]);

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
