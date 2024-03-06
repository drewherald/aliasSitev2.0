import React from 'react'
import TopBar from '../../components/TopBar'
import '../../assets/styles/home/Home.css'
import About from './About'
import Partners from './Partners'
import ScrollSpy from "react-ui-scrollspy";
import GetToKnow from './GetToKnow'
import Footer from '../../components/Footer'
import backgroundImg from '../../assets/photos/webbackground.png'


export default function Home() {
  return (
    <>
        <div className='topBarContainer'>
            <TopBar />
        </div>
        
        <div className='homeFlex'>
        <div className='backgroundImg'>
              <img src={backgroundImg} alt="" />
        </div>
                <ScrollSpy scrollThrottle={40}>
                <section id='services'>
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
