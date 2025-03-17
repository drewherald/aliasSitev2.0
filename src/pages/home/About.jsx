import React, { useContext } from "react";
import { AliasContext } from "../../App";
import "../../assets/styles/home/About.css";
import globeSmall from "../../assets/photos/globeSmall.png";
import aliasStudios from "../../assets/photos/aliasStudios.png";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import TopBar from "../../components/TopBar";
import deskMenu from '../../assets/photos/deskMenu.png'
import ServiceButton from "../../components/ServiceButton";


export default function About() {


  const AliasGlobal = useContext(AliasContext);


  const selectedServices = ['Branding', 'Website', 'Social Media', 'Advertising', 'Not Sure' ]

  return (
    <div
      className={
        "aboutFlex" + (AliasGlobal.menuStatus == true ? " limitScroll" : "")
      }
    >
      <div className="aboutContainer" id="about">
        <TopBar
          className={AliasGlobal.menuStatus == true ? " limitScroll" : ""}
        />
        <div className="titleH1">
          <Link to={"/"} id="a">
          <img src={aliasStudios} alt="" className="aliasStudiosMobile" />
          </Link>
          <h1 className="noscrollH1">DEFINE YOU.</h1>
          <img src={globeSmall} className="globeSmallMobile" alt="" />
          <h5 className="titleSubtext">
          We are a multi-skilled agency. Design, Media, and Strategy is what we know best.
          </h5>
          <Link to={'/about'} className="discoverHow" onClick={AliasGlobal.scrollToTop}>
            Discover How
          </Link>
        </div>


          


        <section
          className={
            "whatWeDo" + (AliasGlobal.menuStatus == true ? " limitScroll" : "")
          }
        >
          <div className="deskMenuContainer">
            <img src={deskMenu} className="deskMenu" alt="" onClick={() => AliasGlobal.toggleMenu()}/>
          </div>
          
          
           <div className="formContainer">
            <h1>Creative Services</h1>
            <p>Don’t know where to start? Just pick what sounds right, and we’ll take care of the rest.</p>
            <form action="" className="serviceForm">
                <section className="fiveButtons">
                  {selectedServices.map((service => <ServiceButton text={service} id={service}/>))}
                </section>
                
                  <p style={{fontWeight: 700}}>Tell us a little about your vision:</p>
                  <textarea className="visionText" rows={5} placeholder="I want to reach more people... I need a website...I need a fresh brand" />
                  <p style={{fontWeight: 700}}>Your Contact Details:</p>
                  <input type="text" placeholder="Name" className="serviceContactInfo"/>
                  <input type="email" placeholder="Email" className="serviceContactInfo"/>
                  <button type="submit" className="submitServiceForm">Get Your Custom Plan</button>
             
            </form>
           </div>

         

         
        </section>
      </div>
    </div>
  );
}
