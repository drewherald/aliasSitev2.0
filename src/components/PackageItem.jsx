import React from 'react'
import '../assets/styles/componentStyles/PackageItem.css'

export default function PackageItem({contentItem}) {
  return (
    <div>
       <>
    <div className='mainPIContainer'>
      <div className='PILeft'>
            <h3>
                {contentItem.number}.
            </h3>
            <h1>{contentItem.title}</h1>
      </div>
      <div className='PIRight'>
        <h3>{contentItem.header}</h3>
        <br />
        <p>{contentItem.body1}</p>
        <br />
        <p>Includes:</p>
        <div className='includeList'>
            {contentItem.includes.map((item) => <p>{item}</p> )}
        </div>
      </div>
    </div>
    <hr className='pRunner' />
    </>
    </div>
  )
}
