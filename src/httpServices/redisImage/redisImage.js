import http from "../httpService";
import { toast } from "react-toastify";
import { getToken } from "../localStorage";
const handleServerError = require("../handleServerError");
const route = process.env.REACT_APP_Api + "redisImages/";

export async function getRedis(key) {
  try {
    const response = await http.get(route + key);
    const result = handleServerError(response);
    if (result) return { data: null, error: result };
    else return { data: response.data, error: null };
  } catch (ex) {
    toast.warn(ex);
  }
}

export async function updateSubItemImage(item) {
  try {
    let token = getToken();
    const headers = {
      "x-auth-token": token
    };
    const data = new FormData();
    data.append("redisId", item.redisId);
    data.append("itemId", item.itemId);
    data.append("image", item.image);
    const response = await http.put(route + "updateSubItemImage", data, {
      headers: headers
    });
    const result = handleServerError(response);
    if (result) return { data: null, error: result };
    else return { data: response, error: null };
  } catch (ex) {
    toast.warn(ex);
  }
}
export async function updateSubItemData(data) {
  try {
    const token = getToken();
    const headers = {
      "x-auth-token": token
    };
    const response = await http.put(route + "updateSubItemData", data, {
      headers: headers
    });
    const result = handleServerError(response);
    if (result) return { data: null, error: result };
    else return { data: response, error: null };
  } catch (ex) {
    toast.warn(ex);
  }
}
export async function deleteSubItemData(data) {
  try {
    const token = getToken();
    const headers = {
      "x-auth-token": token
    };
    const response = await http.delete(
      route + "deleteItem/" + data.redisId + "/" + data.itemId,
      { headers: headers }
    );
    const result = handleServerError(response);
    if (result) return { data: null, error: result };
    else return { data: response, error: null };
  } catch (ex) {
    toast.warn(ex);
  }
}
export async function addSubItemData(data) {
  const token = getToken();
  const headers = {
    "x-auth-token": token
  };
  const item = new FormData();
  item.append("image", data.image);
  item.append("title", data.title);
  item.append("link", data.link);
  item.append("key", data.key);
  const response = await http.post(route + "addItem", item, {
    headers: headers
  });
  const result = handleServerError(response);
  if (result) return { data: null, error: result };
  else return { data: response.data, error: null };
}
