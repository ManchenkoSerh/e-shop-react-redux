import React from "react";
import { Route, Switch } from "react-router-dom";
import ListProducts from "../../container/list-products/ListProducts";
import ProductsInfo from "../../components/products-list-items/products-info";
import ShoppingCart from "../../components/products-list-items/shopping-cart";
import SearchPageContainer from "../../container/search-page/SearchPageContainer";
import ShoppingCart from "../../container/shopping-cart/ShoppingCart";

const Routers=()=>{
    return(
            <Switch>
                <Route path="/" exact component={ListProducts}/>
                <Route path="/info" component={ProductsInfo}/>
                <Route path="/shopping-cart" component={ShoppingCart}/>
                <Route path='/search' component={SearchPageContainer} />
            </Switch>
    )
}
export default Routers;
