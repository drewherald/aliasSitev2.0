import React, { useContext } from "react";
import { AliasContext } from "../../App";
import TopBar from "../../components/TopBar";
import "../../assets/styles/home/Home.css";
import About from "./About";
import Partners from "./Partners";
import GetToKnow from "./GetToKnow";
import backgroundImg from "../../assets/photos/webbackground.png";
import OurProcess from "./OurProcess";
import OurServices from "./OurServices";
import mobileMenu from '../../assets/photos/ellipse.png'


export default function Home() {

  const AliasGlobal = useContext(AliasContext)


  return (
    <div className="bodyContainer">
          <div className={"mobileMenu" + (AliasGlobal.menuStatus == true ? " stopMenu" : " startMenu")}>
            <img src={mobileMenu}  alt="" onClick={() => AliasGlobal.toggleMenu()}/>
        </div>

      <div className="backgroundImg">
        <img src={backgroundImg} alt="" />
      </div>
      <div className="homeFlex">
        <section id="home">
          <TopBar className={(AliasGlobal.menuStatus == true ? " limitScroll" : "")}/>
          <About />
        </section>
        <section id="ourProcess" className={(AliasGlobal.menuStatus == true ? " limitScroll" : "")}>
          <OurProcess />
        </section>
        <section id="ourService" className={(AliasGlobal.menuStatus == true ? " limitScroll" : "")}>
          <OurServices />
        </section>
        <section id="partners" className={(AliasGlobal.menuStatus == true ? " limitScroll" : "")}>
        <Partners />
        </section>
        
      </div>
      <section id="contact" className={(AliasGlobal.menuStatus == true ? " limitScroll" : "")}>
        <GetToKnow />
      </section>
    </div>
  );
}
