import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL_SIT;
console.log("BASE_URL => ", BASE_URL);
const user = JSON.parse(localStorage.getItem("persist:root"))?.auth;
console.log("user => ", user);
const currentUser = user && JSON.parse(user).currentUser;
console.log("currentUser  => ", currentUser);
const TOKEN = currentUser?.accessToken;
console.log("TOKEN => ", TOKEN);

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
