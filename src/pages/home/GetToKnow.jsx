import React from 'react'
import '../../assets/styles/home/GetToKnow.css'
import ContactUs from './ContactUs'

export default function GetToKnow() {
  return (
    <div>
            <h1 className='gtk'>LETS TALK.</h1>
            <p className='gtkP'>Ready to take the next step towards modernizing your business? Look no further.
            Fill out the form below and let us know how we can help.
            </p>

            <ContactUs />

    </div>
  )
}
