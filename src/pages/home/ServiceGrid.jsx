import React from 'react'
import '../../assets/styles/home/ServiceGrid.css'
import advertising from '../../assets/photos/advertising.png'
import webDesign from '../../assets/photos/webDesign.png'
import socialMedia from '../../assets/photos/socialMedia.png'
import brandIdentity from '../../assets/photos/brandIdentity.png'
import filmPhotography from '../../assets/photos/filmPhotography.png'
import labelDesign from '../../assets/photos/labelDesign.png'
import apparelDesign from '../../assets/photos/apparelDesign.png'
import contentCreation from '../../assets/photos/contentCreation.png'


export default function ServiceGrid() {
  return (
    <div className='servFlex'>
        <h2>Our Services</h2>
        <div className='serviceGridContainer'>
            <div className='serviceGridItem'>
                    <h5>Advertising</h5>
                    <img src={advertising} alt="" />
            </div>
            <div className='serviceGridItem'>
                <h5>Web Design</h5>
                <img src={webDesign} alt="" />
            </div>
            <div className='serviceGridItem'>
                <h5>Social Media</h5>
                <img src={socialMedia} alt="" />
            </div>
            <div className='serviceGridItem'>
                <h5>Brand Identity</h5>
                <img src={brandIdentity} alt="" />
            </div>
            <div className='serviceGridItem'>
                <h5>Film Photography</h5>
                <img src={filmPhotography} alt="" />
            </div>
            <div className='serviceGridItem'>
                <h5>Label Design</h5>
                <img src={labelDesign} alt="" />
            </div>
            <div className='serviceGridItem'>
                <h5>Apparel Design</h5>
                <img src={apparelDesign} alt="" />
            </div>
            <div className='serviceGridItem'>
                <h5>Content Creation</h5>
                <img src={contentCreation} alt="" />
            </div>
        </div>
    </div>
  )
}
