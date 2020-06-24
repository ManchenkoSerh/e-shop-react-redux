import {
    ADD_TO_SHOPPING_CART,
    DELETE_ALL_SHOPPING_CART,
    FETCH_PRODUCTS_SUCCESS,
    GET_PRODUCTS_INFO,
    SUB_TO_SHOPPING_CART,
    FETCH_PRODUCTS_ON_NAME, FETCH_VIDEO_INFO_SUCCESS, API_KEY, ADD_TO_COMMENTS, FETCH_COMMENTS_SUCCESS,
    FETCH_PRODUCTS_ON_CATEGORY, SAVE_URL, DELETE_URL, FETCH_PRODUCTS_ERROR, FETCH_LOADING, FETCH_ERROR,
} from "../types/types";

export const fetchProductsSuccess = (data) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: data,
});
export const fetchError=(e)=>({
    type: FETCH_ERROR,
    payload: e,
})
export const fetchLoading=()=>({
    type: FETCH_LOADING,
})
export const fetchProducts = () => (dispatch) => {
    dispatch(fetchLoading())
  fetch("http://localhost:3001/products")
    .then((res) => res.json())
    .then((res) => {
      dispatch(fetchProductsSuccess(res));
    })
      .catch((res)=>dispatch(fetchError(res)));
};
export const addToShoppingCart = (id) => ({
  type: ADD_TO_SHOPPING_CART,
  payload: id,
});
export const subToShoppingCart = (id) => ({
  type: SUB_TO_SHOPPING_CART,
  payload: id,
});
export const deleteAllShoppingCart = (id) => ({
  type: DELETE_ALL_SHOPPING_CART,
  payload: id,
});
export const getProductInfoSuccess = (data) => ({
  type: GET_PRODUCTS_INFO,
  payload: data,
});
export const getProductInfo = (id) => (dispatch) => {
    dispatch(fetchLoading())
  fetch(`http://localhost:3001/products?id=${id}`)
    .then((res) => res.json())
    .then((res) => dispatch(getProductInfoSuccess(res)))
      .catch((res)=>dispatch(fetchError(res)));
};
export const fetchVideoInfoSuccess=(data)=>({
  type: FETCH_VIDEO_INFO_SUCCESS,
  payload: data,
})
export const fetchVideoInfo=(idVideo)=>(dispatch)=>{
  fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${idVideo}&key=${API_KEY}`)
      .then(res=>res.json())
      .then(res=>{dispatch(fetchVideoInfoSuccess(res))})
}

export const addCommentsSuccess=(comments,name,productId)=>({
  type:ADD_TO_COMMENTS,
  payload:{
    productId: productId,
    name: name,
    comments: comments
  }
})
export const addComments=(comments,name,productId)=>(dispatch)=>{
  fetch(`http://localhost:3001/comments`,{
    method:"POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify({
      comments: comments,
      name: name,
      productId: productId,
    }),
  })
      .then(()=>dispatch(addCommentsSuccess(comments,name,productId)))
}
export const fetchCommentsSuccess=(data)=>({
  type: FETCH_COMMENTS_SUCCESS,
  payload: data
})
export const fetchComments=(idProduct)=>(dispatch)=>{
  fetch(`http://localhost:3001/comments?productId=${idProduct}`)
      .then(res=>res.json())
      .then(res=>dispatch(fetchCommentsSuccess(res)))
}
/**
 *  Action for get products on title
 */
export const fetchProductsOnNameSuccess = (name) => ({
  type: FETCH_PRODUCTS_ON_NAME,
  payload: name,
});

export const fetchProductsOnName = (searchLine) => (dispatch) => {
  dispatch(fetchLoading());
  fetch("http://localhost:3001/products")
    .then((res) => res.json())
    .then((res) => {
      dispatch(fetchProductsSuccess(res));
    })
    .then(() => dispatch(fetchProductsOnNameSuccess(searchLine)));
};

/**
 * Action for get products on category
 */
export const fetchProductsOnCategorySuccess = (name) => ({
  type: FETCH_PRODUCTS_ON_CATEGORY,
  payload: name,
});

export const fetchProductsOnCategory = (searchLine) => (dispatch) => {
    dispatch(fetchLoading())
  fetch('http://localhost:3001/products')
    .then((res) => res.json())
    .then((res) => {dispatch(fetchProductsSuccess(res))})
    .then(() => dispatch(fetchProductsOnCategorySuccess(searchLine)))
}
export const saveUrl=(url)=>({
    type:SAVE_URL,
    payload:url
})
export const deletedUrl=(url)=>({
    type:DELETE_URL,
    payload:url
})
