import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { NavLink, Link } from "react-router-dom";
import Menu from "../menu/Menu";
import animation from "../../ui/AnimationMenu.module.css";

const Header = () => {
  const [flag, setFlag] = useState(false);

  // function close modal window to click outside modal window
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setFlag(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  return (
    <div className="container">
      <div className="container__box">
        <Link to="/">
          <img
            className="container__logo"
            src={require(`../../assets/image/logo.svg`)}
            alt="gift-box"
          />
        </Link>
        {window.innerWidth < 1170 ? (
          <>
          <button
            onClick={() => setFlag(true)}
            className="container__button"
          ></button>
        <div className="backdropDive">
          <CSSTransition
            in={flag}
            classNames={animation}
            timeout={900}
            unmountOnExit
          >
            <Menu closeModal={useOutsideAlerter} />
          </CSSTransition>
        </div>
        </>) : null}
        {window.innerWidth >= 1170 ? (
          <div className="container__menu">
            <ul className="container__list">
              <li className="container__item">
                <NavLink
                  to="/about"
                  activeStyle={{
                    color: "#2f499e",
                  }}
                  className="modalItem"
                >
                  About me
                </NavLink>
              </li>
              <li className="container__item">
                <NavLink
                  to="/relationship"
                  className="modalItem"
                  activeStyle={{
                    color: "#2f499e",
                  }}
                >
                  Relationship
                </NavLink>
              </li>
              <li className="container__item">
                <NavLink
                  to="/requirements"
                  className="modalItem"
                  activeStyle={{
                    color: "#2f499e",
                  }}
                >
                  Requirements
                </NavLink>
              </li>
              <li className="container__item">
                <NavLink
                  to="/users"
                  className="modalItem"
                  activeStyle={{
                    color: "#2f499e",
                  }}
                >
                  Users
                </NavLink>
              </li>
              <li className="container__item">
                <NavLink
                  to="/signup"
                  className="modalItem"
                  activeStyle={{
                    color: "#2f499e",
                  }}
                >
                  Sign up
                </NavLink>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
