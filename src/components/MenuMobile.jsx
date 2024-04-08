import React, { useContext } from "react";
import { AliasContext } from "../App";
import aliasStudios from "../assets/photos/aliasStudios.png";
import NavLink from "./NavLink";
import NavLinkClose from "../assets/photos/NavLinkClose.png";
import { AnimatePresence, motion } from "framer-motion";
import '../assets/styles/componentStyles/MenuMobile.css'
import mobileMenu from "../assets/photos/ellipse.png";

export default function MenuMobile() {

    const navLinks = [
      { title: "HOME", href: "/" },
        { title: "SERVICES", href: "/comingSoon" },
        { title: "ABOUT", href: "/comingSoon" },
        { title: "PROJECTS", href: "/comingSoon" },
        { title: "PACKAGES", href: "/comingSoon" },
        { title: "ALIAS +", href: "/comingSoon" },
        { title: "CONNECT", href: "/contact" },
      ];

      const AliasGlobal = useContext(AliasContext);

      const menuVars = {
        initial: {
          scaleY: 0,
          transition: {
            duration: 0.5,
            ease: [0.12, 0, 0.39, 0],
          },
        },
        animate: {
          scaleY: 1,
        },
        exit: {
          scaleY: 0,
          transition: {
            duration: 0.5,
            delay: 0.7,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      };
    
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
    <>
     <div
        className={
          "mobileMenu" +
          (AliasGlobal.menuStatus == true ? " stopMenu" : " startMenu")
        }
      >
        <img src={mobileMenu} alt="" onClick={() => AliasGlobal.toggleMenu()} />
      </div>
     <AnimatePresence>
          {AliasGlobal.menuStatus && (
            <motion.div
              className="mobileMenuLinks"
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <div>
                {" "}
                <img src={aliasStudios} alt="" className="aliasStudiosMenu" />
              </div>
              <motion.div
                className="navLinkContainer"
                variants={staggerVars}
                initial="initial"
                animate="open"
                exit="initial"
              >
                {navLinks.map((link, index) => {
                  return (
                    <div className="navOverflow">
                      <NavLink
                        title={link.title}
                        href={link.href}
                        key={index}
                      />
                    </div>
                  );
                })}
              </motion.div>
              <div>
                <img
                  src={NavLinkClose}
                  alt=""
                  className="navLinkClose"
                  onClick={() => AliasGlobal.toggleMenu()}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      
    </>
  )
}
