import React from "react";
import {connect} from "react-redux";
import ProductsList from "../../components/products-list/products-list";
import {addToShoppingCart, fetchProducts} from "../../redux/action/actions";

const mapStateToProps=(state)=>({
    products:state.products
})
const mapDispatchToProps=(dispatch)=>({
        fetchProducts: () => dispatch(fetchProducts()),
        onIncrease: (id) => {dispatch(addToShoppingCart(id))}
})
export default connect(mapStateToProps,mapDispatchToProps)(ProductsList)
