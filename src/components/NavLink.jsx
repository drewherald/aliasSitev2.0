import React from 'react'
import { motion } from "framer-motion"
import '../assets/styles/componentStyles/NavLink.css'
import { Link } from "react-router-dom";

export default function NavLink({title, href}) {

    const navLinkVars = {
        initial: {
          y: '30vh',
          transition: {
            duration: 0.5,
            ease: [0.37,0,0.63,1]
          }
        },
        open: {
          y: 0,
          transition: {
            duration: 0.7,
            ease: [0,0.55,0.45,1]
          }
        }
      }

  return (
    <motion.div className='navLinkDiv' variants={navLinkVars} >
        <Link to={href} className='navLinkItem' onClick={() => AliasGlobal.toggleMenu()}>
            {title}
        </Link>
    </motion.div>
 
  )
}
