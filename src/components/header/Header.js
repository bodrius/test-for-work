import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
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
        <img src={require(`../../assets/image/logo.svg`)} alt="gift-box" />
        <button
          onClick={() => setFlag(true)}
          className={styles.container__button}
        ></button>
        { (
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
        )}
      </div>
    </div>
  );
};

export default Header;
