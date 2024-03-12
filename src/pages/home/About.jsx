import React, { useState } from "react";
import "../../assets/styles/home/About.css";
import globe from "../../assets/photos/globe.png";
import blueSquare from "../../assets/photos/blueSquare.png";
import servicesScroll from "../../assets/photos/servicesScroll.png";

export default function About() {

  return (
    <div className="aboutFlex">
      <div className="aboutContainer" id="about">
        <div className="titleH1">
          <h1 className="noscrollH1">DEFINE YOU.</h1>
          <img src={globe}></img>
          <a href="" className="discoverHow">
            Discover How
          </a>
        </div>

        <section className="whatWeDo">
          <div className="waypoint">
            <img src={blueSquare} alt="" />
            <p>WHAT WE DO</p>
          </div>
          <div className="mediaDesignStrategy">
            <h1 className="mediaH1">MEDIA.</h1>
            <h1 className="designH1">DESIGN.</h1>
            <h1 className="strategyH1">STRATEGY.</h1>
          </div>

          <div className="servicesScroll">
            <img src={servicesScroll} alt="" />
          </div>


          <div className="wwdHolder">
            <div className="wwdButtons">
              <a href="" className="wwwPast">
                Past Projects?
              </a>
              <a href="" className="wwdFuture">
                Let's Connect!
              </a>
            </div>
          </div>
          
        </section>

       
      </div>
    </div>
  );
}
