import React from 'react'
import '../assets/styles/componentStyles/PartnerBox.css'
import one from '../assets/photos/partners/skele1.png'
import two from '../assets/photos/partners/skele2.png'
import three from '../assets/photos/partners/skele3.png'


export default function PartnerBox({name, refKey, id}) {


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
    <div className='partnerTop' onClick={() =>(window.location.href = `/projects/${id}`)}   >
            <div className='partnerBox'>
              < img src={referenceKey} className='logoPartner' alt="" />
              <p className='partnerName'>{name}</p>

            </div>
    </div>
  )
}

