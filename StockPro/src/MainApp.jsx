import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./auth/hooks/useAuth";
import { LoginPage } from "./auth/pages/LoginPage";
import { Navbar } from "./components/Navbar";
import { CartApp } from "./CartApp";
import { InvoiceApp } from "./InvoiceApp";
import { UserRoutes } from "./routes/UserRoutes";

export const MainApp = () => {
  const { login, handlerLogin, handlerLogout } = useAuth();
  const location = useLocation();

  // Mostrar Navbar solo si está autenticado y no estamos en /login
  const showNavbar = login.isAuth && location.pathname !== "/login";

  return (
    <>
      {showNavbar && <Navbar login={login} handlerLogout={handlerLogout} />}
      <Routes>
        {!login.isAuth ? (
          <>
            <Route
              path="/login"
              element={<LoginPage handlerLogin={handlerLogin} />}
            />
            <Route path="/*" element={<Navigate to="/login" />} />
          </>
        ) : (
          <>
            <Route path="/cart/*" element={<CartApp />} />
            <Route path="/invoice/*" element={<InvoiceApp />} />
            <Route path="/users/*" element={<UserRoutes />} />
            <Route path="/*" element={<Navigate to="/cart" />} />
          </>
        )}
      </Routes>
    </>
  );
};
