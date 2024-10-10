import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  const toggleAdmin = () => setIsAdmin((prev) => !prev);

  return (
    <AuthContext.Provider value={{ isAdmin, toggleAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};
