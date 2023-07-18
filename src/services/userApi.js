import axios from "axios";

const baseUrl = "http://localhost:3001/api/users/";

const retrieveAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const retrieveOne = () => {
  const request = axios.get(`${baseUrl}:id`);
  return request.then((response) => response.data);
};

const create = (newVolume) => {
  const request = axios.post(`${baseUrl}register`, newVolume);
  return request.then((response) => response.data);
};

const login = (newVolume) => {
  const request = axios.post(`${baseUrl}login`, newVolume);
  return request.then((response) => response.data);
};

export { create, retrieveAll, retrieveOne, login };
