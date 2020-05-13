import React, { useRef } from "react";
import { NavLink } from "react-router-dom";

const Menu = ({ closeModal }) => {
  const wrapperRef = useRef(null);

  closeModal(wrapperRef);

  return (
    <div className="menu-backdrops">
      <div ref={wrapperRef} className="menu-box">
        <img
          className="menu-box__logo"
          src={require(`../../assets/image/logo.svg`)}
          alt="gift-box"
        />
        <ul className="menu-box__list">
        <li className="menu-box__item"><NavLink
            to="/about"
            activeStyle={{
                color: "#2f499e",
            }}
            className="menu-box__link"
          >
            About me
          </NavLink></li>
          <li className="menu-box__item"><NavLink
            to="/relationship"
            className="menu-box__link"
            activeStyle={{
              color: "#2f499e",
            }}
          >
            Relation ship
          </NavLink></li>
          

          <li className="menu-box__item"><NavLink
            to="/users"
            className="menu-box__link"
            activeStyle={{
              color: "#2f499e",
            }}
          >
            Users
          </NavLink></li>
          <li className="menu-box__item"><NavLink
            to="/signup"
            className="menu-box__link"
            activeStyle={{
              color: "#2f499e",
            }}
          >
            Sign up
          </NavLink></li>
          <li className="menu-box__item"><NavLink
            to="/termsandconditions"
            className="menu-box__link"
            activeStyle={{
              color: "#2f499e",
            }}
          >
            Terms and conditions
          </NavLink></li>
        </ul>
        <ul className="second-section">
          <li className="menu-box__item">
          <NavLink
            to="/howitwork"
            className="menu-box__link"
            activeStyle={{
              color: "#2f499e",
            }}
          >
            How it work
          </NavLink></li>
          <li className="menu-box__item"> <NavLink
            to="/partnership"
            className="menu-box__link"
            activeStyle={{
              color: "#2f499e",
            }}
          >
            Partnership
          </NavLink></li>
          <li className="menu-box__item"><NavLink
            to="/help"
            className="menu-box__link"
            activeStyle={{
              color: "#2f499e",
            }}
          >
            Help
          </NavLink></li>
          <li className="menu-box__item"> <NavLink
            to="/leavetestimonial"
            className="menu-box__link"
            activeStyle={{
              color: "#2f499e",
            }}
          >
            Leave testimonial
          </NavLink></li>
          <li className="menu-box__item"><NavLink
            to="/contact"
            className="menu-box__link"
            activeStyle={{
              color: "#2f499e",
            }}
          >
            Contact us
          </NavLink></li>
        </ul>
        <ul className="second-section">
          <li className="menu-box__item"><NavLink
            to="/articles"
            className="menu-box__link"
            activeStyle={{
              color: "#2f499e",
            }}
          >
            Articles
          </NavLink></li>
          <li className="menu-box__item"><NavLink
            to="/ournews"
            className="menu-box__link"
            activeStyle={{
              color: "#2f499e",
            }}
          >
            Our news
          </NavLink></li>
          <li className="menu-box__item"> <NavLink
            to="/testimonial"
            className="menu-box__link"
            activeStyle={{
              color: "#2f499e",
            }}
          >
            Testimonial
          </NavLink></li>
          <li className="menu-box__item"> <NavLink
            to="/licenses"
            className="menu-box__link"
            activeStyle={{
              color: "#2f499e",
            }}
          >
            Licenses
          </NavLink></li>
          <li className="menu-box__item"> <NavLink
            to="/privacypolice"
            className="menu-box__link"
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
