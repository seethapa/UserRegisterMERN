import React, { createContext } from 'react';

export const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const backendUrl = 'http://localhost:4001/api';
// const backendUrl = BACKEND_URL;
  return (
    <AppContext.Provider value={{ backendUrl }}>
      {children}
    </AppContext.Provider>
  );
};
