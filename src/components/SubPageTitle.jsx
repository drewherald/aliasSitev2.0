import React from 'react'
import PageArrow from '../assets/photos/pageArrow.png'
import '../assets/styles/componentStyles/SubPageTitle.css'
import aliasStudios from "../assets/photos/aliasStudios.png";

export default function SubPageTitle({subtitle, title}) {
  return (
    <>
      <div className='subPageTitle'>
      <img src={aliasStudios} alt="" className="aliasStudiosMobileSP" />

                <h5>
                    {subtitle}
                </h5>

                <h1 style={{margin: '10svh 0 0 0'}}>
                    {title}
                </h1>

                <img src={PageArrow} alt=""  className='pageArrow' style={{padding: '20svh 0 0 0'}}/>
            </div>
    </>
  )
}
