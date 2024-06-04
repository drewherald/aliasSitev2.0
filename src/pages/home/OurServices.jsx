import React from "react";
import "../../assets/styles/home/ourServices.css";
import HomePagePackageItem from "../../components/HomePagePackageItem";


export default function OurServices() {

    let items = []

    const itemOne = {
        title: 'Startup',
        header: 'Package',
        body1: 'An affordable choice for launching your online presence.',
        includes: ['Brand Identity Kit', 'Social Media Kit', 'Custom Landing Page', 'Contact Form Integration']
    }

    const itemTwo = {
      title: 'Startup +',
      header: 'Package',
      body1: 'The perfect option for businesses on a budget or looking to get started quickly.',
      includes: ['Complete Branding Style Guide', 'Complete Social Media Kit', 'Advanced Social Media Strategy', 'Custom Content Creation', 'Enhanced Website Design']
  }

    const itemThree = {
      title: 'Alias +',
      header: 'Subscription',
      body1: "With Alias+ Subscription, you're not just another client on a long list – you're our top priority. Unlike traditional agencies, we focus on one request at a time, ensuring dedicated attention to your project. Plus, our streamlined process guarantees a swift turnaround of about 48 hours, so you can bring your ideas to life without delay.",
      includes: ['Custom Services', 'Flexible Pricing', 'Personalized Proposal', 'Diverse Expertise', 'Responsive Support', 'Continuous Innovation']
    }

    
    items.push(itemTwo)
    items.push(itemOne)
    items.push(itemThree)


  return (
    <>
      <section className="ourServices">
      <hr className='hRunner' />

        <div className="ourServicesGrid">
          <div className="serviceText">
            <h3 className="whyUs">
              Why Choose Alias? <br /> Discover Your Identity
            </h3>
            <p className="whyUsP">
              Alias is committed to revealing and enhancing the individuality of
              your brand. Our focus is on creating unique identities that
              connect authentically and captivate audiences. Our team
              collaborates with you to showcase your brand's true essence,
              ensuring it inspires, engages, and leaves a memorable impact.
              Whether through strategic branding or innovative design, we're
              dedicated to helping you shine in a competitive market and
              establish yourself as a distinctive presence.
            </p>
          </div>
          <hr className='mobRunner' />
          {items.map((item) => <HomePagePackageItem contentItem={item} />)}

          
        </div>
      </section>
    </>
  );
}
