import { CALL_API } from "../util/const";

export async function insertOrder(orderObject) {
  const response = await fetch(`${CALL_API}/order`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...orderObject }),
  });

  const data = await response.json();

  if (!response.ok)
    throw new Error("Could not save this order, see what is wrong");

  return data.isSaved;
}
