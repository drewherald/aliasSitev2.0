import React from 'react'

export default function ProjectButton({text}) {
  return (
    <div style={{borderRadius: '20px', display: 'inline', border: '2px solid white', backgroundColor: '#100F14', width: '7dvw', fontFamily: 'Helvetica, sans-serif', fontSize: '1.5svh', padding: '8px 15px', margin: '0 10px 0 0'}}>
      {text}
    </div>
  )
}
