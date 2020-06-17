// import {ADD_TO_SHOPPING_CART, FETCH_PRODUCTS_SUCCESS} from "../types/types";
//
// const updateCartItems = (cartItems, item, idx) => {
//
//     if (item.count === 0) {
//         return [
//             ...cartItems.slice(0, idx),
//             ...cartItems.slice(idx + 1)
//         ];
//     }
//
//     if (idx === -1) {
//         return [
//             ...cartItems,
//             item
//         ];
//     }
//
//     return [
//         ...cartItems.slice(0, idx),
//         item,
//         ...cartItems.slice(idx + 1)
//     ];
// };
//
// const updateCartItem = (book, item = {}, quantity) => {
//
//     const {
//         id = book.id,
//         count = 0,
//         title = book.title,
//         total = 0 } = item;
//
//     return {
//         id,
//         title,
//         count: count + quantity,
//         total: total + quantity*book.price
//     };
// };
//
//
// const updateOrder = (state, bookId, quantity) => {
//     const { bookList: { books }, shoppingCart: { cartItems }} = state;
//
//     const book = books.find(({id}) => id === bookId);
//     const itemIndex = cartItems.findIndex(({id}) => id === bookId);
//     const item = cartItems[itemIndex];
//
//     const newItem = updateCartItem(book, item, quantity);
//     return {
//         orderTotal: 0,
//         cartItems: updateCartItems(cartItems, newItem, itemIndex)
//     };
// };
//
// const updateShoppingCart = (state, action) => {
//
//     if (state === undefined) {
//         return {
//             cartItems: [],
//             orderTotal: 0
//         }
//     }
// }
// function shoppingCart(state, action) {
//     switch (action.type) {
//         case ADD_TO_SHOPPING_CART:
//                 const {pro}
//
//
//         default: return state
//     }
// }
// export default Update;
