import axios from "axios";


const BASE_URL = `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=100`;

export const getUsers = async () => await axios.get(BASE_URL);

const URL_POSITION = `https://frontend-test-assignment-api.abz.agency/api/v1/positions`;

export const getUserPosition = async () => await axios.get(URL_POSITION);


// const URL = "https://frontend-test-assignment-api.abz.agency/api/v1/users";
// const token =
//       "eyJpdiI6InloZjJjdUNCdmFlQlF2Y0taYVVSQ3c9PSIsInZhbHVlIjoiUjdKRERVN2tNVHR6V1ZQc2J3YlRQcUFxWjdDN1dBVlArWVJWVHNseDZiam9PZlhmbE40XC9OMlZrbk94TWVnY3RyTm1zSHRvbFV2bjNqcTh0M3lZQkhRPT0iLCJtYWMiOiJiZmZlZjUyZTkyNmU0N2U1NDlhMTdkZWNiOTg5NzU2NjA1ZjliZGQ5MzA2ZTdiMWJhMDI5MGE4ZWU3NjA1YmQ1In0=";

// export const sendDataToServer= async( formData )=> await  axios(URL, {
//       method: "POST",
//       body: formData,
//       headers: {
//         Token: token,
//       },
//     })
      