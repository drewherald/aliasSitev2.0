import React, { createRef, forwardRef, useState } from 'react'
import '../../assets/styles/home/Partners.css'
import PartnerBox from '../../components/PartnerBox'
import { v4 as uuidv4 } from 'uuid'
import back2you from '../../assets/photos/back2youlogo.png'

export default function Partners() {

    const partners = [
        {
            name: 'Back 2 You Podcast',
            refKey: './src/assets/photos/back2youlogo.png'
        },
        {
            name: "Daisy Market Collective",
            refKey: './src/assets/photos/daisyMarketLogo.png'
        }
    ]


  return (
    <section id='partners'>
        <h2 className='mobilePartnerTitle'>Our Partners</h2>
        <div className='partnerTopContainer'>
            <div className='partnerItemContainer'>
                {partners.map((partner) => (
                    <PartnerBox name={partner.name} refKey={partner.refKey}  key={uuidv4()}/>
                ))}
            
            </div>
            <div className='ourPartners'>
                <h2 >Our Partners</h2>
            </div>
            
            
        </div>
        
    </section>
  )
}
