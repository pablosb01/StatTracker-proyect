//import Example from "./components/example/example"
//import Pruebas from "./components/pruebas/pruebas"

import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './views/home.jsx'
import Example from './components/example/example.jsx';


function App() {

  return (
    <Router>
      <Route path="/" component={Home}/> 
      <Route path='/example' component={Example}/>
    </Router>
  )
}

export default App;
