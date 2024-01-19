import React from 'react'
import '../../assets/styles/home/Hello.css'
import downArrow from '../../assets/photos/downArrow.png'

export default function Hello() {
  return (
    <>
    <section>
      <div id='welcome'>
        <span className='beginningWelcomeText'> 
                Welcome to Alias.
            </span> 
            <span className='endWelcomeText'>
                We Leverage Digital Marketing Technolologies in Order to Bring Your Business Into the Future
            </span>
      </div>
    </section>
    <div className='arrowContainer'>
        <img src={downArrow} alt=""  className='downArrow'/>
    </div>
    </>
  )
}
