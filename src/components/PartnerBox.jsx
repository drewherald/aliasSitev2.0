import React from 'react'
import '../assets/styles/componentStyles/PartnerBox.css'
import one from '../assets/photos/partners/skele1.png'
import two from '../assets/photos/partners/skele2.png'
import three from '../assets/photos/partners/skele3.png'
import four from '../assets/photos/partners/skele4.png'
import five from '../assets/photos/partners/skele5.png'


export default function PartnerBox({name, refKey}) {


  let referenceKey = one

  switch(refKey){
    case 2:
      referenceKey = two
      break

    case 3:
        referenceKey = three
        break

    case 4:
        referenceKey = four
        break

    case 5: 
      referenceKey = five
      break
  }

  return (
    <div className='partnerTop'>
            <div className='partnerBox'>
              < img src={referenceKey} className='logoPartner' alt="" />
              <p className='partnerName'>{name}</p>

            </div>
    </div>
  )
}

