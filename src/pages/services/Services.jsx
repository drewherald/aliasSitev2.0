import React, { useContext } from 'react'
import backgroundImg from "../../assets/photos/webbackground.jpg";
import '../../assets/styles/services/services.css'
import TopBar from '../../components/TopBar';
import { AliasContext } from '../../App';
import ServiceItem from '../../components/ServiceItem';
import { Link } from 'react-router-dom';
import SubPageTitle from '../../components/SubPageTitle';

export default function comingSoon() {

const AliasGlobal = useContext(AliasContext)

let items = []

const itemOne = {
    number: '01',
    title: 'DESIGN',
    header: '(Vision + Insight + Innovation) x Marketing = Design',
    body1: 'For each project, we combine technical and methodological skills with creative insight and a profound sensitivity toward content. In our office and in our studio we are able to develop both the executive and the artistic aspects of every project.',
    body2: 'We design one-of-a-kind experiences that attract customers and connect them to the brands, increasing loyalty throughout the whole journey.',
    buzzwords: ['Branding', 'Graphic Design', 'Motion Design', 'Web Design', 'UX/UI Design', 'Art Direction']

}

const itemTwo = {
    number: '02',
    title: 'MEDIA',
    header: '(Vision + Insight + Innovation) x Marketing = Design',
    body1: 'For each project, we combine technical and methodological skills with creative insight and a profound sensitivity toward content. In our office and in our studio we are able to develop both the executive and the artistic aspects of every project.',
    body2: 'We design one-of-a-kind experiences that attract customers and connect them to the brands, increasing loyalty throughout the whole journey.',
    buzzwords: ['Digital Advertising', 'Print Media', 'Audiovisual Design', 'Content Creation', 'Brand Strategy', 'Web Development']
}

const itemThree = {
    number: '03',
    title: 'STRATEGY',
    header: '(Vision + Insight + Innovation) x Marketing = Design',
    body1: 'For each project, we combine technical and methodological skills with creative insight and a profound sensitivity toward content. In our office and in our studio we are able to develop both the executive and the artistic aspects of every project.',
    body2: 'We design one-of-a-kind experiences that attract customers and connect them to the brands, increasing loyalty throughout the whole journey.',
    buzzwords: ['Marketing Strategy', 'Brand Guideline Creation', 'System Architecture', 'User Interface', 'Experience Design', 'E-mail Marketing']
}

items.push(itemOne)
items.push(itemTwo)
items.push(itemThree)


console.log(items.length)

  return (
    <section className='services'>

        <div className="backgroundImgServices">
            <img src={backgroundImg} alt="" />
        </div>
        

        <div className='servicePageContent'>
        <TopBar
          className={AliasGlobal.menuStatus == true ? " limitScroll" : ""}
        />

            <SubPageTitle subtitle={'WHAT WE DO.'} title={'Elevating Standards of Creativity.'} />

            {items.map((item) => <ServiceItem contentItem={item}/>)}
            <div className='workIndex'>
            <Link to={"/comingSoon"} id="WorkIndex" > WORK INDEX</Link>
            </div>
            
        </div>

      


        
    </section>
  )
}
