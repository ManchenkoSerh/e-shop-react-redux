import React from "react";
import ListProducts from '../../container/list-products/ListProducts'
import Header from "../header/Header";
import Router from "../../helpers/Routes";
const Main = () => {
    return(
        <div>
            <Header />
            <Router />
        </div>
    );
}
export default Main;
