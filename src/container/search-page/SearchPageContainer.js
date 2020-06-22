import { connect } from "react-redux";
import SearchPage from "../../components/search-page/SearchPage";
import {fetchProductsOnCategory, fetchProductsOnName} from "../../redux/action/actions";

const mapStateToProps = (state) => ({
  searchedProducts: state.searchedProducts,
});
const mapDispatchToProps = (dispatch) => ({
  fetchProductsOnName: (searchLine) =>
    dispatch(fetchProductsOnName(searchLine)),
  fetchProductsOnCategory: (searchLine) =>
    dispatch(fetchProductsOnCategory(searchLine))
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
