import * as Types from "../constants/ActionTypes";
import callApi from "../utils/apiCaller";
export const actFecthDataProductsReq = () => {
  return dispatch => {
    return callApi("datacart", "GET", null).then(res => {
      dispatch(actFecthDataProducts(res.data));
    });
  };
};
export const actFecthDataProducts = products => {
  return {
    type: Types.FETCH_DATA_PRODUCTS,
    products
  };
};

export const actAddToCart = (product, quantity) => {
  // đầu vào là sản phẩm và giá tiền
  return {
    type: Types.ADD_TO_CART,
    product: product,
    quantity: quantity
  };
};
export const actChangeMessage = message => {
  return {
    type: Types.CHANGE_MESSAGE,
    message
  };
};
export const actRemoveProductInCart = product => {
  return {
    type: Types.DELETE_PRODUCT_IN_CART,
    product
  };
};
export const actUpdateProductInCart = (product, quantity) => {
  return {
    type: Types.UPDATE_PRODUCT_IN_CART,
    product,
    quantity
  };
};
