import React from 'react'
import '../../assets/styles/home/About.css'
import DigitalBranding from '../../assets/photos/brandIdentity.png'

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
                Digital Branding
                <img src={DigitalBranding} className='aboutIco' alt="" />
            </div>
            <div className='aboutBox'>
                Digital Branding
                <img src={DigitalBranding} className='aboutIco' alt="" />
            </div>
            <div className='aboutBox'>
                Digital Branding
                <img src={DigitalBranding} className='aboutIco' alt="" />
            </div>
            <div className='aboutBox'>
                Digital Branding
                <img src={DigitalBranding} className='aboutIco' alt="" />
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
