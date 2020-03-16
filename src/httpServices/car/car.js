import http from "../httpService";
import { getToken } from "../localStorage";
import { toast } from "react-toastify";
const handleServerError = require("../handleServerError");
const route = process.env.REACT_APP_Api + "cars/";

export async function addCar(data) {
  try {
    const token = getToken();
    const headers = {
      "Content-Type": "application/json",
      "x-auth-token": token
    };
    const response = await http.post(route, data, { headers: headers });
    const result = handleServerError(response);
    if (result) return { data: null, error: result };
    else return { data: response.data, error: null };
  } catch (ex) {
    toast.warn(ex);
  }
}

export async function addCarImages(images, id) {
  try {
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
  } catch (ex) {
    toast.warn(ex);
  }
}
export async function getCars() {
  try {
    const response = await http.get(route);
    const result = handleServerError(response);
    if (result) return { data: null, error: result };
    else return { data: response.data, error: null };
  } catch (ex) {
    toast.warn(ex);
  }
}
export async function getCarById(id) {
  try {
    const response = await http.get(route + id);
    const result = handleServerError(response);
    if (result) return { data: null, error: result };
    else return { data: response.data, error: null };
  } catch (ex) {
    toast.warn(ex);
  }
}
