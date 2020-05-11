import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Menu.module.css";

const Menu = ({ closeModal }) => {
  const wrapperRef = useRef(null);

  closeModal(wrapperRef);

  return (
    <div className={styles.modalBackdrops}>
      <div ref={wrapperRef} className={styles.modalBoxes}>
        <img
          className={styles.modalLogo}
          src={require(`../../assets/image/logo.svg`)}
          alt="gift-box"
        />
        <ul className={styles.modalList}>
        <li className={styles.modalLi}><NavLink
            to="/34545"
            activeStyle={{
                color: "#2f499e",
            }}
            className={styles.modalItem}
          >
            About me
          </NavLink></li>
          <li className={styles.modalLi}><NavLink
            to="/3435"
            className={styles.modalItem}
            activeStyle={{
              color: "#2f499e",
            }}
          >
            Relation ship
          </NavLink></li>
          

          <li className={styles.modalLi}><NavLink
            to="/345"
            className={styles.modalItem}
            activeStyle={{
              color: "#2f499e",
            }}
          >
            Users
          </NavLink></li>
          <li className={styles.modalLi}><NavLink
            to="/0"
            className={styles.modalItem}
            activeStyle={{
              color: "#2f499e",
            }}
          >
            Sign up
          </NavLink></li>
          <li className={styles.modalLi}><NavLink
            to="/3"
            className={styles.modalItem}
            activeStyle={{
              color: "#2f499e",
            }}
          >
            Terms and conditions
          </NavLink></li>
        </ul>
        <ul className={styles.borderStyle}>
          <li className={styles.modalLi}>
          <NavLink
            to="/3df45"
            className={styles.modalItem}
            activeStyle={{
              color: "#2f499e",
            }}
          >
            How it work
          </NavLink></li>
          <li className={styles.modalLi}> <NavLink
            to="/3df4"
            className={styles.modalItem}
            activeStyle={{
              color: "#2f499e",
            }}
          >
            Partnership
          </NavLink></li>
          <li className={styles.modalLi}><NavLink
            to="/3df"
            className={styles.modalItem}
            activeStyle={{
              color: "#2f499e",
            }}
          >
            Help
          </NavLink></li>
          <li className={styles.modalLi}> <NavLink
            to="/df45"
            className={styles.modalItem}
            activeStyle={{
              color: "#2f499e",
            }}
          >
            Leave testimonial
          </NavLink></li>
          <li className={styles.modalLi}><NavLink
            to="/df4x5"
            className={styles.modalItem}
            activeStyle={{
              color: "#2f499e",
            }}
          >
            Contact us
          </NavLink></li>
        </ul>
        <ul className={styles.borderStyle}>
          <li className={styles.modalLi}><NavLink
            to="/drtyt"
            className={styles.modalItem}
            activeStyle={{
              color: "#2f499e",
            }}
          >
            Articles
          </NavLink></li>
          <li className={styles.modalLi}><NavLink
            to="/dox5"
            className={styles.modalItem}
            activeStyle={{
              color: "#2f499e",
            }}
          >
            Our news
          </NavLink></li>
          <li className={styles.modalLi}> <NavLink
            to="/df4qax5"
            className={styles.modalItem}
            activeStyle={{
              color: "#2f499e",
            }}
          >
            Testimonial
          </NavLink></li>
          <li className={styles.modalLi}> <NavLink
            to="/zdf4x5"
            className={styles.modalItem}
            activeStyle={{
              color: "#2f499e",
            }}
          >
            Licenses
          </NavLink></li>
          <li className={styles.modalLi}> <NavLink
            to="/df4x5u"
            className={styles.modalItem}
            activeStyle={{
              color: "#2f499e",
            }}
          >
            Privacy police
          </NavLink></li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
