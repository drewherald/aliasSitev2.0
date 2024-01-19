import React from 'react'
import TopBar from '../../components/TopBar'
import Hello from './Hello'
import '../../assets/styles/home/Home.css'

export default function Home() {
  return (
    <>
        <div className='topBarContainer'>
            <TopBar />
        </div>
        <div className='homeFlex'>
            <div className='helloContainer'>
                <Hello />
            </div>
        </div>
    </>
  )
}
