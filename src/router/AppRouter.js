import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';

//? Paginas
import { LoginScreen } from '../pages/LoginScreen';
import { MainScreen } from '../pages/MainScreen';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

export const AppRouter = () => {
  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      {user.loading || !user.logged ? <PublicRoutes /> : <PrivateRoutes />}
    </BrowserRouter>
  );
};
