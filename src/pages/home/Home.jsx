import React, { useContext, useState } from "react";
import { AliasContext } from "../../App";
import TopBar from "../../components/TopBar";
import "../../assets/styles/home/Home.css";
import About from "./About";
import Partners from "./Partners";
import ScrollSpy from "react-ui-scrollspy";
import GetToKnow from "./GetToKnow";
import Footer from "../../components/Footer";
import backgroundImg from "../../assets/photos/webbackground.png";
import OurProcess from "./OurProcess";
import OurServices from "./OurServices";

export default function Home() {

  const AliasGlobal = useContext(AliasContext)


  return (
    <div className="bodyContainer">
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
