import React, { createContext } from 'react';

export const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const backendUrl = 'https://user-register-mern.vercel.app/api';
 //const backendUrl = 'http://localhost:4005/api';
  return (
    <AppContext.Provider value={{ backendUrl }}>
      {children}
    </AppContext.Provider>
  );
};
