import {connect} from "react-redux"
import {
    addToShoppingCart,
    fetchFavoriteProduct,
    fetchProducts,
    filterFavoriteProduct
} from "../../redux/action/actions";
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
    fetchFavoriteProduct:(data)=>dispatch(fetchFavoriteProduct(data))
})
export default connect(mapStateToProps,mapDispatchToProps)(FavoriteProducts)
