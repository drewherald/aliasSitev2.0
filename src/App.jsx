import React, { useState, createContext } from 'react'
import "./assets/styles/App.css";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";

export const AliasContext = createContext({
  menuStatus: false,
  toggleMenu: () => {}
})

function App() {


  const [menuStatus, setMenuStatus] = useState(false)

  const toggleMenu = () => {
    setMenuStatus(!menuStatus)
    console.log(menuStatus)
  }

  return (
    <AliasContext.Provider value = {{menuStatus, toggleMenu}}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </AliasContext.Provider>
    
  );
}

export default App;
