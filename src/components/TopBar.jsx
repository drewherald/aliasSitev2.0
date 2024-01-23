import React from 'react'
import '../assets/styles/componentStyles/TopBar.css'
import aliasStudios from '../assets/photos/aliasStudios.png'


export default function TopBar() {
  return (
    <header id='topBar'>
      <div className='topBarFlex'>
            <img src={aliasStudios} alt="" className='aliasStudios'/>
            <ul>
                <li data-to-scrollspy-id='about'>About</li>
                <li data-to-scrollspy-id='services'>Services</li>
                <li data-to-scrollspy-id='partners'>Partners</li>
                <li data-to-scrollspy-id='contact'>Contact</li>
            </ul>
      </div>
      <div>

      </div>
    </header>
  )
}
