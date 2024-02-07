import React, { createRef, forwardRef, useState } from 'react'
import '../../assets/styles/home/Partners.css'
import PartnerBox from '../../components/PartnerBox'
import { v4 as uuidv4 } from 'uuid'
import back2you from '../../assets/photos/back2youlogo.png'

export default function Partners() {

    const partners = [
        {
            name: 'Back 2 You Podcast',
            refKey: 1
        },
        {
            name: "Inclusion Brand",
            refKey: 2
        },
        {
            name: 'Gator Roofing',
            refKey: 3
        },
        {
            name: "Crescentia Fitness",
            refKey: 4
        },
        {
            name: 'Daisy Market',
            refKey: 5
        }
    ]


  return (
    <section id='partners'>
        <p className='our'>OUR</p>
        <h1 className='PartnerTitle'>PROJECTS</h1>
        <div className='partnerTopContainer'>
            <div className='partnerItemContainer'>
                {partners.map((partner) => (
                    <PartnerBox name={partner.name} refKey={partner.refKey}  key={uuidv4()}/>
                ))}
            </div>
            
        </div>
        
    </section>
  )
}
