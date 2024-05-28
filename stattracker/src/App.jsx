//import Example from "./components/example/example"
//import Pruebas from "./components/pruebas/pruebas"

import { Route, Routes } from "react-router-dom";
import './App.css'
import Home from "./views/home/home.jsx";
import { ValoHome } from "./views/valorant-home/valorant-home.jsx"
import { HonkaiHome } from './views/honkai-home/honkai-home.jsx'
import { Navbar } from "./components/navbar/Navbar.jsx";
import { Footer } from "./components/footer/Footer.jsx";


function App() {

  return (
    <>
      <div className='flex flex-col justify-between w-vh min-h-screen'>
        <div>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/valorant' element={<ValoHome/>}/>
            <Route path='/honkai' element={<HonkaiHome/>}/>
          </Routes>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default App