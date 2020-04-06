import http from "../httpService";
import { getToken } from "../localStorage";
import { toast } from "react-toastify";
const handleServerError = require("../handleServerError");
const route = process.env.REACT_APP_Api + "blog/";

export async function addBlog(blog) {
  try {
    let token = getToken();
    let headers = {
      "x-auth-token": token,
    };
    const data = new FormData();
    data.append("image", blog.image);
    data.append("blog", blog.blog);
    const response = await http.post(route, data, { headers: headers });
    const result = handleServerError(response);
    if (result) return { data: null, error: result };
    else return { data: response.data, error: null };
  } catch (ex) {
    toast.warn(ex);
  }
}

export async function getBlogs() {
  try {
    const response = await http.get(route);
    const result = handleServerError(response);
    if (result) return { data: null, error: result };
    else return { data: response.data, error: null };
  } catch (ex) {
    toast.warn(ex);
  }
}
export async function getBlogById(id) {
  try {
    const response = await http.get(route + id);
    const result = handleServerError(response);
    if (result) return { data: null, error: result };
    else return { data: response.data, error: null };
  } catch (ex) {
    toast.warn(ex);
  }
}
export async function editBlog(id, data) {
  try {
    let token = getToken();
    let headers = {
      "x-auth-token": token,
    };
    const formData = new FormData();
    formData.set("blog", data.blog);
    formData.append("image", data.image);
    const response = await http.put(route + id, formData, { headers: headers });
    const result = handleServerError(response);
    if (result) return { data: null, error: result };
    else return { data: response.data, error: null };
  } catch (ex) {
    toast.warn(ex);
  }
}
export async function deleteBlog(id) {
  try {
    let token = getToken();
    let headers = {
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
export async function getBlogsByQuery(limit, sortedBy) {
  try {
    const response = await http.get(route + sortedBy + "/" + limit);
    const result = handleServerError(response);
    if (result) return { data: null, error: result };
    else return { data: response.data, error: null };
  } catch (ex) {
    toast.warn(ex);
  }
}
