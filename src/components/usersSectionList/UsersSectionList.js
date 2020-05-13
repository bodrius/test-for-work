import React, { useState, useEffect } from "react";
import * as listUsers from "../../services";
import { Tooltip } from "@material-ui/core";

const UsersSectionList = () => {
  const [users, setUsers] = useState([]);
  const [flag, setFlag] = useState(false);
  // eslint-disable-next-line
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setPostsPerPage] = useState(0);

  // REST API method  GET users and sort
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

  // check window width for show users
  useEffect(() => {
    let showUser = 3;
    setPostsPerPage(showUser);

    if (window.innerWidth > 767) {
      let showUser = 6;
      setPostsPerPage(showUser);
    }
  }, []);

  

  // logic for current users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // show next users page
  const handelClick = () => {
    setPostsPerPage(usersPerPage + 6);
    setFlag(users.length - indexOfLastUser - 6 < 0);
  };

  return (
    <div className="cover">
      <div className="box-users">
        <h2 className="box-users__caption">Our cheerful users</h2>
        <p className="box-users__description">
          Attention! Sorting users by registration date
        </p>
        <div>
          <ul className="cover__list">
            {currentUsers.map((item) => (
              <li className="cover__item" key={item.id}>
                <img
                  className="cover__img"
                  src={item.photo}
                  alt="img"
                />
                <span className="cover__userName">{item.name}</span>
                <span className="cover__paragraph">
                  {item.position}
                </span>
                <Tooltip title={item.email}>
                  <span className="cover__paragraph">
                    {item.email}
                  </span>
                </Tooltip>
                <span className="cover__paragraph">{item.phone}</span>
              </li>
            ))}
          </ul>
        </div>
        {flag || (
          <button className="cover__btn" onClick={handelClick}>
            Show more
          </button>
        )}
      </div>
    </div>
  );
};

export default UsersSectionList;
