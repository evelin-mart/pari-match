import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DetailsPage } from '../../pages/DetailsPage';
import { MainPage } from '../../pages/MainPage';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path='match/:id' element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};
