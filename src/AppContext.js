import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [openMenu, setMenu] = useState(false);

  return (
    <AppContext.Provider value={{ openMenu, setMenu }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
