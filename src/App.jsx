import React, { useState, createContext } from 'react'
import "./assets/styles/App.css";
import Home from "./pages/home/Home";
import ComingSoon from './pages/comingSoon/comingSoon';
import { Route, Routes } from "react-router-dom";
import MenuMobile from './components/MenuMobile';
import ContactPage from './pages/contact/ContactPage';

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
        <Route path='/comingSoon' element={<ComingSoon />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
      <MenuMobile />
    </AliasContext.Provider>
    
  );
}

export default App;
