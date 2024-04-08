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
          <p>OUR PACKAGES</p>
        </div>
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
