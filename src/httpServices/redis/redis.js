import http from "../httpService";
import { getToken } from "../localStorage";
const handleServerError = require("../handleServerError");
const route = process.env.REACT_APP_Api + "redis/";

export async function addRedis(content) {
  let token = getToken();
  const headers = {
    "Content-Type": "application/json",
    "x-auth-token": token
  };
  const response = await http.post(route + "add", content, {
    headers: headers
  });
  const result = handleServerError(response);
  if (result) return { data: null, error: result };
  else return { data: response.data, error: null };
}

export async function getRedis() {
  const response = await http.get(route + "getAll");
  const result = handleServerError(response);
  if (result) return { data: null, error: response };
  else return { data: response.data, error: null };
}