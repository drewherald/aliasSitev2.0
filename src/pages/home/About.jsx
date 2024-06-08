import React, { useContext } from "react";
import { AliasContext } from "../../App";
import "../../assets/styles/home/About.css";
import globeSmall from "../../assets/photos/globeSmall.png";
import aliasStudios from "../../assets/photos/aliasStudios.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import TopBar from "../../components/TopBar";
import deskMenu from '../../assets/photos/deskMenu.png'
import Marquee from "react-fast-marquee";


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
          
          
            <Marquee>
              <h1 className="mediaDesignStrategy">MEDIA / DESIGN / STRATEGY</h1>
            </Marquee>
            <Marquee direction="right">
              <h1 className="mediaDesignStrategyTwo">MEDIA / DESIGN / STRATEGY</h1>
            </Marquee>
            

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
              <Link to={'/services'} className="wwdPast" onClick={AliasGlobal.scrollToTop}>
                <div className="wwdPastdiv">
                OUR SERVICES
                </div>
              </Link>
              <Link to={'/contact'} className="wwdFuture" onClick={AliasGlobal.scrollToTop}>
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
