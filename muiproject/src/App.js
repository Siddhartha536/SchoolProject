import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
  Navigate,
} from "react-router-dom";
import React, { useState, useEffect } from 'react';

import { Grid } from "@mui/material";
import Home from './components/Home/Home';
import { Hello } from './components/Hello';
import {AboutUs} from './components/AboutUs/AboutUs';
function App() {
  return (
    <div className="App">
              <Routes>
        <Route exact path="/" element={ <Home/>} />
        <Route exact path="/hello" element={ <Hello/>} />
        <Route exact path="/aboutus" element={ <AboutUs/>} />
        <Route render={() => <Navigate to="/" />} />
        </Routes>


     
      
    </div>
  );
}

export default App;
