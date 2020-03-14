import http from "../httpService";
import { getToken, removeToken, setToken } from "../localStorage";
import jwtDecode from "jwt-decode";
const handleServerError = require("../handleServerError");
const route = process.env.REACT_APP_Api + "users/";

export async function getUserById(id) {
  const response = await http.get(route + "byid/" + id);
  const result = handleServerError(response);
  if (result) return { data: null, error: result };
  return { data: response.data, error: null };
}

export async function getUserByName(name) {
  const response = await http.post(route + "search", { name: name });
  const result = handleServerError(response);
  if (result) return { error: result, data: null };
  return { error: null, data: response.data };
}

export async function addNewUser(user) {
  const response = await http.post(route, {
    name: user.name,
    email: user.email,
    password: user.password,
    phone: user.phone
  });
  const result = handleServerError(response);
  if (result) return { data: null, error: result };
  else {
    localStorage.setItem("confirmed", false);
  }
  return { data: "confirmed", error: null };
}

export async function updateUser(user, token) {
  const headers = {
    "Content-Type": "application/json",
    "x-auth-token": token
  };
  const response = await http.put(route + "update/", user, {
    headers: headers
  });
  const result = handleServerError(response);
  if (result) return { data: null, error: result };
  return { data: response.data, error: null };
}

export function getUserByToken() {
  const token = getToken();
  if (token) {
    let user = jwtDecode(token);
    if (user && user.exp >= Date.now() / 1000) {
      return user;
    } else {
      removeToken();
      return null;
    }
  }
  return null;
}

export async function uploadProfilePhoto(photo, token) {
  const headers = {
    "Content-Type": "multipart/form-data",
    "x-auth-token": token
  };
  const data = new FormData();
  data.append("profile_photo", photo);
  const response = await http.post(route + "upload", data, {
    headers: headers
  });
  const result = handleServerError(response);
  if (result) return { data: null, error: result };
  return { data: response.data, error: null };
}

export async function getAdmins(token) {
  const headers = {
    "Content-Type": "application/json",
    "x-auth-token": token
  };
  const response = await http.get(route + "admins", {
    headers: headers
  });
  const result = handleServerError(response);
  if (result) return { data: null, error: result };
  return { data: response.data, error: null };
}

export async function removeAdmin(id, token) {
  const headers = {
    "Content-Type": "application/json",
    "x-auth-token": token
  };
  const response = await http.get(route + "removeAdmin/" + id, {
    headers: headers
  });
  const result = handleServerError(response);
  if (result) return { data: null, error: result };
  return { data: response.data, error: null };
}

export async function AddNewAdmin(id, token) {
  const headers = {
    "Content-Type": "application/json",
    "x-auth-token": token
  };
  const response = await http.get(route + "makeAdmin/" + id, {
    headers: headers
  });
  const result = handleServerError(response);
  if (result) return { data: null, error: result };
  return { data: response.data, error: null };
}

export async function changePassword(data, token) {
  const headers = {
    "Content-Type": "application/json",
    "x-auth-token": token
  };
  const response = await http.put(
    route + "changePssword",
    { oldPassword: data.oldPassword, newPassword: data.newPassword },
    {
      headers: headers
    }
  );
  const result = handleServerError(response);
  if (result) return { data: null, error: result };
  setToken(response.data.token);
  return { data: response.data, error: null };
}

export async function forgotPassword(email) {
  const response = await http.get(route + "resetPassword/" + email);
  const result = handleServerError(response);
  if (result) return { data: null, error: result };
  return { data: response.data, error: null };
}
export async function resetForgotPassword(newPassword, token) {
  const response = await http.post(route + "ResetPassword", {
    newPassword: newPassword,
    token: token
  });
  const result = handleServerError(response);
  if (result) return { data: null, error: result };
  return { data: response.data, error: null };
}

export async function mobileConfirm(number, channel) {
  const response = await http.get(
    route + "mobileConfirm/" + number + "/" + channel
  );
  const result = handleServerError(response);
  if (result) return { data: null, error: result };
  return { data: response.data, error: null };
}
export async function mobileCheckCode(code) {
  let number = window.localStorage.getItem("phone");
  let sid = window.localStorage.getItem("sid");
  const response = await http.get(
    `${route}mobileCode/${number}/${code}/${sid}`
  );
  const result = handleServerError(response);
  if (result) return { data: null, error: result };
  return { data: "done", error: null };
}
