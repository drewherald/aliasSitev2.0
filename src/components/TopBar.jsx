import React from 'react'
import '../assets/styles/componentStyles/TopBar.css'
import aliasStudios from '../assets/photos/aliasStudios.png'


export default function TopBar() {
  return (
    <header id='topBar'>
      <div className='topBarFlex'>
            <img src={aliasStudios} alt="" className='aliasStudios'/>
            <ul>
                <li data-to-scrollspy-id='about'><a href="#about">ABOUT</a></li>
                <li data-to-scrollspy-id='services'><a href="#services">SERVICES</a></li>
                <li data-to-scrollspy-id='partners'><a href="#partners">PARTNERS</a></li>
                <li data-to-scrollspy-id='contact'><a href="#contact">CONTACT</a></li>
            </ul>
      </div>
      <div>

      </div>
    </header>
  )
}
