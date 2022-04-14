import React from "react";
import { Route, Navigate } from "react-router-dom";
// import { useUserContext } from '../context/user_context'
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useAuth0();
  return (
    <Route
      {...rest}
      render={() => {
        return user ? children : <Route render={() => <Navigate to="/" /> } />;
      }}
    />
  );
};
export default PrivateRoute;
