import http from "../httpService";
import { getToken } from "../localStorage";
import { toast } from "react-toastify";
const handleServerError = require("../handleServerError");
const route = process.env.REACT_APP_Api + "requests/";

export async function httpRequestCar(car_id) {
  try {
    let token = getToken();
    const headers = {
      "Content-Type": "application/json",
      "x-auth-token": token,
    };
    const response = await http.post(route + car_id, {}, { headers: headers });
    const result = handleServerError(response);
    if (result) return { data: null, error: result };
    else return { data: response.data, error: null };
  } catch (ex) {
    toast.warn(ex);
  }
}

export async function httpGetAllRequests() {
  try {
    let token = getToken();
    const headers = {
      "Content-Type": "application/json",
      "x-auth-token": token,
    };
    const response = await http.get(route, { headers: headers });
    const result = handleServerError(response);
    if (result) return { data: null, error: result };
    else return { data: response.data, error: null };
  } catch (ex) {
    toast.warn(ex);
  }
}

export async function httpDeleteRequest(id) {
  try {
    let token = getToken();
    const headers = {
      "Content-Type": "application/json",
      "x-auth-token": token,
    };
    const response = await http.delete(route + id, { headers: headers });
    const result = handleServerError(response);
    if (result) return { data: null, error: result };
    else return { data: response.data, error: null };
  } catch (ex) {
    toast.warn(ex);
  }
}

export async function httpDeleteList(ids) {
  try {
    let token = getToken();
    const headers = {
      "Content-Type": "application/json",
      "x-auth-token": token,
    };
    const response = await http.delete(route, { headers: headers, data: ids });
    const result = handleServerError(response);
    if (result) return { data: null, error: result };
    else return { data: response.data, error: null };
  } catch (ex) {
    toast.warn(ex);
  }
}
