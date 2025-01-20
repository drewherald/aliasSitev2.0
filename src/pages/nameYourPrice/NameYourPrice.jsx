import React, { createRef, useContext, useRef, useState }  from 'react'
import backgroundImg from "../../assets/photos/webbackground.jpg";
import TopBar from '../../components/TopBar';
import { AliasContext } from '../../App';
import SubPageTitle from '../../components/SubPageTitle';
import '../../assets/styles/home/ContactUs.css'
import '../../assets/styles/about/AboutPage.css'
import GetToKnow from '../home/GetToKnow';
import { Form } from 'react-router-dom';
import PriceForm from '../../components/PriceForm';

export default function AboutPage() {

    const AliasGlobal = useContext(AliasContext)

    const userBudget = createRef()



  return (
    <section className='aboutPage'>
      
      <div className="backgroundImgAboutPage">
            <img src={backgroundImg} alt="" />
        </div>
        

        <div className='aboutPageContent'>
        <TopBar
          className={AliasGlobal.menuStatus == true ? " limitScroll" : ""}
        />

            <SubPageTitle subtitle={'NAME YOUR PRICE.'} title={"Let's Get Started"} />

            
            <h1>Alias Studios Name Your Price Tool</h1>
            <PriceForm />

            <div>
              <GetToKnow />
            </div>
            
        </div>

    </section>
  )
}
