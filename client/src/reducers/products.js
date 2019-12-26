import * as Types from "../constants/ActionTypes";
// chứa tất cả các products hiển thị trên trang chủ
let initialState = [];
const products = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_DATA_PRODUCTS:
      state = action.products;
      return [...state];
    // trả về list danh sách sản phẩm
    default:
      return [...state];
  }
};
export default products;
