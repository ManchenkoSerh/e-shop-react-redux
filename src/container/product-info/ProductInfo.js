import { connect } from "react-redux";
import ProductsInfo from "../../components/products-info/products-info";
import {
  addToShoppingCart,
  deletedUrl,
  fetchComments,
  fetchVideoInfo,
  getProductInfo,
  saveUrl,
} from "../../redux/action/actions";

const mapStateToProps = (state) => ({
  productsInfo: state.productsInfo,
  //videoUrl:state.videoUrl,
  products: state.products,
  comments: state.comments,
  shoppingCart: state.shoppingCart,
  urlSave: state.urlSave,
  isLoading: state.isLoading,
  isError: state.isError,
});
const mapDispatchToProps = (dispatch) => ({
  getProductInfo: (id) => dispatch(getProductInfo(id)),
  onIncrease: (id) => dispatch(addToShoppingCart(id)),
  fetchComments: (id) => dispatch(fetchComments(id)),
  saveUrl: (url) => dispatch(saveUrl(url)),
  deletedUrl: () => dispatch(deletedUrl()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsInfo);
