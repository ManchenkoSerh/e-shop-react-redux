import {FETCH_PRODUCTS_SUCCESS} from "../types/types";

export const fetchProductsSuccess=(data)=>({
    type:FETCH_PRODUCTS_SUCCESS,
    payload:data
})
export const fetchProducts=()=>(dispatch)=>{

    fetch("http://localhost:3001/products")
        .then(res=>res.json())
        .then(res=>{dispatch(fetchProductsSuccess(res))})
}
