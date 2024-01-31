import React from 'react'
import '../assets/styles/componentStyles/TopBar.css'
import aliasStudios from '../assets/photos/aliasStudios.png'


export default function TopBar() {
  return (
    <header id='topBar'>
      <div className='topBarFlex'>
            <img src={aliasStudios} alt="" className='aliasStudios'/>
            <ul>
                <li data-to-scrollspy-id='about'>ABOUT</li>
                {/*<li data-to-scrollspy-id='services'>SERVICES</li>*/}
                <li data-to-scrollspy-id='partners'>PARTNERS</li>
                <li data-to-scrollspy-id='contact'>CONTACT</li>
            </ul>
      </div>
      <div>

      </div>
    </header>
  )
}
