import {
  ADD_TO_SHOPPING_CART,
  DELETE_ALL_SHOPPING_CART,
  FETCH_PRODUCTS_SUCCESS,
  GET_PRODUCTS_INFO,
  SUB_TO_SHOPPING_CART,
  FETCH_PRODUCTS_ON_NAME, FETCH_VIDEO_INFO_SUCCESS, ADD_TO_COMMENTS, FETCH_COMMENTS_SUCCESS,
   FETCH_PRODUCTS_ON_CATEGORY,
} from "../types/types";

const initialState = {
  shoppingCart: [],
  products: [],
  productsInfo: [],
  videoUrl:[],
  comments:[]
};

function data(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
      };

    case GET_PRODUCTS_INFO:
      return {
        ...state,
        productsInfo: action.payload[0],
      };
    case FETCH_VIDEO_INFO_SUCCESS:
      return{
        ...state,
        videoUrl:action.payload
      }
    case ADD_TO_COMMENTS:
      return {
        ...state,
        comments:[
            ...state.comments,
          {
            userId: action.payload.userId,
            comments: action.payload.comments,
            name: action.payload.name,
          }
        ]
      }
    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.payload

      }
    case FETCH_PRODUCTS_ON_NAME:
      return {
        ...state,
        searchedProducts: state.products.filter((item) =>
          item.titleItem.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    case FETCH_PRODUCTS_ON_CATEGORY:
      return {
        ...state,
        searchedProducts: state.products.filter((item) =>
          item.titleCategory.toLowerCase() === action.payload
        ),
      };
    case ADD_TO_SHOPPING_CART: {
      const productID = action.payload;
      const product = state.products.find((item) => item.id === productID);
      const itemIndex = state.shoppingCart.findIndex(
        ({ id }) => id === productID
      );
      const item = state.shoppingCart[itemIndex];
      let newItem;
      if (item) {
        newItem = {
          ...item,
          total: item.total + product.price,
          count: item.count + 1,
        };
      } else {
        newItem = {
          id: product.id,
          name: product.titleItem,
          model: product.model,
          urlVideoId:product.urlVideoId,
          total: product.price,
          price: product.price,
          count: 1,
          img: product.img,
        };
      }

      if (itemIndex < 0) {
        return {
          ...state,
          shoppingCart: [...state.shoppingCart, newItem],
        };
      } else {
        return {
          ...state,
          shoppingCart: [
            ...state.shoppingCart.slice(0, itemIndex),
            newItem,
            ...state.shoppingCart.slice(itemIndex + 1),
          ],
        };
      }
    }

    case SUB_TO_SHOPPING_CART: {
      const productID = action.payload;
      const product = state.products.find((item) => item.id === productID);
      const itemIndex = state.shoppingCart.findIndex(
        ({ id }) => id === productID
      );
      const item = state.shoppingCart[itemIndex];
      const newItem = {
        id: product.id,
        name: product.titleItem,
        model: product.model,
        urlVideoId:product.urlVideoId,
        price: product.price,
        total: item.total - product.price,
        count: item.count - 1,
        img: product.img,
      };

      if (item.count === 1) {
        return {
          ...state,
          shoppingCart: [
            ...state.shoppingCart.slice(0, itemIndex),
            ...state.shoppingCart.slice(itemIndex + 1),
          ],
        };
      } else {
        return {
          ...state,
          shoppingCart: [
            ...state.shoppingCart.slice(0, itemIndex),
            newItem,
            ...state.shoppingCart.slice(itemIndex + 1),
          ],
        };
      }
    }
    case DELETE_ALL_SHOPPING_CART: {
      const productID = action.payload;
      const product = state.products.find((item) => item.id === productID);
      const itemIndex = state.shoppingCart.findIndex(
        ({ id }) => id === productID
      );
      const item = state.shoppingCart[itemIndex];
      const newItem = {
        id: product.id,
        name: product.titleItem,
        urlVideoId:product.urlVideoId,
        model: product.model,
        price: product.price,
        total: item.total - item.count * product.price,
        count: item.count - item.count,
        img: product.img,
      };

      if (item.count < 1) {
        return {
          ...state,
          shoppingCart: [
            ...state.shoppingCart.slice(0, itemIndex),
            ...state.shoppingCart.slice(itemIndex + 1),
          ],
        };
      } else {
        return {
          ...state,
          shoppingCart: [
            ...state.shoppingCart.slice(0, itemIndex),
            newItem,
            ...state.shoppingCart.slice(itemIndex + 1),
          ],
        };
      }
    }

    default:
      return state;
  }
}
export default data;
