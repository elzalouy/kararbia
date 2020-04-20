import http from "../httpService";
import { toast } from "react-toastify";
import { getToken } from "../localStorage";
const handleServerError = require("../handleServerError");
const route = process.env.REACT_APP_Api + "contacts/";

export async function addContect(contact) {
  try {
    const response = await http.post(route, {
      name: contact.name,
      email: contact.email,
      subject: contact.subject,
      message: contact.message,
      date: Date(Date.now()),
    });
    const result = handleServerError(response);
    if (result) return { data: null, error: response };
    else return { data: response.data, error: null };
  } catch (ex) {
    toast.warn(ex);
  }
}

export async function getContacts() {
  try {
    const token = getToken();
    const headers = {
      "Content-Type": "application/json",
      "x-auth-token": token,
    };
    const response = await http.get(route, { headers: headers });
    const result = handleServerError(response);
    if (result) return { data: null, error: response };
    else return { data: response.data, error: null };
  } catch (ex) {
    toast.warn(ex);
  }
}

export async function deleteContact(id) {
  try {
    const token = getToken();
    const headers = {
      "Content-Type": "application/json",
      "x-auth-token": token,
    };
    const response = await http.delete(route + id, { headers: headers });
    const result = handleServerError(response);
    if (result) return { data: null, error: response };
    else return { data: response.data, error: null };
  } catch (ex) {
    toast.warn(ex);
  }
}

export async function deleteContactList(ids) {
  try {
    const token = getToken();
    const headers = {
      "Content-Type": "application/json",
      "x-auth-token": token,
    };
    const response = await http.delete(route, { headers: headers, data: ids });
    const result = handleServerError(response);
    if (result) return { data: null, error: response };
    else return { data: response.data, error: null };
  } catch (ex) {
    toast.warn(ex);
  }
}
