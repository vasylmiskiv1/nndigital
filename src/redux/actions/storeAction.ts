import axios from "axios";

import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  ADD_PRODUCT_TO_CART,
  TOGGLE_AUTH_MODAL,
} from "../contants";

export const getProducts = () => async (dispatch: any) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const config: any = {
      "Content-Type": "application/json",
    };

    const { data } = await axios.get(`${process.env.REACT_APP_PRODUCTS_ENDPOINT}`, config);

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data.products,
    });
  } catch (error: any) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addProductToCard = (productId: any) => (dispatch: any) => {
  dispatch({
    type: ADD_PRODUCT_TO_CART,
    payload: productId,
  });
};

export const toogleAuthModal = (isActive: boolean) => (dispatch: any) => {
  dispatch({
    type: TOGGLE_AUTH_MODAL,
    payload: isActive,
  });
};
