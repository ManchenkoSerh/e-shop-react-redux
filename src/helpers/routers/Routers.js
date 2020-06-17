import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ListProducts from "../../container/list-products/ListProducts";
import ProductsInfo from "../../components/products-list-items/products-info";
import ShoppingCart from "../../components/products-list-items/shopping-cart";

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
