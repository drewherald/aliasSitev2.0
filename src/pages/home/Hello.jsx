import React from 'react'
import '../../assets/styles/home/Hello.css'
import downArrow from '../../assets/photos/downArrow.png'

export default function Hello() {
  return (
    <>
    <section>
      <div id='welcome'>
        <span className='beginningWelcomeText'> 
                WELCOME TO ALIAS
            </span> 
            <span className='endWelcomeText'>
                EXCEPTIONAL DESIGN AND STRATEGIC SOLUTIONS
            </span>
      </div>
    </section>
    <div className='arrowContainer'>
        <img src={downArrow} alt=""  className='downArrow'/>
    </div>
    </>
  )
}
