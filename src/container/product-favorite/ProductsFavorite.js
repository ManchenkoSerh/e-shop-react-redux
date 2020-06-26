import {connect} from "react-redux"
import {addToShoppingCart, fetchProducts, filterFavoriteProduct} from "../../redux/action/actions";
import FavoriteProducts from "../../components/favorite-products/favorite-products"
const mapStateToProps=(state)=>({
products:state.products,
    favorite:state.favorite
})

const mapDispatchToProps=(dispatch)=>({
    filterFavoriteProduct:(data)=>dispatch(filterFavoriteProduct(data)),
    fetchProducts:()=>dispatch(fetchProducts()),
    onIncrease: (id) => {
        dispatch(addToShoppingCart(id));
    },
})
export default connect(mapStateToProps,mapDispatchToProps)(FavoriteProducts)
