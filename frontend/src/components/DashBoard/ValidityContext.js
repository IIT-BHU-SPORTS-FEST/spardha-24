import React, { createContext, useState } from 'react';

export const ValidityContext = createContext();

export const ValidityProvider = ({ children }) => {
  const [isValid, setIsValid] = useState(false);
  return (
    <ValidityContext.Provider value={{ isValid, setIsValid }}>
      {children}
    </ValidityContext.Provider>
  );
};