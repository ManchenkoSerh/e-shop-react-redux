import React from "react";
import {Route, Switch} from "react-router-dom";
import ListProducts from "../container/list-products/ListProducts";

const Router = () => {
  return(
    <Switch>
      <Route path="/" exact component={ListProducts} />
    </Switch>
  )
}
export default Router