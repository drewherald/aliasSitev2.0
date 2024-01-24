import React, { useState } from 'react'
import '../../assets/styles/home/Partners.css'
import PartnerBox from '../../components/PartnerBox'
import { v4 as uuidv4 } from 'uuid';


export default function Partners() {

    const partners = ['partner1', 'partner2', 'law partner3', 'partner4']


  return (
    <section id='partners'>
        <h2 className='mobilePartnerTitle'>Our Partners</h2>
        <div className='partnerTopContainer'>
            <div className='partnerItemContainer'>
                {partners.map((name) => (
                    <PartnerBox name={name} key={uuidv4()}/>
                ))}
            
            </div>
            <div className='ourPartners'>
                <h2 >Our Partners</h2>
            </div>
            
            
        </div>
        
    </section>
  )
}
