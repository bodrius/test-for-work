import React from "react";
import { Link } from "react-scroll";
import styles from "./InfoSection.module.css";

const InfoSection = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.section__caption}>Lets's get acquainted</h3>
      <div className={styles.section__boxTablet}>
      <div className={styles.section__boxImage}>
      <img
        className={styles.section__img}
        src={require(`../../assets/image/man-laptop-v1.svg`)}
        alt="img"
      />
      </div>
      <div>
      <h4 className={styles.section__title}>I am cool frontend developer</h4>
      <p className={styles.section__description}>
        We will evaluate how clean your approach to wtiting CSS and Javascript
        code is. You can use any CSS and Javascript 3rd party libraries without
        any restriction.
      </p>
      <p className={styles.section__description}>
        If 3rd party css/javascript libraries are added to the project via
        bower/npm/yarn you will get bonus points. If you use any task runner
        (gulp/webpack) you will get bonus points as well. Slise service
        directory page PSD mockup into HTML/CSS3.
      </p>

      <Link
        className={styles.section__btn}
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
