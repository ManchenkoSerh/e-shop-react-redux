import {FETCH_PRODUCTS_SUCCESS} from "../types/types";

const initialState={
    products:[]
}
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
            return{
                ...state,
                products:action.payload
            }
        default: return state
    }
}
export default data;
