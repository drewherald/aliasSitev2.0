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
          <Link to={"/comingSoon"} id="a">
            <li className="topBarLink">SERVICES</li>
          </Link>
          <Link to={"/comingSoon"} id="a">
            <li className="topBarLink">PARTNERS</li>
          </Link>
          <li>
         
          <Link to={"/"} id="a">
           
              <img src={aliasStudios} alt="" className="aliasStudios" />
              </Link>
          </li>
          <Link to={"/comingSoon"} id="a">
            <li className="topBarLink">PACKAGES</li>
          </Link>
          <Link to={"/comingSoon"} id="a">
            <li className="topBarLink">ALIAS +</li>
          </Link>
          <Link to={"/comingSoon"} id="a">
            <li className="topBarLink">CONNECT</li>
          </Link>
        </ul>
      </div>
      
      
        
        <Link to={"/"} id="a">
        <img src={aliasStudios} alt="" className="aliasStudiosMobile" />
        </Link>

    </>
  );
}
