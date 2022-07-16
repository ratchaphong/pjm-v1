import axios from "axios";

const BASE_URL = "http://localhost:3031/api/";

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
