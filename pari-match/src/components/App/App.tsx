import React from 'react';
import { RootContextProvider } from '../../context';
import { Router } from '../Router';
import '../../App.css';

export const App = () => {
  return (
    <RootContextProvider>
      <Router />
    </RootContextProvider>
  );
};
