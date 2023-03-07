import api from "./api";

export async function login(loginPayload) {
  try {
    const response = await api.post("login", loginPayload);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
