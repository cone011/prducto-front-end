import { CALL_API } from "../util/const";
import { getAuthToken } from "../store/auth-context";

export async function getProductoCategory(categoryId) {
  const token = getAuthToken();
  const response = await fetch(
    `${CALL_API}/productos?categoryId=${categoryId}`,
    { headers: { Authorization: "Bearer " + token } }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error("Can not fetch the data with this parameter");
  }

  return data;
}

export async function getSearchProducto(searchProduct) {
  const token = getAuthToken();
  const response = await fetch(
    `${CALL_API}/search-productos?searchProduct=${searchProduct}`,
    { headers: { Authorization: "Bearer " + token } }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error("Can not fetch the data with this parameter");
  }

  return data;
}

export async function getProductoById(productId) {
  const token = getAuthToken();
  const response = await fetch(`${CALL_API}/productos/${productId}`, {
    headers: { Authorization: "Bearer " + token },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error("Could not get the data of this product");
  }

  return data;
}
