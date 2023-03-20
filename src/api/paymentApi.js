import { CALL_API } from "../util/const";

export async function savePayment(paymentObject) {
  const response = await fetch(`${CALL_API}/payment`, {
    method: "POST",
    headers: {
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
