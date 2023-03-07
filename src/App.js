import './App.scss';
import React, { useState } from 'react';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import LogIn from './pages/LogIn';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <LogIn setToken={setToken}/>
  }

  return (
  <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/dashboard" element={<Dashboard/>}/>
  </Routes>
  )
}

export default App;
