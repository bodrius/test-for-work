import axios from "axios";

const BASE_URL = `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=50`;

export const getUsers = async () => await axios.get(BASE_URL);

const URL_POSITION = `https://frontend-test-assignment-api.abz.agency/api/v1/positions`;

export const getUserPosition = async () => await axios.get(URL_POSITION);







