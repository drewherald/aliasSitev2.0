import React, { useState } from "react";
import "../../assets/styles/home/About.css";
import DigitalBranding from "../../assets/photos/brandIdentity.png";
import ContentCreation from "../../assets/photos/ContentCreation.png";
import WebDesign from "../../assets/photos/webDesign.png";
import SocialMedia from "../../assets/photos/socialMedia.png";
import FilmPhotography from "../../assets/photos/filmPhotography.png";
import LabelDesign from "../../assets/photos/labelDesign.png";

export default function About() {
  const [isActive, setActive] = useState(false);
  const [isActiveTwo, setActiveTwo] = useState(false);
  const [isActiveThree, setActiveThree] = useState(false);

  return (
    <div className="aboutFlex">
      <div className="aboutContainer" id="about">
        <div class="scrollContainer">
          <div class="scrollChild">
            <div className="scrollDiv">
              <h1 className="scrollH1">MEDIA.DESIGN.STRATEGY.</h1>
              <h1 className="scrollH1">MEDIA.DESIGN.STRATEGY.</h1>
            </div>
          </div>
        </div>

        <section className="baseServices">
          <div className="aboutTopContainer">
            <div className="aboutItemContainer">
              <div className="aboutBox">
                Digital Branding
                <img src={DigitalBranding} className="aboutIco" alt="" />
              </div>
              <div className="aboutBox">
                Web Design
                <img src={WebDesign} className="aboutIco" alt="" />
              </div>
              <div className="aboutBox">
                Content Creation
                <img src={ContentCreation} className="aboutIco" alt="" />
              </div>
              <div className="aboutBox">
                Social Media Management
                <img src={SocialMedia} className="aboutIco" alt="" />
              </div>
              <div className="aboutBox">
                Film Photography
                <img src={FilmPhotography} className="aboutIco" alt="" />
              </div>
              <div className="aboutBox">
                Label Design
                <img src={LabelDesign} className="aboutIco" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="twoBox">
          <div className="outerBorder">
            <div className="innerBorder">
              <div className="twoBoxComponent" id="abtBoxOne">
                Test
              </div>
            </div>
          </div>

          <div className="outer-Border">
            <div className="inner-Border">
              <div className="twoBoxComponent" id="abtBoxTwo">
                Test
              </div>
            </div>
          </div>
        </section>

        <section className="triStack">
          <button className="triBar tb1" onClick={() => setActive(!isActive)}>
            <p className="triP1">DESIGN</p>
            <section className={`triHidden ${isActive ? "triShow" : " "}`}>
              Step into a realm where pixels dance harmoniously, colors sing in
              perfect symphony, and creativity knows no bounds. Welcome to the
              heart of our digital atelier, where Web, Graphic, and Branding
              design converge to craft experiences that transcend the ordinary.
              <br />
              <br />
              At our digital media & design agency, innovation is our muse, and
              creativity is our currency. In the realm where Web, Graphic, and
              Branding design converge, we transcend boundaries, turning ideas
              into immersive experiences, and brands into legends. Join us on
              this digital odyssey, where every pixel is a brushstroke, and
              every click is a step into a world where design is limitless.
            </section>
          </button>
          <button
            className="triBar tb2"
            onClick={() => setActiveTwo(!isActiveTwo)}
          >
            <p className="triP2">DEVELOPMENT</p>
            <section className={`triHidden ${isActiveTwo ? "triShow" : " "}`}>
              Embark on a digital journey where pixels meet purpose. In the
              realm of web development, we don't just write code; we sculpt
              immersive online experiences. From sleek interfaces to robust
              functionality, we craft digital landscapes that captivate, engage,
              and leave a lasting impression. Elevate your online presence with
              our meticulous craftsmanship – where innovation meets impeccable
              design.
            </section>
          </button>
          <button
            className="triBar tb3"
            onClick={() => setActiveThree(!isActiveThree)}
          >
            <p className="triP3">BRANDING</p>
            <section className={`triHidden ${isActiveThree ? "triShow" : " "}`}>
              Unveil the power of visual alchemy with our Graphic Design and
              Branding expertise. We don't just create designs; we compose
              visual symphonies that resonate with your brand's essence. Every
              color, shape, and line is meticulously curated to tell a
              compelling story. Step into a world where creativity knows no
              bounds, and art is the language that speaks volumes about your
              brand.
            </section>
          </button>
        </section>
      </div>
    </div>
  );
}
