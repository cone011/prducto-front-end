import { CALL_API } from "../util/const";

export async function signUp(userObject) {
  const response = await fetch(`${CALL_API}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: userObject.email,
      password: userObject.password,
      confirmPassword: userObject.confirmPassword,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error("Can not sign up this user");
  }

  return data;
}

export async function login(userObject) {
  const response = await fetch(`${CALL_API}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: userObject.email,
      password: userObject.password,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error("Can not sign up this user");
  }

  return { ...data.result };
}
