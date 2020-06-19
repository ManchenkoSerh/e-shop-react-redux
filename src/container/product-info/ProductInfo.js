import {connect} from "react-redux";
import ProductsInfo from "../../components/products-list-items/products-info";
import {getProductInfo} from "../../redux/action/actions";

const mapStateToProps=(state)=>({
    productsInfo:state.productsInfo
})
const mapDispatchToProps=(dispatch)=>({
    getProductInfo:(id)=>dispatch(getProductInfo(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(ProductsInfo)
