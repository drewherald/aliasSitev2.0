import React from 'react'
import '../../assets/styles/home/Hello.css'
import aliasALT from '../../assets/photos/aliasALT.png'
import aliasALTTwo from '../../assets/photos/aliasALTTwo.png'

export default function Hello() {
  return (
    <>
      <div id='welcome'>
        <div className='welcomeFlex'>
          <h1>WELCOME <br className='helloBreak'/> TO ALIAS</h1>
        </div>
      
       <div className='altLogos'>
        <img src={aliasALT} alt="" className='aliasALT'/>
        <img src={aliasALTTwo} alt="" className='aliasALT'/>
       </div>
      </div>
    </>
  )
}
