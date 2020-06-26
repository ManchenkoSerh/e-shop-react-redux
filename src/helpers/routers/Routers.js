import React from "react";
import { Route, Switch } from "react-router-dom";
import ListProducts from "../../container/list-products/ListProducts";
import SearchPageContainer from "../../container/search-page/SearchPageContainer";
import ShoppingCart from "../../container/shopping-cart/ShoppingCart";
import ProductInfo from "../../container/product-info/ProductInfo";
import ErrorPage from "../../components/error-page";
import ProductsFavorite from "../../container/product-favorite/ProductsFavorite";

const Routers = () => {
  return (
    <Switch>
      <Route path="/" exact component={ListProducts} />
      <Route path="/info" component={ProductInfo} />
      <Route path="/shopping-cart" component={ShoppingCart} />
      <Route path="/search" component={SearchPageContainer}/>
      <Route path="/page-not-found" component={ErrorPage}/>
        <Route path="/favorites" component={ProductsFavorite}/>
    </Switch>
  );
};
export default Routers;
