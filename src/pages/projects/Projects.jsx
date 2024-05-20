import React, { useContext }  from 'react'
import backgroundImg from "../../assets/photos/webbackground.jpg";
import TopBar from '../../components/TopBar';
import { AliasContext } from '../../App';
import SubPageTitle from '../../components/SubPageTitle';
import '../../assets/styles/projects/Projects.css'
import { Link } from 'react-router-dom';
import GetToKnow from '../home/GetToKnow';


export default function Projects() {

    const AliasGlobal = useContext(AliasContext)

    let items = []

    

  return (
    <section className='projects'>
      
      <div className="backgroundImgProjects">
            <img src={backgroundImg} alt="" />
        </div>
        

        <div className='projectsPageContent'>
        <TopBar
          className={AliasGlobal.menuStatus == true ? " limitScroll" : ""}
        />

            <SubPageTitle subtitle={'WORK INDEX.'} title={'Explore Our Projects.'} />


            <div className='bottomBigLink'>
            <Link to={"/services"} id="bottomBigLink" > SERVICES</Link>
            </div>
            
            <div>
              <GetToKnow />
            </div>
            
        </div>

    </section>
  )
}
