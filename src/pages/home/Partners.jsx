import React, { createRef, forwardRef, useState } from 'react'
import '../../assets/styles/home/Partners.css'
import PartnerBox from '../../components/PartnerBox'
import { v4 as uuidv4 } from 'uuid'
import blueSquare from "../../assets/photos/blueSquare.png";

export default function Partners() {

    const partners = [
        {
            name: 'Nevada',
            refKey: 1
        },
        {
            name: "Oklahoma",
            refKey: 2
        },
        {
            name: 'Kentucky',
            refKey: 3
        }
    ]


  return (
    <section id='partners'>

         <div className="waypoint">
          <img src={blueSquare} alt="" />
          <p>PROJECTS</p>
        </div>

        
        <div className='partnerTopContainer'>
                {partners.map((partner) => (
                    <PartnerBox name={partner.name} refKey={partner.refKey}  key={uuidv4()}/>
                ))}            
        </div>
        
        <div className='seeMoreContainer'>
            <a href="" className="seeMore">
                See More
            </a>
        </div>
       
    </section>
  )
}
