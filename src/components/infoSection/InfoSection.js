import React from "react";
import { Link } from "react-scroll";

const InfoSection = () => {
  return (
    <div className="wrap">
      <h3 className="wrap__caption">Lets's get acquainted</h3>
      <div className="section__boxTablet">
        <div className="section__boxImage">
          <img
            className="section__img"
            src={require(`../../assets/image/man-laptop-v1.svg`)}
            alt="img"
          />
        </div>
        <div className="info-section">
          <h4 className="info-section__title">
            I am cool frontend developer
          </h4>
          <p className="info-section__description">
            We will evaluate how clean your approach to wtiting CSS and
            Javascript code is. You can use any CSS and Javascript 3rd party
            libraries without any restriction.
          </p>
          <p className="info-section__description">
            If 3rd party css/javascript libraries are added to the project via
            bower/npm/yarn you will get bonus points. If you use any task runner
            (gulp/webpack) you will get bonus points as well. Slise service
            directory page PSD mockup into HTML/CSS3.
          </p>
          <Link
            className="info-section__btn"
            activeClass="active"
            to="form"
            spy={true}
            smooth={true}
            offset={10}
            duration={500}
          >
            Sing up now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
