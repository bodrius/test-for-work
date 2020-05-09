import React, { useState, useEffect } from "react";
import * as listUsers from "../../services";
import { Tooltip } from '@material-ui/core';
import styles from "./UsersSection.module.css";

const UsersSectionList = () => {
  const [defaultUserQty, setDefaultUserQty] = useState([]);
  const [flag,setFlag]=useState(true);

  useEffect(() => {
    listUsers.getUsers().then((user) => {
      return setDefaultUserQty(user.data.users);
    });
  }, []);

  const sortUsers = (defaultUserQty) => {
    return [...defaultUserQty].sort(
      (userA, userB) =>
        userA["registration_timestamp"] - userB["registration_timestamp"]
    );
  };

  let sortListusers = sortUsers(defaultUserQty);

  const handleSubmit = () => {
     setFlag(false)
  };


  return (
    <div className={styles.section}>
      <div className={styles.section__users}>
        <h2 className={styles.section__caption}>Our cheerfull users</h2>
        <p className={styles.section__description}>
          Attention! Sorting users by registration date
        </p>
        <div>
          <ul className={styles.section__list}>
            { flag? sortListusers.slice(0, 3).map((item) => (
              <li className={styles.section__item} key={item.id} >
                <img
                  className={styles.section__img}
                  src={`${item.photo}`}
                  alt="img"
                />
                <span className={styles.section__userName}>{item.name}</span>
                <span className={styles.section__paragraph}>
                  {item.position}
                </span>

                <Tooltip title={item.email}>
                <span className={styles.section__paragraph}>{item.email} </span>
</Tooltip>

 
                <span className={styles.section__paragraph}>{item.phone}</span>
              </li>
            )): sortListusers.map((item) => (
                <li className={styles.section__item} key={item.id}>
                  <img
                    className={styles.section__img}
                    src={`${item.photo}`}
                    alt="img"
                  />
                  <span className={styles.section__userName}>{item.name}</span>
                  <span className={styles.section__paragraph}>
                    {item.position}
                  </span>
                  <Tooltip title={item.email}>
                <span className={styles.section__paragraph}>{item.email} </span>
</Tooltip>
                  <span className={styles.section__paragraph}>{item.phone}</span>
                </li>
              ))
        
        }
          </ul>
        </div>
        {
            flag&& <button
            className={styles.section__btn}
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Show more
          </button>
        }
       
      </div>
    </div>
  );
};

export default UsersSectionList;
