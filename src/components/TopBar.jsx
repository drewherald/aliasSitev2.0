import React from "react";
import "../assets/styles/componentStyles/TopBar.css";
import aliasStudios from "../assets/photos/aliasStudios.png";
import { Link } from "react-router-dom";

export default function TopBar() {
  return (
    <>
      <div className="topBarFlex">
        <ul>
          <Link to={"/comingSoon"} id="a">
            <li className="topBarLink">ABOUT</li>
          </Link>
          <Link to={"/services"} id="a">
            <li className="topBarLink">SERVICES</li>
          </Link>
          <Link to={"/projects"} id="a">
            <li className="topBarLink">PROJECTS</li>
          </Link>
          <li>
         
          <Link to={"/"} id="a">
           
              <img src={aliasStudios} alt="" className="aliasStudios" />
              </Link>
          </li>
          <Link to={"/packages"} id="a">
            <li className="topBarLink">PACKAGES</li>
          </Link>
          <Link to={"/comingSoon"} id="a">
            <li className="topBarLink">ALIAS +</li>
          </Link>
          <Link to={"/contact"} id="a">
            <li className="topBarLink">
              <div className="tbConnectButton">Connect</div>
            </li>
          </Link>
        </ul>
      </div>
      
      
        
       

    </>
  );
}
