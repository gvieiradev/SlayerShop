import axios from "./axios.js";

const API = "http://localhost:3000/api/v1";

export const authRequest = user => axios.post(`${API}/signup`, user);