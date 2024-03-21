import React from 'react'
import blueSquare from "../../assets/photos/blueSquare.png"
import '../../assets/styles/home/ourProcess.css'
import ProcessBox from '../../components/ProcessBox'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import one from '../../assets/photos/processes/processOne.png'
import two from '../../assets/photos/processes/processTwo.png'

export default function OurProcess() {

  const processArray = [1,2]

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
    return (
    <>
       <section className="ourProcess">
          <div className="waypoint">
            <img src={blueSquare} alt="" />
            <p>OUR PROCESS</p>  
          </div>
          <div className='processContent'>
            <h3 className='elevateBrand'>
                How we elevate your brand.
            </h3>
            <div className='processAnimation'>
                <p>animation</p>
            </div>
          </div>
          <Carousel
            swipeable={true}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlaySpeed={4000}
            autoPlay={true}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {processArray.map((value) => <div><ProcessBox refKey={value} /></div>) }
          </Carousel>
          
        </section>
    </>
  )
}
