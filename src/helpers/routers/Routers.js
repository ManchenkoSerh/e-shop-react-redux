import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ListProducts from "../../container/list-products/ListProducts";
import ProductsInfo from "../../components/products-list-items/products-info";
import ShoppingCart from "../../container/shopping-cart/ShoppingCart";

const Routers=()=>{
    return(
            <Switch>
                <Route path="/" exact component={ListProducts}/>
                <Route path="/info" component={ProductsInfo}/>
                <Route path="/shopping-cart" component={ShoppingCart}/>
            </Switch>
    )
}
export default Routers;
