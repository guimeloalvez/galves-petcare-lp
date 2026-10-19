import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "../features/auth";

export function PrivateRoute() {
  const { session } = useAuth();

  if (!session) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
