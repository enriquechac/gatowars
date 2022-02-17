import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//? Paginas 
import { LoginScreen } from '../pages/LoginScreen';
import { MainScreen } from '../pages/MainScreen';


export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<MainScreen/>} />
            <Route path='/login' element={<LoginScreen />} />
            <Route path='*' element={<Navigate to='/' />}/>
        </Routes>
    </BrowserRouter>
  )
}
