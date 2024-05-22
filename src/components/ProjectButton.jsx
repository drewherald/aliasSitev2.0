import React from 'react'

export default function ProjectButton({text}) {
  return (
    <div style={{borderRadius: '20px', display: 'inline', border: '2px solid white', backgroundColor: 'black', width: '7dvw', fontFamily: 'Helvetica, sans-serif', fontSize: '1.5svh', padding: '5px 8px', margin: '0 10px 0 0'}}>
      {text}
    </div>
  )
}
