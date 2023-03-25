import { CALL_API } from "../util/const";
import { getAuthToken } from "../store/auth-context";

export async function getAllCategory() {
  const token = getAuthToken();
  const result = await fetch(`${CALL_API}/categoria`, {
    headers: { Authorization: "Bearer " + token },
  });

  const data = await result.json();

  if (!result.ok) {
    throw new Error("Could not obtain the categories");
  }

  return data.result;
}
