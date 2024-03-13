import React from 'react'
import '../../assets/styles/home/GetToKnow.css'
import backgroundImg from '../../assets/photos/webbackground.png'
import globeSmall from '../../assets/photos/globeSmall.png'

export default function GetToKnow() {
  return (
    <>
      <div className='footContainer'>
          <div className='backgroundImgBottom'>
                <img src={backgroundImg} alt="" />
          </div>
        
      </div>
      <div className='footText'>
        <h5>
          Let's team up.
        </h5>
        <p>
          New idea, project, or website?
        </p>
        <a href="" className="connectWUs">
                Connect with us!
        </a>
        <img src={globeSmall} alt="" className='globeSmall' />
    </div>
    </>
    
  )
}
