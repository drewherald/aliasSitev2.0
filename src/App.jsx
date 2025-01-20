import React, { useState, createContext } from 'react'
import "./assets/styles/App.css";
import Home from "./pages/home/Home";
import ComingSoon from './pages/comingSoon/comingSoon';
import Services from './pages/services/Services'
import { Route, Routes } from "react-router-dom";
import MenuMobile from './components/MenuMobile';
import ContactPage from './pages/contact/ContactPage';
import Packages from './pages/packages/Packages';
import Projects from './pages/projects/Projects';
import AboutPage from './pages/about/AboutPage';
import NameYourPrice from './pages/nameYourPrice/nameYourPrice';


export const AliasContext = createContext({
  menuStatus: false,
  toggleMenu: () => {},
  scrollToTop: () => {}
})

function App() {


  const [menuStatus, setMenuStatus] = useState(false)

  const toggleMenu = () => {
    setMenuStatus(!menuStatus)
    console.log(menuStatus)
  }

  const scrollToTop = () => {
    window.scrollTo(0, 0)
}

  return (
    <>
    <AliasContext.Provider value = {{menuStatus, toggleMenu, scrollToTop}}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/services' element={<Services />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/packages' element={<Packages />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/comingSoon' element={<ComingSoon />} />
        <Route path='/nameYourPrice' element={<NameYourPrice />} />
      </Routes>
      <MenuMobile />
    </AliasContext.Provider>
    </>
  );
}

export default App;
