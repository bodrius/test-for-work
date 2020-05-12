import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { NavLink, Link } from "react-router-dom";
import styles from "./Header.module.css";
import Menu from "../menu/Menu";
import animation from "../../ui/AnimationMenu.module.css";

const Header = () => {
  const [flag, setFlag] = useState(false);

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
    <div className={styles.container}>
      <div className={styles.container__box}>
        <Link to="/">
          <img
            className={styles.container__logo}
            src={require(`../../assets/image/logo.svg`)}
            alt="gift-box"
          />
        </Link>
        {window.innerWidth < 1170 ? (
          <button
            onClick={() => setFlag(true)}
            className={styles.container__button}
          ></button>
        ) : null}
        <div className={styles.backdropDive}>
          <CSSTransition
            in={flag}
            classNames={animation}
            timeout={900}
            unmountOnExit
          >
            <Menu closeModal={useOutsideAlerter} />
          </CSSTransition>
        </div>
        {window.innerWidth >= 1170 ? (
          <div className={styles.container__menu}>
            <ul className={styles.container__list}>
              <li className={styles.container__item}>
                <NavLink
                  to="/about"
                  activeStyle={{
                    color: "#2f499e",
                  }}
                  className={styles.modalItem}
                >
                  About me
                </NavLink>
              </li>
              <li className={styles.container__item}>
                <NavLink
                  to="/relationship"
                  className={styles.modalItem}
                  activeStyle={{
                    color: "#2f499e",
                  }}
                >
                  Relationship
                </NavLink>
              </li>

              <li className={styles.container__item}>
                <NavLink
                  to="/requirements"
                  className={styles.modalItem}
                  activeStyle={{
                    color: "#2f499e",
                  }}
                >
                  Requirements
                </NavLink>
              </li>
              <li className={styles.container__item}>
                <NavLink
                  to="/users"
                  className={styles.modalItem}
                  activeStyle={{
                    color: "#2f499e",
                  }}
                >
                  Users
                </NavLink>
              </li>
              <li className={styles.container__item}>
                <NavLink
                  to="/signup"
                  className={styles.modalItem}
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
