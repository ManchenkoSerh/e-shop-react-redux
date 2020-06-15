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

export default store;
