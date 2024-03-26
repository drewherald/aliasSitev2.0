import React, { useContext } from 'react'
import backgroundImg from "../../assets/photos/webbackground.png";
import '../../assets/styles/comingSoon/comingSoon.css'
import TopBar from '../../components/TopBar';
import { AliasContext } from '../../App';
import { Link } from 'react-router-dom';


export default function comingSoon() {

const AliasGlobal = useContext(AliasContext)


  return (
    <section className='comingSoon'>

        <div className="backgroundImgComingSoon">
            <img src={backgroundImg} alt="" />
        </div>
        

        <div className='csContent'>
        <TopBar
          className={AliasGlobal.menuStatus == true ? " limitScroll" : ""}
        />

            <h1>
                Coming Soon ....
            </h1>

            <Link to={"/"} id="a" className='topBarLink'>
              Click here to go back to home
            </Link>
        </div>
        
    </section>
  )
}
