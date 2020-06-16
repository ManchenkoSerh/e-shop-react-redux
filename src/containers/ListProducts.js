import React from "react";
import ProductsList from "../components/products-list/products-list";
import {connect} from "react-redux";

const mapStateToProps=(state)=>({
    product:state.items
})
// const mapDispatchToProps=(dispatch)=>({
//
// })
export default connect(mapStateToProps)(ProductsList)
