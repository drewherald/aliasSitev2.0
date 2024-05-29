import React from 'react'
import ProjectButton from './ProjectButton'
import '../assets/styles/componentStyles/ProjectItem.css'

export default function ProjectItem({contentItem}) {
  return (
    <>
        <hr className='projRunner' />

        <div className='projectSubtitles'>
          
            <p className='projectTitle'>{contentItem.name}</p>
            <div className='projectButtons'>
            {contentItem.work.map((item) => <ProjectButton text={item}/>)}
            </div>
            <p className='projectYear'>{contentItem.year}</p>
        </div>
    </>

  )
}
