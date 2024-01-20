import React from 'react'
import TopBar from '../../components/TopBar'
import Hello from './Hello'
import '../../assets/styles/home/Home.css'
import About from './About'
import Partners from './Partners'

export default function Home() {
  return (
    <>
        <div className='topBarContainer'>
            <TopBar />
        </div>
        <div className='homeFlex'>
                <Hello />
                <About />
                <Partners />
        </div>
    </>
  )
}
