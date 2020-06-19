import {
    ADD_TO_SHOPPING_CART, DELETE_ALL_SHOPPING_CART,
    FETCH_PRODUCTS_SUCCESS,
    SUB_TO_SHOPPING_CART,
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

    case ADD_TO_SHOPPING_CART: {
      const productID = action.payload;
      const product = state.products.find((item) => item.id === productID);
      const itemIndex = state.shoppingCart.findIndex(({ id }) => id === productID);
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
            model:product.model,
          total: product.price,
            price:product.price,
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
      const itemIndex = state.shoppingCart.findIndex(({ id }) => id === productID);
      const item = state.shoppingCart[itemIndex];
      const newItem = {
        id: product.id,
        name: product.titleItem,
          model:product.model,
        price:product.price,
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
      case DELETE_ALL_SHOPPING_CART:{
          const productID = action.payload;
          const product = state.products.find((item) => item.id === productID);
          const itemIndex = state.shoppingCart.findIndex(({ id }) => id === productID);
          const item = state.shoppingCart[itemIndex];
          const newItem = {
              id: product.id,
              name: product.titleItem,
              model:product.model,
              price:product.price,
              total: item.total - item.count*product.price,
              count: item.count - item.count,
              img: product.img,
          };

          if (item.count <1) {
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
