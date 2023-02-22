import axios from "axios";

import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "../contants";

export const getProducts = () => async (dispatch: any) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const config: any = {
      "Content-Type": "application/json",
    };

    const { data } = await axios.get(`https://dummyjson.com/products`, config);

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
