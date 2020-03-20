import http from "../httpService";
import { getToken, removeToken, setToken } from "../localStorage";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
const handleServerError = require("../handleServerError");
const route = process.env.REACT_APP_Api + "users/";

export async function getUserById(id) {
  try {
    const response = await http.get(route + "byid/" + id);
    const result = handleServerError(response);
    if (result) return { data: null, error: result };
    return { data: response.data, error: null };
  } catch (ex) {
    toast.warn(ex);
  }
}

export async function getUserByName(name) {
  try {
    const response = await http.post(route + "search", { name: name });
    const result = handleServerError(response);
    if (result) return { error: result, data: null };
    return { error: null, data: response.data };
  } catch (ex) {
    toast.warn(ex);
  }
}

export async function addNewUser(user) {
  try {
    const response = await http.post(route, {
      name: user.name,
      email: user.email,
      password: user.password
    });
    const result = handleServerError(response);
    if (result) return { data: null, error: result };
    return { data: "confirmed", error: null };
  } catch (ex) {
    toast.warn(ex);
  }
}

export async function updateUser(user, token) {
  try {
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
  } catch (ex) {
    toast.warn(ex);
  }
}

export function getUserByToken() {
  try {
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
  } catch (ex) {
    toast.warn(ex);
  }
}

export async function uploadProfilePhoto(photo, token) {
  try {
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
  } catch (ex) {
    toast.warn(ex);
  }
}

export async function getAdmins(token) {
  try {
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
  } catch (ex) {
    toast.warn(ex);
  }
}

export async function removeAdmin(id, token) {
  try {
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
  } catch (ex) {
    toast.warn(ex);
  }
}

export async function AddNewAdmin(id, token) {
  try {
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
  } catch (ex) {
    toast.warn(ex);
  }
}

export async function changePassword(data, token) {
  try {
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
  } catch (ex) {
    toast.warn(ex);
  }
}

export async function forgotPassword(email) {
  try {
    const response = await http.get(route + "resetPassword/" + email);
    const result = handleServerError(response);
    if (result) return { data: null, error: result };
    return { data: response.data, error: null };
  } catch (ex) {
    toast.warn(ex);
  }
}
export async function resetForgotPassword(newPassword, token) {
  try {
    const response = await http.post(route + "ResetPassword", {
      newPassword: newPassword,
      token: token
    });
    const result = handleServerError(response);
    if (result) return { data: null, error: result };
    return { data: response.data, error: null };
  } catch (ex) {
    toast.warn(ex);
  }
}

// export async function mobileConfirm(number, channel) {
//   try {
//     const response = await http.get(
//       route + "mobileConfirm/" + number + "/" + channel
//     );
//     const result = handleServerError(response);
//     if (result) return { data: null, error: result };
//     return { data: response.data, error: null };
//   } catch (ex) {
//     toast.warn(ex);
//   }
// }

// export async function mobileCheckCode(code) {
//   try {
//     let number = window.localStorage.getItem("phone");
//     let sid = window.localStorage.getItem("sid");
//     const response = await http.get(
//       `${route}mobileCode/${number}/${code}/${sid}`
//     );
//     const result = handleServerError(response);
//     if (result) return { data: null, error: result };
//     return { data: "done", error: null };
//   } catch (ex) {
//     toast.warn(ex);
//   }
// }
