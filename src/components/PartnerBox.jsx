import React from 'react'
import '../assets/styles/componentStyles/PartnerBox.css'

export default function PartnerBox({name, refKey}) {

  return (
    <div className='partnerTop'>
       <div className='outrBorder'>
          <div className='innrBorder'>
            <div className='partnerBox'>
              {name}
              < img src={refKey} className='logoPartner' alt="" />
            </div>
      
        </ div>
      </ div>
    </div>
  )
}

