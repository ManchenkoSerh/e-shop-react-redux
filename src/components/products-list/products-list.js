import React, {useEffect} from "react";
import ProductsListItem from "../products-list-items/products-list-items";
import {Container} from "./products-list-style";


const ProductsList=({products=[],fetchProducts,onIncrease})=>{
    async function parseProducts(){
        await fetchProducts()
    }
    useEffect(()=>{
        parseProducts()
    },[])
    console.log(products)
return(
    <div>
        <Container>
            {products.map(item=>{
                const {id,...itemprops}=item;
                return(
                    <ProductsListItem item={item} onIncrease={()=>onIncrease(item)}/>
                )
            })}
        </Container>

    </div>
);

}
export default ProductsList;
