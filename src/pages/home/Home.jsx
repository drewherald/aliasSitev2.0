import React from 'react'
import TopBar from '../../components/TopBar'
import Hello from './Hello'
import '../../assets/styles/home/Home.css'
import About from './About'

export default function Home() {
  return (
    <>
        <div className='topBarContainer'>
            <TopBar />
        </div>
        <div className='homeFlex'>
                <Hello />
                <About />
        </div>
    </>
  )
}
