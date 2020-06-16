import React from "react";
import {Grid} from "@material-ui/core";
import "./body.css"
import ListProducts from "../../containers/ListProducts";
import ProductsList from "../products-list/products-list";

const Body=()=>{
    return(
        <Grid className="block-body">
            <ProductsList/>
        </Grid>


    )
}

export default Body;
