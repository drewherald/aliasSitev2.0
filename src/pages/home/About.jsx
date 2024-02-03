import React from 'react'
import '../../assets/styles/home/About.css'
import DigitalBranding from '../../assets/photos/brandIdentity.png'
import ContentCreation from '../../assets/photos/ContentCreation.png'
import WebDesign from '../../assets/photos/webDesign.png'
import SocialMedia from '../../assets/photos/socialMedia.png'
import FilmPhotography from '../../assets/photos/filmPhotography.png'
import LabelDesign from '../../assets/photos/labelDesign.png'



export default function About() {
  return (
    <div className='aboutFlex'>
      <div className='aboutContainer' id='about'>
      <div class="scrollContainer">
        <div class="scrollChild">
          <div className='scrollDiv'>
            <h1 className='scrollH1'>
              MEDIA.DESIGN.STRATEGY.
            </h1>
            <h1 className='scrollH1'>
             MEDIA.DESIGN.STRATEGY.
            </h1>
          </div>
        </div>
      </div>

      <section className='baseServices'>
        <div className='aboutTopContainer'>
          <div className='aboutItemContainer'>
            <div className='aboutBox'>
                Digital Branding
                <img src={DigitalBranding} className='aboutIco' alt="" />
            </div>
            <div className='aboutBox'>
                Web Design
                <img src={WebDesign} className='aboutIco' alt="" />
            </div>
            <div className='aboutBox'>
                Content Creation
                <img src={ContentCreation} className='aboutIco' alt="" />
            </div>
            <div className='aboutBox'>
                Social Media Management
                <img src={SocialMedia} className='aboutIco' alt="" />
            </div>
            <div className='aboutBox'>
                Film Photography
                <img src={FilmPhotography} className='aboutIco' alt="" />
            </div>
            <div className='aboutBox'>
                Label Design
                <img src={LabelDesign} className='aboutIco' alt="" />
            </div>
          </div>
        </div>
       
      </section>

      <section className='twoBox'>
        <div className='outerBorder'>
          <div className='innerBorder'>
            <div className='twoBoxComponent' id='abtBoxOne'>Test</div>
          </div>
        </div>
         
        <div className='outer-Border'>
          <div className='inner-Border'>
            <div className='twoBoxComponent' id='abtBoxTwo'>Test</div>
          </div>
        </div>      
      </section>


      <section className='triStack'>
            <div className='triBar'>
                <p>DESIGN</p>
            </div>
            <div className='triBar'>
                <p>DEVELOPMENT</p>
            </div>
            <div className='triBar'>
                <p>BRANDING</p>
            </div>
      </section>
        
     </div>
    </div>
  )
}
