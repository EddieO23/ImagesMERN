import React, { createContext, useState } from 'react';

const AppContext = createContext(undefined);

export function AppContextProvider({ children }) {
  const [name, setName] = useState('hello');

  return (
    <AppContext.Provider value={{ name, setName }}>
      {children}
    </AppContext.Provider>
  );
}
export default AppContext;
