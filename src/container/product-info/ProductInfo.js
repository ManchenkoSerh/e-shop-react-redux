import { connect } from "react-redux";
import ProductsInfo from "../../components/products-info/products-info";
import {fetchComments, fetchVideoInfo, getProductInfo} from "../../redux/action/actions";

const mapStateToProps = (state) => ({
  productsInfo: state.productsInfo,
  videoUrl:state.videoUrl,
  comments:state.comments
});
const mapDispatchToProps = (dispatch) => ({
  getProductInfo: (id) => dispatch(getProductInfo(id)),
  fetchVideoInfo:(id)=>dispatch(fetchVideoInfo(id)),
  fetchComments:(id)=>dispatch(fetchComments(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsInfo);
