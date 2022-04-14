import React from "react";
import { Navigate, useLocation } from "react-router-dom";
// import { useUserContext } from '../context/user_context'
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useAuth0();
  let location = useLocation();
  if (!user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/" state={{ from: location }} />;
  }
  return children;
};

export default PrivateRoute;
