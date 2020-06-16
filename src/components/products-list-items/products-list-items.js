import React from "react";


const ProductsListItem=({item})=>{
    return(
        <div>
            <img src={item.img}/>
            <h3>{item.titleItem} <span>{item.model}</span></h3>
            <span>{item.price}</span>
            <button>Купити</button>
        </div>
    )
}
export default ProductsListItem
