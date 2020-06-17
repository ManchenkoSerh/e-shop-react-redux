import {ADD_TO_SHOPPING_CART, FETCH_PRODUCTS_SUCCESS} from "../types/types";

export const fetchProductsSuccess=(data)=>({
    type:FETCH_PRODUCTS_SUCCESS,
    payload:data
})
export const fetchProducts=()=>(dispatch)=>{

    fetch("http://localhost:3001/products")
        .then(res=>res.json())
        .then(res=>{dispatch(fetchProductsSuccess(res))})
}
export const addToShoppingCart=(id)=>({
    type:ADD_TO_SHOPPING_CART,
    payload:id
})
