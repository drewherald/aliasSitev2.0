import React from 'react'
import '../assets/styles/componentStyles/TopBar.css'
import aliasStudios from '../assets/photos/aliasStudios.png'

export default function TopBar() {
  return (
    <header id='topBar'>
      <div className='topBarFlex'>
            <img src={aliasStudios} alt="" className='aliasStudios'/>
            <ul>
                <li>About</li>
                <li>Services</li>
                <li>Partners</li>
                <li>Contact</li>
            </ul>
      </div>
      <div>

      </div>
    </header>
  )
}
