import http from "../httpService";
import jwtDecode from "jwt-decode";
import { setToken, removeToken, getToken } from "../localStorage";
import { toast } from "react-toastify";
const handleServerError = require("../handleServerError");
const route = process.env.REACT_APP_Api + "auth/";

export async function login(data) {
  try {
    const response = await http.post(route, {
      email: data.email,
      password: data.password
    });
    const result = handleServerError(response);
    if (result) return { data: null, error: result };
    else {
      setToken(response.data.token);
      return { data: response.data.token, error: null };
    }
  } catch (ex) {
    toast.warn(ex);
  }
}

export function owner(id) {
  try {
    let token = getToken();
    if (token) {
      let user = jwtDecode(token);
      if (user && user._id === id) return true;
    }
    return false;
  } catch (ex) {
    toast.warn(ex);
  }
}

export function logout() {
  removeToken();
}

export function authed() {
  try {
    let token = getToken();
    if (token) {
      let user = jwtDecode(token);
      if (user) {
        return true;
      }
    }
    return false;
  } catch (ex) {
    toast.warn(ex);
  }
}

export function admin() {
  try {
    let token = getToken();
    if (token) {
      let user = jwtDecode(token);
      if (user && user.isAdmin) {
        return true;
      }
    }
    return false;
  } catch (ex) {
    toast.warn(ex);
  }
}
