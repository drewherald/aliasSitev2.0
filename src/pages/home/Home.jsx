import React from 'react'
import TopBar from '../../components/TopBar'
import Hello from './Hello'
import '../../assets/styles/home/Home.css'
import About from './About'
import Partners from './Partners'
import ScrollSpy from "react-ui-scrollspy";
import ServiceGrid from './ServiceGrid'
import GetToKnow from './GetToKnow'
import Footer from '../../components/Footer'


export default function Home() {
  return (
    <>
        <div className='topBarContainer'>
            <TopBar />
        </div>
        <div className='homeFlex'>
                <Hello />
                <ScrollSpy scrollThrottle={40}>
                <section id='about'>
                  <About />
                </section>
                <section id='partners'>
                  <Partners />
                </section>
                <section id='contact'>
                  <GetToKnow />
                </section>
                </ScrollSpy>
                <Footer />
        </div>
    </>
  )
}
