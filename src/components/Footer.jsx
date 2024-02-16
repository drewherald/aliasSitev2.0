import React from 'react'
import '../assets/styles/componentStyles/Footer.css'

export default function Footer() {

    let date = new Date().getFullYear() 

  return (
    <div>
        <p className='aliasFooter'>{date} Alias Media & Design LLC</p>
    </div>
  )
}
