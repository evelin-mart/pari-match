import React, { createContext, useEffect, useState } from 'react';
import data from '../data/data.json';
import { RootContextType } from '../types';

export const RootContext = createContext({} as RootContextType);

export const RootContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [bet, setBet] = useState('');

  useEffect(() => {
    if (bet) {
      setTimeout(() => setBet(''), 2500);
    }
  }, [bet, setBet]);

  return (
    <RootContext.Provider value={{ events: data, bet, setBet }}>{children}</RootContext.Provider>
  );
};
