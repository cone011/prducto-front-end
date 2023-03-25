import { CALL_API } from "../util/const";
import { getAuthToken } from "../store/auth-context";

export async function savePayment(paymentObject) {
  const token = getAuthToken();
  const response = await fetch(`${CALL_API}/payment`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...paymentObject }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error("Could not save the payment");
  }

  return data.isSaved;
}
