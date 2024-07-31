import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../UserContext";
import { toast } from "react-toastify";

const PrivateRoute = ({ element }) => {
  const { user } = useUser();

  if (!user) {
    toast.error("You must be logged in to access this page.");
    return <Navigate to="/auth" />;
  }

  return element;
};

export default PrivateRoute;
