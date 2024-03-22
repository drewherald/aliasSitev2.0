import React, { useContext } from "react";
import { AliasContext } from "../../App";
import "../../assets/styles/home/About.css";
import globe from "../../assets/photos/globe.png";
import blueSquare from "../../assets/photos/blueSquare.png";
import globeSmall from '../../assets/photos/globeSmall.png'
import mobileMenu from '../../assets/photos/ellipse.png'
import aliasStudios from '../../assets/photos/aliasStudios.png'
import NavLink from "../../components/NavLink";
import NavLinkClose from '../../assets/photos/NavLinkClose.png'
import { AnimatePresence, motion } from "framer-motion"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export default function About() {

  const navLinks = [

    {title: 'SERVICES', href: '/'},
    {title: 'ABOUT', href: '/'},
    {title: 'PROJECTS', href: '/'},
    {title: 'PACKAGES', href: '/'},
    {title: 'ALIAS +', href: '/'},
    {title: 'CONNECT', href: '/'}
  
  ]

  const AliasGlobal = useContext(AliasContext)

  const menuVars = {
    initial: {
      scaleY: 0,
      transition: {
        duration: 0.5,
        ease: [0.12,0,0.39,0]
      }
    },
    animate: {
      scaleY: 1
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.5,
        delay:0.7,
        ease: [0.22,1,0.36,1]
      }
    }
  }

  const staggerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1
      }
    },
    open: {
      transition: {
        staggerChildren: 0.09,
        delayChildren: 0.3,
        staggerDirection: 1
      }
    }
  }

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <div className={"aboutFlex" + (AliasGlobal.menuStatus == true ? " limitScroll" : "")}>
      <div className="aboutContainer" id="about">
        <div className="titleH1">
          <h1 className="noscrollH1">DEFINE YOU.</h1>
          <img src={globeSmall} alt="" className='globeSmallMobile' />
          <img src={globe} className="bigGlobe"></img>
          <a href="" className="discoverHow">
            Discover How
          </a>
         
        </div>

    

    <AnimatePresence>
    { AliasGlobal.menuStatus && (

      <motion.div className="mobileMenuLinks" variants={menuVars} initial='initial' animate='animate' exit='exit'>
        <div> <img src={aliasStudios} alt="" className='aliasStudiosMenu'/></div> 
        <motion.div className="navLinkContainer" variants={staggerVars} initial='initial' animate='open' exit='initial'>
          {
            navLinks.map((link, index)=>{
              return(
                <div className="navOverflow">
                    <NavLink title={link.title} href={link.href} key={index} />
                </div>
                
              ) 
            })
          }
        </motion.div>
        <div>
          <img src={NavLinkClose} alt="" className="navLinkClose" onClick={() => AliasGlobal.toggleMenu()}/>
        </div>
      </motion.div>
      )

      }
    </AnimatePresence>
       
        

        <section className={"whatWeDo" + (AliasGlobal.menuStatus == true ? " limitScroll" : "")}>
          <div className="waypoint">
            <img src={blueSquare} alt="" />
            <p>WHAT WE DO</p>
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
              <h5>Branding</h5>
              <p>Elevating your brand with unmatched identity - capturing attention <br className="desktopBr" /> with every impression</p>
            </div>
            <div className="aboutCarouselFlex">
              <h5>Web Design</h5>
              <p>Crafting experiences that captivate - setting your digital <br className="desktopBr"/> presence apart with every scroll</p>
            </div>
            <div className="aboutCarouselFlex">
              <h5>Branding</h5>
              <p>Elevating your brand with unmatched identity - capturing attention <br className="desktopBr"/> with every impression</p>
            </div>
            <div className="aboutCarouselFlex">
              <h5>Branding</h5>
              <p>Elevating your brand with unmatched identity - capturing attention <br className="desktopBr"/> with every impression</p>
            </div>
            <div className="aboutCarouselFlex">
              <h5>Branding</h5>
              <p>Elevating your brand with unmatched identity - capturing attention <br className="desktopBr"/> with every impression</p>
            </div>

          </Carousel>

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
