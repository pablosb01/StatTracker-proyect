//import Example from "./components/example/example"
//import Pruebas from "./components/pruebas/pruebas"

import React from 'react';
import './App.css'
import {  Routes, Route } from "react-router-dom";
import Home from './views/home.jsx'
import Example from './components/example/example.jsx';


function App() {

  return (
    <>
      <Routes>
        <Route path="/" component={<Home />}/> 
        <Route path="/ex" component={<Example />}/> 
      </Routes>
    </>
)}

export default App;
