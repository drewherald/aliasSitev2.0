import React from 'react'
import '../assets/styles/componentStyles/AboutItem.css'

export default function AboutItem({contentItem}) {
    return (
      <div>
         <>
      <div className='mainAIContainer'>
        <div className='AILeft'>
              <h3>
                  {contentItem.number}.
              </h3>
              <h1>{contentItem.title}</h1>
        </div>
        <div className='AIRight'>
          <p>{contentItem.body}</p>
        </div>
      </div>
      <hr className='aRunner' />
      </>
      </div>
    )
  }
  