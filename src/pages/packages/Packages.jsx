import React, { useContext }  from 'react'
import backgroundImg from "../../assets/photos/webbackground.jpg";
import TopBar from '../../components/TopBar';
import { AliasContext } from '../../App';
import SubPageTitle from '../../components/SubPageTitle';
import '../../assets/styles/packages/Packages.css'
import PackageItem from '../../components/PackageItem';


export default function Packages() {

    const AliasGlobal = useContext(AliasContext)

    let items = []

    const itemOne = {
      number: '01',
      title: 'Startup',
      header: 'Package',
      body1: 'An affordable choice for launching your online presence.',
      includes: ['Brand Identity Kit', 'Social Media Kit', 'Custom Landing Page', 'Contact Form Integration']
  }

  const itemTwo = {
    number: '02',
    title: 'Startup +',
    header: 'Package',
    body1: 'The perfect option for businesses on a budget or looking to get started quickly.',
    includes: ['Complete Branding Style Guide', 'Complete Social Media Kit', 'Advanced Social Media Strategy', 'Custom Content Creation', 'Enhanced Website Design']
}

  const itemThree = {
    number: '03',
    title: 'Alias +',
    header: 'Subscription',
    body1: "With Alias+ Subscription, you're not just another client on a long list – you're our top priority. Unlike traditional agencies, we focus on one request at a time, ensuring dedicated attention to your project. Plus, our streamlined process guarantees a swift turnaround of about 48 hours, so you can bring your ideas to life without delay.",
    includes: ['Custom Services', 'Flexible Pricing', 'Personalized Proposal', 'Diverse Expertise', 'Responsive Support', 'Continuous Innovation']
  }

  items.push(itemOne)
  items.push(itemTwo)
  items.push(itemThree)


  return (
    <section className='packages'>
      
      <div className="backgroundImgPackages">
            <img src={backgroundImg} alt="" />
        </div>
        

        <div className='packagePageContent'>
        <TopBar
          className={AliasGlobal.menuStatus == true ? " limitScroll" : ""}
        />

            <SubPageTitle subtitle={'OUR PACKAGES.'} title={'Discover Tailored Packages.'} />

           {items.map((item) => <PackageItem contentItem={item} />)}
            
        </div>

    </section>
  )
}
