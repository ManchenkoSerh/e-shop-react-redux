import {connect} from "react-redux"
import ShoppingCartTable from "../../components/products-list-items/shopping-cart"
import {addToShoppingCart} from "../../redux/action/actions";
const mapStateToProps=(state)=>({
    shoppingCart: state.shoppingCart
})
const mapDispatchToProps=(dispatch)=>({
    onIncrease:(id)=>dispatch(addToShoppingCart(id)),
})
export default connect(mapStateToProps,mapDispatchToProps)(ShoppingCartTable)
