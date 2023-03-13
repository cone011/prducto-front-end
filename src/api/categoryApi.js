import { CALL_API } from "../util/const";

export async function getAllCategory() {
  const result = await fetch(`${CALL_API}/categoria`);

  const data = await result.json();

  if (!result.ok) {
    throw new Error("Could not obtain the categories");
  }

  return data.result;
}
