import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ListProducts from "../../container/list-products/ListProducts";
import ProductsInfo from "./products-info";
import ShoppingCart from "./shopping-cart";

const Routers=()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ListProducts}/>
                <Route path="/info" component={ProductsInfo}/>
                <Route path="/shopping-cart" component={ShoppingCart}/>
            </Switch>

        </BrowserRouter>
    )
}
export default Routers;
