import React, { useContext } from 'react'
import backgroundImg from "../../assets/photos/webbackground.png";
import '../../assets/styles/comingSoon/comingSoon.css'
import TopBar from '../../components/TopBar';
import { AliasContext } from '../../App';
import ContactUs from '../home/ContactUs'
import '../../assets/styles/contact/ContactPage.css'

export default function ContactPage() {
  const AliasGlobal = useContext(AliasContext)


  return (
    <section className='contactContainer'>

        <div className="backgroundImgContact">
            <img src={backgroundImg} alt="" />
        </div>
        

        <div className='contactContent'>
        <TopBar
          className={AliasGlobal.menuStatus == true ? " limitScroll" : ""}
        />

        <ContactUs> </ContactUs>
          
        </div>
        
    </section>
  )
}
