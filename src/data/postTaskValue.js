import axios from "axios";

export const api = axios.create({
  baseURL: "https://dev.ithubs.uz/coffee/api/v1",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export async function postTaskValue(payload) {
  const response = await api.post("/agro", payload); 
  // Agar POST endpoints boshqacha bo‘lsa (/update, /value, /task)
  // backenddan aniq endpointni oling va shu yerga qo‘ying.
  
  return response.data;
}
