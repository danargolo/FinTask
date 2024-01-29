import React, { createContext, useContext, useMemo, useState } from 'react';

const FinanceContext = createContext({});

export const FinanceProvider = ({ children }) => {
  const [value, setValue] = useState({
    transaction: 'income',
    description: '',
    value: '',
    categories: 'Salário'
  });
  const [disabled, setDisabled] = useState(true);

  const contextValue = useMemo(() => {
    return { setValue, value, disabled, setDisabled };
  }, [setValue, value, disabled, setDisabled]);

  return (
    <FinanceContext.Provider value={contextValue}>
      { children }
    </FinanceContext.Provider>
  );
};

export const useFinanceContext = () => useContext(FinanceContext);
