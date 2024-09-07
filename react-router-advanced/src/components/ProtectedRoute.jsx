import React, { Children } from "react";
import { Navigate } from "react-router-dom";
import { useAuth }  from "../hooks/useAuth";

function ProtectedRoute({ children }) {
    const { isAuthenticated } = useAuth();

  return (
    isAuthenticated() ? Children : <Navigate to="/" />
  );
}

export default ProtectedRoute