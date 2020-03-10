import http from "../httpService";
import { getToken } from "../localStorage";
const handleServerError = require("../handleServerError");
const route = process.env.REACT_APP_Api + "cars/";

export async function addCar(data) {
  const token = getToken();
  const headers = {
    "Content-Type": "application/json",
    "x-auth-token": token
  };
  const response = await http.post(route, data, { headers: headers });
  const result = handleServerError(response);
  if (result) return { data: null, error: result };
  else return { data: response.data, error: null };
}

export async function addCarImages(images, id) {
  const token = getToken();
  const headers = {
    "Content-Type": "multipart/form-data",
    "x-auth-token": token
  };
  const data = new FormData();
  data.append("id", id);
  for (let i = 0; i < images.length; i++) {
    data.append("images", images[i]);
  }
  const response = await http.post(route + "images", data, {
    headers: headers
  });
  const result = handleServerError(response);
  if (result) return { data: null, error: result };
  else return { data: response.data, error: null };
}
export async function getCars() {
  const response = await http.get(route);
  const result = handleServerError(response);
  if (result) return { data: null, error: result };
  else return { data: response.data, error: null };
}
export async function getCarById(id) {
  const response = await http.get(route + id);
  const result = handleServerError(response);
  if (result) return { data: null, error: result };
  else return { data: response.data, error: null };
}
