import React, { useContext }  from 'react'
import backgroundImg from "../../assets/photos/webbackground.jpg";
import TopBar from '../../components/TopBar';
import { AliasContext } from '../../App';
import SubPageTitle from '../../components/SubPageTitle';
import '../../assets/styles/about/AboutPage.css'
import { Link } from 'react-router-dom';
import blueSquare from "../../assets/photos/blueSquare.png"
import GetToKnow from '../home/GetToKnow';


export default function AboutPage() {

    const AliasGlobal = useContext(AliasContext)


  return (
    <section className='aboutPage'>
      
      <div className="backgroundImgAboutPage">
            <img src={backgroundImg} alt="" />
        </div>
        

        <div className='aboutPageContent'>
        <TopBar
          className={AliasGlobal.menuStatus == true ? " limitScroll" : ""}
        />

            <SubPageTitle subtitle={'ABOUT US.'} title={'Creating Your Vision.'} />

                
            <div>
                <div className="waypoint">
                <img src={blueSquare} alt="" />
                <p>ABOUT US</p>  
                </div>
            </div>
          
            
            <div>
              <GetToKnow />
            </div>
            
        </div>

    </section>
  )
}
