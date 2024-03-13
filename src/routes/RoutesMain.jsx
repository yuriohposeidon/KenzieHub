import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { RegisterPage } from "../pages/RegisterPage";
import { PublicRoutes } from "./publicRoutes";
import { ProtectRoutes } from "./protectRoutes";
import { TecnologyProvider } from "../providers/TecnologyContext";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicRoutes />}>
        <Route index element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      <Route path="/home" element={<ProtectRoutes />}>
        <Route
          index
          element={
            <TecnologyProvider>
              <HomePage />
            </TecnologyProvider>
          }
        />
      </Route>
    </Routes>
  );
};
