import React from 'react'
import blueSquare from "../../assets/photos/blueSquare.png"
import '../../assets/styles/home/ourProcess.css'
import initiateConnection from '../../assets/photos/initiateConnection.png'

export default function OurProcess() {
  return (
    <>
       <section className="ourProcess">
          <div className="waypoint">
            <img src={blueSquare} alt="" />
            <p>OUR PROCESS</p>  
          </div>
          <div className='processContent'>
            <h3 className='elevateBrand'>
                How we elevate your brand.
            </h3>
            <div className='processAnimation'>
                <p>animation</p>
            </div>
          </div>
          <div className='processImages'>
                <img src={initiateConnection} alt="" />
          </div>
          
        </section>
    </>
  )
}
