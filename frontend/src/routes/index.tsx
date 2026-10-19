import { BrowserRouter, Route, Routes as RouterRoutes } from "react-router-dom";

import { LoginPage } from "../features/auth";
import { DashboardPage } from "../features/dashboard";
import { PrivateRoute } from "./private-route";

export const Routes = () => {
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route path="/login" element={<LoginPage />} />

        <Route element={<PrivateRoute />}>
          <Route path="/" element={<DashboardPage />} />
        </Route>
      </RouterRoutes>
    </BrowserRouter>
  );
};
