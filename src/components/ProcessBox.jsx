import React from 'react'
import one from '../assets/photos/processes/processOne.png'
import two from '../assets/photos/processes/processTwo.png'
import '../assets/styles/componentStyles/ProcessBox.css'

export default function ProcessBox({refKey}) {

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
  }

  return (

      <div className='processBox'>
        <div>
        < img src={referenceKey} className='processImg' alt="" />

        </div>
        </div>

  )
}
