import {
    ADD_TO_SHOPPING_CART,
    DELETE_ALL_SHOPPING_CART,
    FETCH_PRODUCTS_SUCCESS,
    SUB_TO_SHOPPING_CART,
    FETCH_PRODUCTS_ON_NAME
} from "../types/types";

export const fetchProductsSuccess=(data)=>({
    type:FETCH_PRODUCTS_SUCCESS,
    payload:data
})
export const fetchProducts= () =>(dispatch)=> {
        fetch("http://localhost:3001/products")
        .then(res=>res.json())
        .then(res=>{dispatch(fetchProductsSuccess(res))})
}
export const addToShoppingCart=(id)=>({
    type:ADD_TO_SHOPPING_CART,
    payload:id
})
export const subToShoppingCart = (id) => ({
  type: SUB_TO_SHOPPING_CART,
  payload: id,
});
export const deleteAllShoppingCart = (id) => ({
  type: DELETE_ALL_SHOPPING_CART,
  payload: id,
});

/**
 *  Action for get products on category
 */
export const fetchProductsOnNameSuccess = (name) => ({
    type: FETCH_PRODUCTS_ON_NAME,
    payload: name
})

export const fetchProductsOnName = (searchLine) =>(dispatch)=> {
    fetch("http://localhost:3001/products")
      .then(res=>res.json())
      .then(res=>{dispatch(fetchProductsSuccess(res))})
      .then(() => dispatch(fetchProductsOnNameSuccess(searchLine)))
}