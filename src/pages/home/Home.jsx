import React from 'react'
import TopBar from '../../components/TopBar'
import Hello from './Hello'
import '../../assets/styles/home/Home.css'
import About from './About'
import Partners from './Partners'
import ScrollSpy from "react-ui-scrollspy";
import ServiceGrid from './ServiceGrid'


export default function Home() {
  return (
    <>
        <div className='topBarContainer'>
            <TopBar />
        </div>
        <div className='homeFlex'>
                <Hello />
                <ScrollSpy offsetBottom={150} scrollThrottle={80}>
                <section id='about'>
                  <About />
                </section>
                <section className='serviceGridFlex' id='services'>
                  <ServiceGrid />
                </section>
                <section id='partners'>
                  <Partners />
                </section>
                </ScrollSpy>
        </div>
    </>
  )
}
