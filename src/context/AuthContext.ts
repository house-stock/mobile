import React from "react";

export const AuthContext = React.createContext({
    userIsLogged: false,
    login: (a) => Promise.resolve(),
    logout: () => {}
  });