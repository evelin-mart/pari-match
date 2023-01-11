import React, { createContext } from 'react';
import data from '../data/data.json';
import { RootContextType } from '../types';

export const RootContext = createContext({} as RootContextType);

export const RootContextProvider = ({ children }: { children: React.ReactNode }) => {
  return <RootContext.Provider value={{ events: data }}>{children}</RootContext.Provider>;
};
