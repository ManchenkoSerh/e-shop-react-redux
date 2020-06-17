import React from "react";
import {Button, ButtonInfo, Img, Item} from "./products-list-items-style";
import {Link} from "react-router-dom";


const ProductsListItem=({item,onIncrease})=>{
    return(
        <Item>
            <Img src={item.img}/>
            <h3>{item.titleItem} <span>{item.model}</span></h3>
            <span>{item.price}</span><br/>
            <Link to="/shopping-cart"><Button onclick={onIncrease}>Купити</Button></Link>
            <Link to="/info"><ButtonInfo>Детальніше</ButtonInfo></Link>
        </Item>
    )
}
export default ProductsListItem
