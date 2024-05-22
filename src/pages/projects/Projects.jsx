import React, { useContext }  from 'react'
import backgroundImg from "../../assets/photos/webbackground.jpg";
import TopBar from '../../components/TopBar';
import { AliasContext } from '../../App';
import SubPageTitle from '../../components/SubPageTitle';
import '../../assets/styles/projects/Projects.css'
import { Link } from 'react-router-dom';
import GetToKnow from '../home/GetToKnow';
import ProjectItem from '../../components/ProjectItem';


export default function Projects() {

    const AliasGlobal = useContext(AliasContext)

    let items = []

    const itemOne = {
        name: 'The Burl',
        work: ['A/V Production', 'Web Design', 'UX/UI Design', 'Graphic Design'],
        year: '2024'
    }

    const itemTwo = {
        name: 'Back 2 You',
        work: ['Branding', 'Content Creation', 'Art Direction', 'Brand Guideline'],
        year: '2023'
    }
    
    const itemThree = {
        name: 'Brendan Fouch Realty',
        work: ['Digital Advertising', 'Content Creation', 'Branding'],
        year: '2024'
    }

    const itemFour = {
        name: 'Gator Roofing',
        work: ['Branding', 'Print Media', 'Art Direction'],
        year: '2022'
    }

    const itemFive = {
        name: 'Crescentia Fitness',
        work: ['Print Media', 'Branding', 'Art Direction', 'Graphic Design'],
        year: '2024'
    }

    const itemSix = {
        name: 'Lunchbox',
        work: ['Branding', 'Art Direction', 'Brand Strategy', 'Graphic Design'],
        year: '2021'
    }

    const itemSeven = {
        name: 'Clubhouse',
        work: ['A/V Production', 'Content Creation', 'Graphic Design'],
        year: '2021'
    }

    const itemEight = {
        name: 'Roxy',
        work: ['A/V Production', 'Photography', 'Print Media ', 'Illustration'],
        year: '2021'
    }

    const itemNine = {
        name: 'CDC Bourbon',
        work: ['Marketing Strategy', 'Web Design', 'Print Media', 'Graphic Design'],
        year: '2022'
    }
    
    
    items.push(itemOne)
    items.push(itemTwo)
    items.push(itemThree)
    items.push(itemFour)
    items.push(itemFive)
    items.push(itemSix)
    items.push(itemSeven)
    items.push(itemEight)
    items.push(itemNine)


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

                <div className='projectSubtitles'>
                    <p>{'[CLIENT]'}</p>
                    <p>{'[WORK]'}</p>
                    <p>{'[YEAR]'}</p>
                </div>
                {items.map((item) => <ProjectItem contentItem={item}/>)}
                <hr className='projRunner' />


            <div className='bottomBigLink' style={{paddingTop: '20px'}}>
            <Link to={"/services"} id="bottomBigLink" > SERVICES</Link>
            </div>
            
            <div>
              <GetToKnow />
            </div>
            
        </div>

    </section>
  )
}
