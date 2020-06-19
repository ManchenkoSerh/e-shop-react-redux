import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ListProducts from "../../container/list-products/ListProducts";
import ShoppingCart from "../../container/shopping-cart/ShoppingCart";
import ProductInfo from "../../container/product-info/ProductInfo";

const Routers=()=>{
    return(
            <Switch>
                <Route path="/" exact component={ListProducts}/>
                <Route path="/info" component={ProductInfo}/>
                <Route path="/shopping-cart" component={ShoppingCart}/>
            </Switch>
    )
}
export default Routers;
