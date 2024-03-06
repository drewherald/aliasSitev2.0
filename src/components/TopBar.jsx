import React from 'react'
import '../assets/styles/componentStyles/TopBar.css'
import aliasStudios from '../assets/photos/aliasStudios.png'


export default function TopBar() {
  return (
    <header id='topBar'>
      <div className='topBarFlex'>
            <ul>
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#services">SERVICES</a></li>
                <li><a href="#partners">PARTNERS</a></li>
                <li>      <div> <img src={aliasStudios} alt="" className='aliasStudios'/></div>     </li>
                <li><a href="">PACKAGES</a></li>
                <li><a href="">ALIAS+</a></li>
                <li><a href="#contact">CONTACT</a></li>

            </ul>
      </div>
      <div>

      </div>
    </header>
  )
}
