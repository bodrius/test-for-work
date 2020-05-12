import React, { useState, useEffect } from "react";
import InputFiles from "react-input-files";
import PNotify from "../../../node_modules/pnotify/dist/es/PNotify";
import "../../../node_modules/pnotify/dist/PNotifyBrightTheme.css";
import * as getPoints from "../../services";
import styles from "./FormSection.module.css";
import Modal from "../modal/Modal";

const FormSection = () => {
  const [pathFiles, setPathFiles] = useState("");
  const [radioButtons, setRadioButtons] = useState([]);
  // const [checked, setChecked] = useState(false);
  const [register, setRegister] = useState("");

  const ref = React.createRef();

  useEffect(() => {
    getPoints.getUserPosition().then((work) => {
      return setRadioButtons(work.data.positions);
    });
  }, []);

  const closeModal = () => {
    setRegister(false);
  };

  const getIdRadioBtn = (event) => {
    const points = event.target.elements.rb;
    const getValue = Object.entries(points);
    const getTrueValue = getValue.flat();
    const result = getTrueValue.filter((e, i) => i % 2);
    const userID = result.find((point) => point.checked === true);
    const finalRez = Object.entries(userID);
    return finalRez[1][1].id;
  };

  const handelSubmitForm = (event) => {
    event.preventDefault();
    let id = getIdRadioBtn(event);

    let user = {
      login: event.target.elements[0].value,
      email: event.target.elements[1].value,
      phone: event.target.elements[2].value,
      position_id: id,
      photo: pathFiles,
    };

    let formData = new FormData();
    const node = ref.current.input.current.files[0];
    formData.append("position_id", `${user.position_id}`);
    formData.append("name", `${user.login}`);
    formData.append("email", `${user.email}`);
    formData.append("phone", `${user.phone}`);
    formData.append("photo", node);

    const URL = "https://frontend-test-assignment-api.abz.agency/api/v1/users";
    const token =
      "eyJpdiI6InJyRWtMRGlGclI4OTl0SkRKc0dTb2c9PSIsInZhbHVlIjoiQzVKWW1kRWJaVXU4Tk45YzJMdmhJN3lhSW5vZmd0WWFLK2cwRUdhdWkrUHdSYnJBRjlvU2FSQjU4VXJRME5sYUpiaDBoVktTbjgyQ1pHV2ZrVEQ4ekE9PSIsIm1hYyI6ImU2OTIwNThjYmQ0MjRmYzljNmE2ZGMwZDhhOWU1M2MwY2MzY2Q5ZTFkNWRjM2U0OGU0MzdlYjUzZGUxYWMzYTMifQ==";

    fetch(URL, {
      method: "POST",
      body: formData,
      headers: {
        Token: token,
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (data.user_id) {
          setRegister(data.user_id);
          return;
        }

        PNotify.error({
          title: "Oh No!",
          text: `${data.message}`,
        });
      })
      .catch(function (error) {
        PNotify.error({
          title: "Oh No!",
          text: `${error}`,
        });
      });

    // eslint-disable-next-line
    const userRefresh = {
      login: (event.target.elements[0].value = ""),
      email: (event.target.elements[1].value = ""),
      phone: (event.target.elements[2].value = ""),
      position_id: false,
      photo: setPathFiles(""),
    };
  };

  return (
    <div className={styles.form} id="form">
      <h2 className={styles.form__caption}>Register to get a work</h2>
      <p className={styles.form__description}>
        Attention! After succsesful registration and alert, update the list of
        users in the block from the top
      </p>
      <form onSubmit={handelSubmitForm}>
        <p className={styles.formInputDesk}>Name</p>
        <input
          name="login"
          className={styles.formInput}
          type="text"
          placeholder="Your name"
          autoComplete="false"
          required
        />
        <p className={styles.formInputDesk}>Email</p>
        <input
          name="email"
          className={styles.formInput}
          type="email"
          placeholder="Your email"
          required
        />
        <p className={styles.formInputDesk}>Phone number</p>
        <input
          name="phone"
          pattern="(^[\+]{0,1}380([0-9]{9})$)"
          className={styles.formInput + " " + styles.lastInput}
          type="tel"
          placeholder="+380 XX XXX XX XX"
          required
        />
        <p className={styles.formNumberDesc}>
          Enter phone number in open format
        </p>
        <p className={styles.formUserPosition}>Select your position</p>
        <div className={styles.containerRadioBtn}>
          {radioButtons.map((item) => (
            <div className={styles.radioBtn} key={item.id}>
              <input type="radio" name="rb" required id={item.id} />
              <label htmlFor={item.id}>{item.name}</label>
            </div>
          ))}
        </div>
        <p className={styles.formUserPosition}>Photo</p>

        <div className={styles.uploadSection}>
          <input
            className={styles.uploadInput}
            disabled={true}
            placeholder={
              pathFiles ? `${pathFiles.name}` : `${"Upload your photo"}`
            }
            type="text"
          />
          <InputFiles ref={ref} onChange={(files) => setPathFiles(files[0])}>
            <button className={styles.uploadBtn}>Browse</button>
          </InputFiles>
        </div>
        <button type="submit" className={styles.btnSubmit}>
          Sign up now
        </button>
      </form>
      {register && (
        <div className={styles.backdropDiv}>
          <Modal closeModal={closeModal} />
        </div>
      )}
    </div>
  );
};

export default FormSection;
