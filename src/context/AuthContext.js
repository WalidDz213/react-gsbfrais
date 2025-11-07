import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null);


  const login = (loginValue, passwordValue) => {

   
    if (loginValue === "Andre" && passwordValue === "secret") {

      setUser({ login: loginValue });
      return true; 
    }

    return false; 
  };

  const logoutUser = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
