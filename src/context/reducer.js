import { defaultCartSate } from "../util/const";

export const todoReducer = (curTodo, action) => {
  switch (action.type) {
    case "SET_CART":
      return { ...curTodo, cartIsShow: true };
    case "SET_LOADING":
      return {
        ...curTodo,
        isLoading: true,
        message: action.message,
        typeModal: "LOADING",
      };
    case "SET_CONFIRM":
      return {
        ...curTodo,
        cartIsShow: false,
        isLoading: false,
        isPayment: false,
        message: action.message,
        confirm: true,
        typeModal: "CONFIRM",
      };
    case "SET_PRODUCT": {
      return {
        ...curTodo,
        isLoading: false,
        productObject: action.productObject,
      };
    }
    case "SET_PAYMENT":
      return {
        ...curTodo,
        isPayment: true,
        cartIsShow: false,
        typeModal: "PAYMENT",
      };
    case "SET_ERROR":
      return {
        ...curTodo,
        error: true,
        message: action.message,
        typeModal: action.typeModal,
      };
    case "END":
      return {
        ...curTodo,
        cartIsShow: false,
        isLoading: false,
        isPayment: false,
        error: false,
        confirm: false,
      };
    default:
      throw new Error("The action dont exist");
  }
};

export const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updateTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updateItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updateItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return { items: updatedItems, totalAmount: updateTotalAmount };
  }

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingItem = state.items[existingCartItemIndex];
    const updateTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updateItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updateItem;
    }

    return {
      items: updatedItems,
      totalAmount: updateTotalAmount,
    };
  }

  if (action.type === "CLEAR") {
    return defaultCartSate;
  }

  return defaultCartSate;
};
