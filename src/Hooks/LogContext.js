import { createContext, useContext, useState } from 'react';

const LogContext = createContext(undefined);

export const LogProvider = ({ children }) => {
  const [isLoggedIn, setIsloggedIn] = useState(false);

  const login = () => {
    setIsloggedIn(true);
    console.log('login');
  };
  const logout = () => {
    setIsloggedIn(false);
    console.log('logout');
  };
  return (
    <LogContext.Provider value={{ isLoggedIn, logout, login }}>
      {children}
    </LogContext.Provider>
  );
};

export const useLog = () => useContext(LogContext);
