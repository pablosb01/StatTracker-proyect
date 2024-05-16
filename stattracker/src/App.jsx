//import Example from "./components/example/example"
//import Pruebas from "./components/pruebas/pruebas"

import { Route, Routes } from "react-router-dom";
import  Home  from "./views/home/home.jsx";
import { ValoHome } from "./views/valorant-home/valorant-home.jsx";
import './App.css'
import { Sidebar } from "./components/sidebar/Sidebar.jsx";

function App() {

  return (
    <>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/valo' element={<ValoHome/>} />
      </Routes>
    </>
  )
}

export default App