import {connect} from "react-redux";
import SearchPage from "../../pages/search-page/SearchPage";
import { fetchProductsOnName } from "../../redux/action/actions";

const mapStateToProps=(state)=>({
  searchedProducts: state.searchedProducts
})
const mapDispatchToProps=(dispatch)=>({
  fetchProductsOnName: (searchLine) => dispatch(fetchProductsOnName(searchLine))
})
export default connect(mapStateToProps,mapDispatchToProps)(SearchPage)