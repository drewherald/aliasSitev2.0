import React from 'react'
import '../assets/styles/componentStyles/TopBar.css'
import aliasStudios from '../assets/photos/aliasStudios.png'


export default function TopBar() {
  return (
    <>
      <div className='topBarFlex'>
            <ul>
                <li className='topBarLink'><a href="#about">ABOUT</a></li>
                <li className='topBarLink'><a href="#services">SERVICES</a></li>
                <li className='topBarLink'><a href="#partners">PARTNERS</a></li>
                <li>      <div> <img src={aliasStudios} alt="" className='aliasStudios'/></div>     </li>
                <li className='topBarLink'><a href="">PACKAGES</a></li>
                <li className='topBarLink'><a href="">ALIAS+</a></li>
                <li className='topBarLink'><a href="#contact">CONTACT</a></li>

            </ul>
      </div>
      <div>

      </div>
    </>
  )
}
