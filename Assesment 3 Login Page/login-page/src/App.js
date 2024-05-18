import logo from './logo.svg';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import './App.css';
import Home from './Components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Home}/>
        <Route path='/login' Component={Login}/>
      </Routes>
    </Router>
  );
}

export default App;
