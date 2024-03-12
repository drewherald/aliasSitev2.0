import React from "react";
import blueSquare from "../../assets/photos/blueSquare.png";
import "../../assets/styles/home/ourServices.css";
import startup from "../../assets/photos/startup.png";
import startupPlus from "../../assets/photos/startupPlus.png";
import aliasPlus from "../../assets/photos/aliasPlus.png";

export default function OurServices() {
  return (
    <>
      <section className="ourServices">
        <div className="waypoint">
          <img src={blueSquare} alt="" />
          <p>OUR SERVICES</p>
        </div>
        <div className="ourServicesGrid">
          <div className="serviceText">
            <h3 className="whyUs">
              Why Choose Alias? <br /> Discover Your Identity
            </h3>
            <p>
              Alias, derived from the concept of 'identity,' embodies our
              agency's mission: to uncover and amplify the unique essence of
              your brand. Just as the name suggests, we specialize in crafting
              distinctive identities that resonate with authenticity and
              captivate audiences. <br /> <br />At Alias, we believe in the power of identity
              to drive success. Our team of creatives is dedicated to partnering
              with you to unveil the true character of your brand and bring it
              to life in ways that inspire, engage, and leave a lasting
              impression. From strategic branding to innovative design, we're
              here to help you shine in a crowded marketplace and stand out as
              the unmistakable force you were meant to be.
            </p>
          </div>
          <div className="serviceCube">
            <img src={startupPlus} alt="" />
          </div>
          <div className="serviceCube">
            <img src={startup} alt="" />
          </div>
          <div className="serviceCube">
            <img src={aliasPlus} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
