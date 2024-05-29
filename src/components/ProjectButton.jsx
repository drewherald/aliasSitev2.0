import React from 'react'

export default function ProjectButton({text}) {
  return (
    <div id='projButtn' style={{borderRadius: '20px', display: 'inline', border: '2px solid white', backgroundColor: '#100F14', fontFamily: 'Helvetica, sans-serif', fontSize: '1.5svh', padding: '8px 15px'}}>
      {text}
    </div>
  )
}
