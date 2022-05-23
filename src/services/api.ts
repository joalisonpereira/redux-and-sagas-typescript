import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/todos",
});

export default api;
