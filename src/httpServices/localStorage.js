import { toast } from "react-toastify";

export function setToken(value) {
  try {
    localStorage.setItem("x-auth-token", value);
  } catch (ex) {
    toast.warn(ex);
  }
}
export function getToken() {
  try {
    if (localStorage.getItem("x-auth-token"))
      return localStorage.getItem("x-auth-token");
    return null;
  } catch (ex) {
    toast.warn(ex);
  }
}
export function removeToken() {
  try {
    if (localStorage.getItem("x-auth-token"))
      localStorage.removeItem("x-auth-token");
  } catch (ex) {
    toast.warn(ex);
  }
}
