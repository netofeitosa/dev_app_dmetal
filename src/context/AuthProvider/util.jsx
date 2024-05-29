import { Api } from "../../services/api";

export function setUserLocalStorage(user) {
  const expirationMs = 120 * 60 * 1000;
  const expirationDate = new Date().getTime() + expirationMs;
  user.tokenExpiration = expirationDate;

  localStorage.setItem("@user", JSON.stringify(user));
}

export function getUserLocalStorage() {
  const json = localStorage.getItem("@user");
  if (!json) {
    return null;
  }
  const user = JSON.parse(json);
  return user ?? null;
}

/* export async function LoginRequest(user, password) {
  const data = { user, password };
  try {
    const response = await Api.post("/login", data);
    return response.data;
  } catch (error) {
    return null;
  }
} */
