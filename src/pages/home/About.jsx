import React, { useState } from "react";
import "../../assets/styles/home/About.css";
import globe from "../../assets/photos/globe.png";
import blueSquare from "../../assets/photos/blueSquare.png";
import servicesScroll from "../../assets/photos/servicesScroll.png";

export default function About() {
  const [isActive, setActive] = useState(false);
  const [isActiveTwo, setActiveTwo] = useState(false);
  const [isActiveThree, setActiveThree] = useState(false);

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
