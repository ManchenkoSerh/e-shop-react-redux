import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import data from "../reducer/index";

export const loadState=()=>{
    try{
        const serializedState=localStorage.getItem("state");
        if(serializedState===null){
            return undefined;
        }
        return JSON.parse(serializedState)
    }catch (e) {
        return undefined;
    }
}
export const saveState=(state)=>{
    try{
        const serializeState=JSON.stringify(state);
        localStorage.setItem("state",serializeState)
    }catch (e) {

    }
}
const persisted=loadState();


const store = createStore(
    data,
    persisted,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
store.subscribe(()=>{
    saveState({
        shoppingCart:store.getState().shoppingCart,
        products:store.getState().shoppingCart
    })
})
export default store;




