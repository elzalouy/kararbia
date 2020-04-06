import http from "../httpService";
import { getToken } from "../localStorage";
import { toast } from "react-toastify";
const handleServerError = require("../handleServerError");
const route = process.env.REACT_APP_Api + "redis/";

export async function addRedis(content) {
  try {
    let token = getToken();
    const headers = {
      "Content-Type": "application/json",
      "x-auth-token": token,
    };
    let item = {
      key: content.key,
      value: {
        short_english: content.value.short_english,
        long_english: content.value.long_english,
        short_arabic: content.value.short_arabic,
        long_arabic: content.value.long_arabic,
      },
    };
    const response = await http.post(route + "add", item, {
      headers: headers,
    });
    const result = handleServerError(response);
    if (result) return { data: null, error: result };
    else return { data: response.data, error: null };
  } catch (ex) {
    toast.warn(ex);
  }
}

export async function getRedis() {
  try {
    const response = await http.get(route + "getAll");
    const result = handleServerError(response);
    if (result) return { data: null, error: response };
    else return { data: response.data, error: null };
  } catch (ex) {
    toast.warn(ex);
  }
}

export async function getRedisItem(item) {
  try {
    const response = await http.get(route + "get/" + item);
    const result = handleServerError(response);
    if (result) return { data: null, error: response };
    else return { data: response.data, error: null };
  } catch (ex) {
    toast.warn(ex);
  }
}
