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
import Partner from './pages/projects/Partner';


export const AliasContext = createContext({
  menuStatus: false,
  projectTag: null,
  selectedService: null,
  toggleMenu: () => {},
  scrollToTop: () => {},
  newTag: () => {},
  newService: () => {}
})

function App() {


  const [menuStatus, setMenuStatus] = useState(false);

  const [projectTag, setProjectTag] = useState(null);

  const [selectedService, setSelectedService] = useState(null);

  const toggleMenu = () => {
    setMenuStatus(!menuStatus)
  }

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  const newTag = (tag) => {
    setProjectTag(tag)
  }

  const newService = (service) => {
    setSelectedService(service)
  }

  return (
    <>
    <AliasContext.Provider value = {{menuStatus, projectTag, selectedService, toggleMenu, scrollToTop, newTag, newService}}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/services' element={<Services />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/packages' element={<Packages />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/comingSoon' element={<ComingSoon />} />
        <Route path='/nameYourPrice' element={<NameYourPrice />} />
        <Route path='/projects/:id' element={<Partner />} />
      </Routes>
      <MenuMobile />
    </AliasContext.Provider>
    </>
  );
}

export default App;
