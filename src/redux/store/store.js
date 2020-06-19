import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import data from "../reducer/index";

const store = createStore(
    data,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
// store.subscribe(() => {
//     const state = store.getState();
//     const persist = {
//         cart: state.cart,
//     };
//     window.localStorage.setItem('kovilook', JSON.stringify(persist));

export default store;



// export default initialState => {
//     initialState = JSON.parse(window.localStorage.getItem('kovilook')) || initialState;
//     const middleware = [thunkMiddleware];
//
//     const store = createStore(reducers, initialState, compose(composeEnhancers(applyMiddleware(...middleware))));
//     store.subscribe(() => {
//         const state = store.getState();
//         const persist = {
//             cart: state.cart,
//         };
//         window.localStorage.setItem('kovilook', JSON.stringify(persist));
//     });
//     return store;
// };
