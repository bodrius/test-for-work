import React, { useState, useEffect} from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./Header.module.css";
import Menu from "../menu/Menu";
import transitionMenu from "../../ui/transitionMenu.module.css";

const Header = () => {
  const [isMenuOpen, setMenuState] = useState(false);

  const openModal = () => {
    setMenuState(true);
  };

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setMenuState(false);
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
          onClick={openModal}
          className={styles.container__button}
        ></button>
        <div className={styles.backdropDive}>
          {isMenuOpen && (
            <CSSTransition timeout={3000} in={isMenuOpen} unmountOnExit className={transitionMenu}>
              <Menu useOutsideAlerter={useOutsideAlerter}/>
            </CSSTransition>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
