import React, { useState, useEffect } from "react";
import InputFiles from "react-input-files";
import PNotify from "../../../node_modules/pnotify/dist/es/PNotify";
import "../../../node_modules/pnotify/dist/PNotifyBrightTheme.css";
import * as getPoints from "../../services";
import * as receiveToken from "../../services";
import Modal from "../modal/Modal";

const FormSection = () => {
  const [pathFiles, setPathFiles] = useState("");
  const [radioButtons, setRadioButtons] = useState([]);
  const [token, setGetToken] = useState("");
  const [checked, setChecked] = useState(false);
  const [register, setRegister] = useState("");

  console.log("checked", checked);
  const ref = React.createRef();

  // REST API methot GET for show radio button
  useEffect(() => {
    getPoints.getUserPosition().then((work) => {
      return setRadioButtons(work.data.positions.reverse());
    });
  }, []);

  // REST API methot GET for receive user token
  useEffect(() => {
    receiveToken.getUserToken().then((data) => {
      return setGetToken(data.data.token);
    });
  }, []);

  // function for receive id checked radio button
  const getIdRadioBtn = (event) => {
    const points = event.target.elements.rb;
    const getValue = Object.entries(points);
    const getTrueValue = getValue.flat();
    const result = getTrueValue.filter((e, i) => i % 2);
    const userID = result.find((point) => point.checked === true);
    const finalRez = Object.entries(userID);
    return finalRez[1][1].id;
  };

  //function for get data from some user and send data to server
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

    const sendDataToServer = (token) =>
      fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users", {
        method: "POST",
        body: formData,
        headers: {
          Token: token, // get token with GET api/v1/token method
        },
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          if (data.user_id) {
            setRegister(data.user_id);
            return;
          } else {
            PNotify.error({
              title: "Oh No!",
              text: `${data.message}`,
            });
          }
        })
        .catch(function (error) {
          PNotify.error({
            title: "Oh No!",
            text: `${error}`,
          });
        });

    //reset input value
    // eslint-disable-next-line
    const userRefresh = {
      login: (event.target.elements[0].value = ""),
      email: (event.target.elements[1].value = ""),
      phone: (event.target.elements[2].value = ""),
      position_id: setChecked(true),
      photo: setPathFiles(""),
    };

    sendDataToServer(token);
  };

  return (
    <div className="form" id="form">
      <h2 className="form__caption">Register to get a work</h2>
      <p className="form__description">
        Attention! After succsesful registration and alert, update the list of
        users in the block from the top
      </p>
      <form className="register-form" onSubmit={handelSubmitForm}>
        <p className="register-form__description">Name</p>
        <input
          name="login"
          className="register-form__input"
          type="text"
          placeholder="Your name"
          autoComplete="false"
          required
        />
        <p className="register-form__description">Email</p>
        <input
          name="email"
          className="register-form__input"
          type="email"
          placeholder="Your email"
          required
        />
        <p className="register-form__description">Phone number</p>
        <input
          name="phone"
          pattern="(^[\+]{0,1}380([0-9]{9})$)"
          className="register-form__input last-input"
          type="tel"
          placeholder="+380 XX XXX XX XX"
          required
        />
        <p className="register-form__numberdesc">
          Enter phone number in open format
        </p>
        <p className="register-form__position">Select your position</p>
        <div className="radio-box">
          {radioButtons.map((item) => (
            <div className="radio-button" key={item.id}>
              <input
                type="radio"
                name="rb"
                checked={checked ? false : null}
                id={item.id}
              />
              <label htmlFor={item.id}>{item.name}</label>
            </div>
          ))}
        </div>
        <p className="register-form__position">Photo</p>
        <div className="section-upload">
          <input
            className="section-upload__input"
            disabled={true}
            placeholder={
              pathFiles ? `${pathFiles.name}` : `${"Upload your photo"}`
            }
            type="text"
          />
          <InputFiles ref={ref} onChange={(files) => setPathFiles(files[0])}>
            <button className="section-upload__btn">Browse</button>
          </InputFiles>
        </div>
        <button type="submit" className="button-submit">
          Sign up now
        </button>
      </form>
      {register && (
        <div className="box-backdrop">
          <Modal closeModal={() => setRegister(false)} />
        </div>
      )}
    </div>
  );
};

export default FormSection;
