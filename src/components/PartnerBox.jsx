import React from 'react'
import '../assets/styles/componentStyles/PartnerBox.css'

export default function PartnerBox({name, refKey}) {

  return (
    <div className='partnerBox'>
      {name}
      <img src={refKey} className='logoPartner' alt="" />
    </div>
  )
}
