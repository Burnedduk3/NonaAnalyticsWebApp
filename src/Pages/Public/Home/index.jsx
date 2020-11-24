import React from "react";
import "./styles.scss";
import PublicHeader from "../../../Components/Header/PublicHeader";

const Home = () => (
  <>
    <PublicHeader />
    <div className="our-mission">
      <div className="our-mission-content">
        <h3 className="subtitle">Our Mission</h3>
        <p>
          Co-innovate with lifestyle medicine providers, fitness and wellness
          centers, sports performance clubs, and health research institutions.
          Our company utilizes state-of-the-art people analytics and machine
          learning based personalization to offer innovative solutions that are
          designed to double the analytical productivity of our customers, in
          half of the time and with half the cost. Our team is located in Lake
          Nona, the global epicenter for innovation in health, wellness and
          sports technology. We are inspired to positively impact individual’s
          health locally and internationally.
        </p>
      </div>
    </div>
    <div className="what-do-we-do">
      <h3 className="subtitle">What do we do</h3>
    </div>
    <div className="our-team">
      <h3 className="subtitle">Our Team</h3>
    </div>
  </>
);

export default Home;
