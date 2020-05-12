import axios from "axios";

const BASE_URL = `https://frontend-test-assignment-api.abz.agency/api/v1`;

export const getUsers = async () => {
  try {
    const data = await axios({
      url: `${BASE_URL}/users?page=1&count=100`,
      method: "get",
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getUserPosition = async () => {
  try {
    const data = await axios({
      url: `${BASE_URL}/positions`,
      method: "get",
    });
    return data;
  } catch (error) {
    console.log("ERRRRR", error);
  }
};

export const getUserToken = async () => {
  try {
    const data = await axios({
      url: `${BASE_URL}/token`,
      method: "get",
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
