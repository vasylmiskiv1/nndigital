import { PRODUCT_LIST_SUCCESS } from "../contants";

const initialState = {
  products: [],
  cart: [],
  isLoading: false,
  errors: "",
};

export function storeReducer(state = initialState, action: any) {
  switch (action.type) {
    case PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        products: action.payload
      };
    default:
      return state;
  }
}