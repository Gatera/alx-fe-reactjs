import React, { Children } from "react";
import { Navigate } from "react-router-dom";

const isAuthenticated = () => {
    return localStorage.getItem('auth') === 'true';
}

function ProtectedRoute() {
  return (
    isAuthenticated() ? Children : <Navigate to="/" />
  );
}

export default ProtectedRoute