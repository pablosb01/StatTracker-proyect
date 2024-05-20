//import Example from "./components/example/example"
//import Pruebas from "./components/pruebas/pruebas"

import { Route, Routes } from "react-router-dom";
import './App.css'
import { Sidebar } from "./components/sidebar/Sidebar.jsx";
import Home from "./views/home/home.jsx";
import { ValoHome } from "./views/valorant-home/valorant-home.jsx"
import { HonkaiHome } from './views/honkai-home/honkai-home.jsx'


function App() {

  return (
    <>
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/VALORANT' element={<ValoHome/>}/>
        <Route path='/Honkai' element={<HonkaiHome/>}/>
      </Routes>
    </>
  )
}

export default App