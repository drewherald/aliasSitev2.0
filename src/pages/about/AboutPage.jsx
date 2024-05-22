import React, { useContext }  from 'react'
import backgroundImg from "../../assets/photos/webbackground.jpg";
import TopBar from '../../components/TopBar';
import { AliasContext } from '../../App';
import SubPageTitle from '../../components/SubPageTitle';
import '../../assets/styles/projects/Projects.css'
import { Link } from 'react-router-dom';
import GetToKnow from '../home/GetToKnow';


export default function AboutPage() {

    const AliasGlobal = useContext(AliasContext)


  return (
    <section className='projects'>
      
      <div className="backgroundImgProjects">
            <img src={backgroundImg} alt="" />
        </div>
        

        <div className='projectsPageContent'>
        <TopBar
          className={AliasGlobal.menuStatus == true ? " limitScroll" : ""}
        />

            <SubPageTitle subtitle={'ABOUT US.'} title={'Creating Your Vision.'} />

                

          
            
            <div>
              <GetToKnow />
            </div>
            
        </div>

    </section>
  )
}
