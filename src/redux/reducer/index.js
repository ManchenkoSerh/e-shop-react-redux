const initialState={
    categories: [
        {
            titleCategory: 'phone',
            items: [
                {
                    titleItem: 'Iphone',
                    model: 'X',
                    price: '499$',
                    description: '',
                    img: ''
                },
                {
                    titleItem: 'Samsung',
                    model: 'S20',
                    price: '599$',
                    description: '',
                    img: ''
                }
            ]
        },
        {
            titleCategory: 'laptop',
            items: [
                {
                    titleItem: 'MacBook',
                    model: 'Air 13',
                    price: '1399$',
                    description: '',
                    img: ''
                }
            ]
        }
    ]
};

function data(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}
export default data;
