import { CALL_API } from "../util/const";
import { getAuthToken } from "../store/auth-context";

export async function insertOrder(orderObject) {
  const token = getAuthToken();
  const response = await fetch(`${CALL_API}/order`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...orderObject }),
  });

  const data = await response.json();

  if (!response.ok)
    throw new Error("Could not save this order, see what is wrong");

  return data.isSaved;
}
