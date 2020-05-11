import React, { useState, useEffect } from "react";
import * as listUsers from "../../services";
import { Tooltip } from "@material-ui/core";
import styles from "./UsersSection.module.css";

const UsersSectionList = () => {
  const [users, setUsers] = useState([]);
  const [flag, setFlag] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);
  
  useEffect(() => {
    listUsers.getUsers().then((user) => {
      return setUsers(
        user.data.users.sort(
          (userA, userB) =>
            userB["registration_timestamp"] - userA["registration_timestamp"]
        )
      );
    });
  }, []);

  // Get current users

  // if (window.innerWidth > 767) {
  //   const indexOfLastPost = currentPage * postsPerPage;
  //   const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = users.slice(indexOfFirstPost, indexOfLastPost);

  const handelClick = () => {
    setPostsPerPage(postsPerPage + 6)
    setFlag(indexOfLastPost > currentPosts.length);
  };

  return (
    <div className={styles.section}>
      <div className={styles.section__users}>
        <h2 className={styles.section__caption}>Our cheerful users</h2>
        <p className={styles.section__description}>
          Attention! Sorting users by registration date
        </p>
        <div>
          <ul className={styles.section__list}>
            {currentPosts.map((item) => (
              <li className={styles.section__item} key={item.id}>
                <img
                  className={styles.section__img}
                  src={item.photo}
                  alt="img"
                />
                <span className={styles.section__userName}>{item.name}</span>
                <span className={styles.section__paragraph}>
                  {item.position}
                </span>
                <Tooltip title={item.email}>
                  <span className={styles.section__paragraph}>
                    {item.email}
                  </span>
                </Tooltip>
                <span className={styles.section__paragraph}>{item.phone}</span>
              </li>
            ))}
          </ul>
        </div>
        {flag || (
          <button className={styles.section__btn} onClick={handelClick}>
            Show more
          </button>
        )}
      </div>
    </div>
  );
};

export default UsersSectionList;
