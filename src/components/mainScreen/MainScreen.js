import React from "react";
import { Link } from "react-scroll";

const MainScreen = () => {
  return (
    <div className="wrapper">
      <div className="main-screen">
        <h2 className="main-screen__caption">
          Test assignment for frontend developer position
        </h2>
        <span className="main-screen__description">
          We kindly remind you that your test assignment should be submitted as
          a link to github/bitbucket repository.
        </span>
        <span className="main-screen__descriptionTablet">
          We kindly remind you that your test assignment should be submitted as
          a link to github/bitbucket repository. Please be patient, we consider
          and respond to every aplication that meets minimum requirements. We
          look forward to your submissions. Good luck! The photo has to scale in
          the banner area on the different screens
        </span>
        <Link
          className="main-screen__button"
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
  );
};

export default MainScreen;
