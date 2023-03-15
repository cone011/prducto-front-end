export const CALL_API = `${process.env.REACT_APP_LINKAPI}`;

export const defaultTodoReducer = {
  isLoading: false,
  isShow: false,
  isError: false,
  cartIsShow: false,
  confirm: false,
  typeModal: null,
  productObject: null,
};

export const defaultCartSate = {
  items: [],
  totalAmount: 0,
};
