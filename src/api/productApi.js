import { CALL_API } from "../util/const";

export async function getProductoCategory(categoryId) {
  const response = await fetch(
    `${CALL_API}/productos?categoryId=${categoryId}`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error("Can not fetch the data with this parameter");
  }

  return data;
}

export async function getSearchProducto(searchProduct) {
  const response = await fetch(
    `${CALL_API}//search-productos?searchProduct=${searchProduct}`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error("Can not fetch the data with this parameter");
  }

  return data;
}
