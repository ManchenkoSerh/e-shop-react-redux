import { connect } from "react-redux";
import React from "react";
import ShoppingCartTable from "../../components/shopping-cart/shopping-cart";
import {
  addToShoppingCart,
  deleteAllShoppingCart, fetchProducts,
  subToShoppingCart,
} from "../../redux/action/actions";
const mapStateToProps = (state) => ({
  shoppingCart: state.shoppingCart,
  products: state.products,
});
const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
  onIncrease: (id) => dispatch(addToShoppingCart(id)),
  onDecrease: (id) => dispatch(subToShoppingCart(id)),
  onDeleted: (id) => dispatch(deleteAllShoppingCart(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
