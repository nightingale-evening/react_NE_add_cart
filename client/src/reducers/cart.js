import * as Types from "../constants/ActionTypes";
//lấy data từ trên local về
let data = JSON.parse(localStorage.getItem("CART"));
let initialState = data ? data : [];
const cart = (state = initialState, action) => {
  //truyền action qua
  let { product, quantity } = action;
  // k tìm thấy là -1
  let index = -1;
  switch (action.type) {
    //trường hợp mua sản phẩm
    case Types.ADD_TO_CART:
      // state là danh sách các sp trong giỏ hàng, product là sản phẩm bấm vào mua
      index = findProductInCart(state, product);
      // kiểm tra nếu sản phẩm chưa có trong giỏ hàng thì thêm vào giỏ,còn đã có rồi thì tăng số lượng
      if (index !== -1) {
        state[index].quantity += quantity;
      } else {
        state.push({
          product,
          quantity
        });
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
    // xóa sản phẩm trong giở hàng thì phải xóa trong reducers cart
    case Types.DELETE_PRODUCT_IN_CART:
      //tìm product dựa vào id của product do action truyền qua
      index = findProductInCart(state, product);
      if (index !== -1) {
        //tìm thấy vị trí cần xóa
        //có thể dùng hàm filter
        state.splice(index, 1);
      }
      // set lại localStoreage và return về các sản phẩm trong giỏ hàng
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
    case Types.UPDATE_PRODUCT_IN_CART:
      // lấy ra index và cập nhật
      index = findProductInCart(state, product);
      if (index !== -1) {
        // cập nhật giá tiền
        state[index].quantity = quantity;
      }
      // update lại giá tiền trong local Storage
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
    default:
      return [...state];
  }
};
// check xem sản phẩm đã có trong giỏ hàng hay chưa
let findProductInCart = (cart, product) => {
  let index = -1;
  if (cart.length > 0) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].product.id === product.id) {
        index = i;
        break;
      }
    }
  }
  return index;
};
export default cart;
