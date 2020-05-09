import React, {useRef} from "react";
import styles from "./Menu.module.css";

const Menu = ({useOutsideAlerter}) => {
    const wrapperRef = useRef(null);

    useOutsideAlerter(wrapperRef)

  return (
    <div  className={styles.modalBackdrops}>
      <div ref={wrapperRef} className={styles.modalBoxes}>
        <img
          className={styles.modalLogo}
          src={require(`../../assets/image/logo.svg`)}
          alt="gift-box"
        />
        <ul className={styles.modalList}>
          <li className={styles.madalItem}>About me</li>
          <li className={styles.madalItem}>Relation ship</li>
          <li className={styles.madalItem}>Users</li>
          <li className={styles.madalItem}>Sign Up</li>
          <li className={styles.madalItem}>Terms and conditions</li>
        </ul>
        <ul className={styles.modalList}>
          <li className={styles.madalItem}>How it work</li>
          <li className={styles.madalItem}>Partnership</li>
          <li className={styles.madalItem}>Help</li>
          <li className={styles.madalItem}>Leave testimonial</li>
          <li className={styles.madalItem}>Contact us</li>
        </ul>
        <ul className={styles.modalList}>
          <li className={styles.madalItem}>Articles</li>
          <li className={styles.madalItem}>Our news</li>
          <li className={styles.madalItem}>Testimonial</li>
          <li className={styles.madalItem}>Licenses</li>
          <li className={styles.madalItem}>Privacy police</li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
