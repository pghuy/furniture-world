import React, { useContext, useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserContext = React.createContext();

export const UserProvider = (props) => {
  const { loginWithRedirect, user, logout } = useAuth0();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    setCurrentUser(user);
  }, [user]);
  return (
    <UserContext.Provider value={{ loginWithRedirect, currentUser, logout }}>
      {props.children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
