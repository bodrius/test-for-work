import React, { useRef } from "react";
import { NavLink } from "react-router-dom";

const Menu = ({ closeModal }) => {
  const wrapperRef = useRef(null);

  closeModal(wrapperRef);

  return (
    <div className="modalBackdrops">
      <div ref={wrapperRef} className="modalBoxes">
        <img
          className="modalLogo"
          src={require(`../../assets/image/logo.svg`)}
          alt="gift-box"
        />
        <ul className="modalList">
        <li className="modalLi"><NavLink
            to="/about"
            activeStyle={{
                color: "#2f499e",
            }}
            className="modalItem"
          >
            About me
          </NavLink></li>
          <li className="modalLi"><NavLink
            to="/relationship"
            className="modalItem"
            activeStyle={{
              color: "#2f499e",
            }}
          >
            Relation ship
          </NavLink></li>
          

          <li className="modalLi"><NavLink
            to="/users"
            className="modalItem"
            activeStyle={{
              color: "#2f499e",
            }}
          >
            Users
          </NavLink></li>
          <li className="modalLi"><NavLink
            to="/signup"
            className="modalItem"
            activeStyle={{
              color: "#2f499e",
            }}
          >
            Sign up
          </NavLink></li>
          <li className="modalLi"><NavLink
            to="/termsandconditions"
            className="modalItem"
            activeStyle={{
              color: "#2f499e",
            }}
          >
            Terms and conditions
          </NavLink></li>
        </ul>
        <ul className="borderStyle">
          <li className="modalLi">
          <NavLink
            to="/howitwork"
            className="modalItem"
            activeStyle={{
              color: "#2f499e",
            }}
          >
            How it work
          </NavLink></li>
          <li className="modalLi"> <NavLink
            to="/partnership"
            className="modalItem"
            activeStyle={{
              color: "#2f499e",
            }}
          >
            Partnership
          </NavLink></li>
          <li className="modalLi"><NavLink
            to="/help"
            className="modalItem"
            activeStyle={{
              color: "#2f499e",
            }}
          >
            Help
          </NavLink></li>
          <li className="modalLi"> <NavLink
            to="/leavetestimonial"
            className="modalItem"
            activeStyle={{
              color: "#2f499e",
            }}
          >
            Leave testimonial
          </NavLink></li>
          <li className="modalLi"><NavLink
            to="/contact"
            className="modalItem"
            activeStyle={{
              color: "#2f499e",
            }}
          >
            Contact us
          </NavLink></li>
        </ul>
        <ul className="borderStyle">
          <li className="modalLi"><NavLink
            to="/articles"
            className="modalItem"
            activeStyle={{
              color: "#2f499e",
            }}
          >
            Articles
          </NavLink></li>
          <li className="modalLi"><NavLink
            to="/ournews"
            className="modalItem"
            activeStyle={{
              color: "#2f499e",
            }}
          >
            Our news
          </NavLink></li>
          <li className="modalLi"> <NavLink
            to="/testimonial"
            className="modalItem"
            activeStyle={{
              color: "#2f499e",
            }}
          >
            Testimonial
          </NavLink></li>
          <li className="modalLi"> <NavLink
            to="/licenses"
            className="modalItem"
            activeStyle={{
              color: "#2f499e",
            }}
          >
            Licenses
          </NavLink></li>
          <li className="modalLi"> <NavLink
            to="/privacypolice"
            className="modalItem"
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
