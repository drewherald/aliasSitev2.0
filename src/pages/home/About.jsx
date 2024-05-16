import React, { useContext } from "react";
import { AliasContext } from "../../App";
import "../../assets/styles/home/About.css";
import globe from "../../assets/photos/globe.png";
import blueSquare from "../../assets/photos/blueSquare.png";
import globeSmall from "../../assets/photos/globeSmall.png";
import aliasStudios from "../../assets/photos/aliasStudios.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import TopBar from "../../components/TopBar";
import deskMenu from '../../assets/photos/deskMenu.png'

export default function About() {


  const AliasGlobal = useContext(AliasContext);

  const staggerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.09,
        delayChildren: 0.3,
        staggerDirection: 1,
      },
    },
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

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
          <img src={globeSmall} alt="" className="globeSmallMobile" />
          <img src={globe} className="bigGlobe"></img>
          <Link to={'/comingSoon'} className="discoverHow">
            Discover How
          </Link>
        </div>


          


        <section
          className={
            "whatWeDo" + (AliasGlobal.menuStatus == true ? " limitScroll" : "")
          }
        >
          <div className="deskMenuContainer">
            <div className="waypoint">
              <img src={blueSquare} alt="" />
              <p>WHAT WE DO</p>
            </div>
            <img src={deskMenu} className="deskMenu" alt="" onClick={() => AliasGlobal.toggleMenu()}/>
          </div>
          
          <div className="mediaDesignStrategy">
            <h1 className="mediaH1">MEDIA.</h1>
            <h1 className="designH1">DESIGN.</h1>
            <h1 className="strategyH1">STRATEGY.</h1>
          </div>

          <Carousel
            swipeable={true}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlaySpeed={3000}
            autoPlay={false}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            dotListClass="custom-dot-list-style-about"
            itemClass="carousel-item-about"
          >
            <div className="aboutCarouselFlex">
              <h5>Brand Identity</h5>
              <p>
                We bring your brand vision to life.
              </p>
            </div>
            <div className="aboutCarouselFlex">
              <h5>Web Design</h5>
              <p>
                We design intutive websites that engage and convert.
              </p>
            </div>
            <div className="aboutCarouselFlex">
              <h5>Social Media</h5>
              <p>
                Our social media strategies drive engagement and brand advocacy.
              </p>
            </div>
            <div className="aboutCarouselFlex">
              <h5>Strategy</h5>
              <p>
                Our strategic insights power your business for sustainable growth.
              </p>
            </div>
            <div className="aboutCarouselFlex">
              <h5>Advertising</h5>
              <p>
                Our advertising campaigns deliver results and return on investment.
              </p>
            </div>
          </Carousel>

          <div className="wwdHolder">
            <div className="wwdButtons">
              <Link to={'/comingSoon'} className="wwdPast">
                <div className="wwdPastdiv">
                OUR SERVICES
                </div>
              </Link>
              <Link to={'/contact'} className="wwdFuture">
                <div>
                LET'S TALK
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
