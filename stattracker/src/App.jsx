//import Example from "./components/example/example"
//import Pruebas from "./components/pruebas/pruebas"

import { Route, Routes } from "react-router-dom";
import  Home  from "./views/home.jsx";
import './App.css'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App