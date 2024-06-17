//import Example from "./components/example/example"
//import Pruebas from "./components/pruebas/pruebas"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css'
import Home from "./views/home/home.jsx";
import { ValoHome } from "./views/valorant-home/valorant-home.jsx"
import { HonkaiHome } from './views/honkai-home/honkai-home.jsx'
import { Navbar } from "./components/navbar/Navbar.jsx";
import { Footer } from "./components/footer/Footer.jsx";
import { PlayerValorant } from "./views/valorant-player/PlayerValo.jsx";
import matchInfo from '/src/objects/matchinfo.js'
import { useParams } from 'react-router-dom'
import { HonkaiUser } from './views/honkai-user.jsx/honkai-user.jsx';


function App() {

  /* console.log(matchInfo) */


  return (
    <>
      <div className='flex flex-col justify-between w-vh min-h-screen'>
        <div>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/valorant' element={<ValoHome/>}/>
            <Route path='/honkai' element={<HonkaiHome/>}/>
            <Route path='/valorant/:accountName/:hashtag' element={<PlayerValorant/>}/>
            <Route path='/honkaiuser' element={<HonkaiUser/>}/>
          </Routes>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default App