import './App.scss';
import React, { useState } from 'react';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import LogIn from './pages/LogIn';
import Register from './pages/Register';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<LogIn/>}/>
      </Routes>
    </>
  )
}

export default App;
