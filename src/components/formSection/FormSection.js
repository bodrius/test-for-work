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
  // const [checked, setChecked] = useState(false);
  const [register, setRegister] = useState("");

  const ref = React.createRef();

  // REST API methot GET for show radio button
  useEffect(() => {
    getPoints.getUserPosition().then((work) => {
      return setRadioButtons(work.data.positions);
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

    const URL = "https://frontend-test-assignment-api.abz.agency/api/v1/users";

    const sendDataToServer = (token) =>
      fetch(URL, {
        method: "POST",
        body: formData,
        headers: {
          Token: token,
        },
      })
        .then(function (data) {
          if (data.statusText) {
            setRegister(data.statusText);
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

    //reset input value
    // eslint-disable-next-line
    const userRefresh = {
      login: (event.target.elements[0].value = ""),
      email: (event.target.elements[1].value = ""),
      phone: (event.target.elements[2].value = ""),
      position_id: false,
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
      <form onSubmit={handelSubmitForm}>
        <p className="formInputDesk">Name</p>
        <input
          name="login"
          className="formInput"
          type="text"
          placeholder="Your name"
          autoComplete="false"
          required
        />
        <p className="formInputDesk">Email</p>
        <input
          name="email"
          className="formInput"
          type="email"
          placeholder="Your email"
          required
        />
        <p className="formInputDesk">Phone number</p>
        <input
          name="phone"
          pattern="(^[\+]{0,1}380([0-9]{9})$)"
          className="formInput lastInput"
          type="tel"
          placeholder="+380 XX XXX XX XX"
          required
        />
        <p className="formNumberDesc">
          Enter phone number in open format
        </p>
        <p className="formUserPosition">Select your position</p>
        <div className="containerRadioBtn">
          {radioButtons.map((item) => (
            <div className="radioBtn" key={item.id}>
              <input type="radio" name="rb" required id={item.id} />
              <label htmlFor={item.id}>{item.name}</label>
            </div>
          ))}
        </div>
        <p className="formUserPosition">Photo</p>
        <div className="uploadSection">
          <input
            className="uploadInput"
            disabled={true}
            placeholder={
              pathFiles ? `${pathFiles.name}` : `${"Upload your photo"}`
            }
            type="text"
          />
          <InputFiles ref={ref} onChange={(files) => setPathFiles(files[0])}>
            <button className="uploadBtn">Browse</button>
          </InputFiles>
        </div>
        <button type="submit" className="btnSubmit">
          Sign up now
        </button>
      </form>
      {register && (
        <div className="backdropDiv">
          <Modal closeModal={() => setRegister(false)} />
        </div>
      )}
    </div>
  );
};

export default FormSection;
