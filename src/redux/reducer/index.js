import {
  ADD_TO_SHOPPING_CART,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ON_NAME,
} from "../types/types";

const initialState = {
  products: [],
  shoppingCart: [],
};
// {
//     items: [
//         {
//             id: 1,
//             titleItem: 'Iphone',
//             model: 'X',
//             price: '499$',
//             description: '',
//             img: 'https://i1.foxtrot.com.ua/product/thumb/6423093.jpg',
//             titleCategory: 'phone',
//         },
//         {
//             id: 2,
//             titleItem: 'Samsung',
//             model: 'S20',
//             price: '599$',
//             description: '',
//             img: 'https://i1.foxtrot.com.ua/product/thumb/6535851.jpg',
//             titleCategory: 'phone',
//
//         },
//         {
//             id: 3,
//             titleItem: 'MacBook',
//             model: 'Air 13',
//             price: '1399$',
//             description: '',
//             img: 'https://i1.foxtrot.com.ua/product/thumb/6570062.jpg',
//             titleCategory: 'phone',
//         }
//     ]
// };

function data(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
      };
    case ADD_TO_SHOPPING_CART:
      debugger;
      return {
        ...state,
        shoppingCart: action.payload,
      };
    case FETCH_PRODUCTS_ON_NAME:
      return {
        ...state,
        searchedProducts:
          state.products.filter((item) =>
            (item.titleItem).toLowerCase().includes((action.payload).toLowerCase())
          )
      };

    default:
      return state;
  }
}
export default data;
