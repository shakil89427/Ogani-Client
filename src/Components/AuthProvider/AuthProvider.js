import React, { createContext } from "react";
import Store from "./Store";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const useContext = Store();
  return (
    <AuthContext.Provider value={useContext}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
