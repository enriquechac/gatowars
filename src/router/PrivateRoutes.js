import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginScreen } from '../pages/LoginScreen';
import { MainScreen } from '../pages/MainScreen';

export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
