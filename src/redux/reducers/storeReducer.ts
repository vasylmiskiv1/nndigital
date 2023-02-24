import { PRODUCT_LIST_SUCCESS, TOGGLE_AUTH_MODAL } from "../contants";

const initialState = {
  products: [],
  cart: [],
  isLoading: false,
  errors: "",
  userData: {},
  isAuthModal: false,
};

export function storeReducer(state = initialState, action: any) {
  switch (action.type) {
    case PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        products: action.payload,
      };
    case TOGGLE_AUTH_MODAL:
      return {
        ...state,
        isAuthModal: action.payload
      };

    default:
      return state;
  }
}
