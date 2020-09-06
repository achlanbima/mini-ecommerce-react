const initialState = {
    data: [],
    loading: false,
    error: false
}

const Products = (state = initialState, action) => {
    switch(action.type){
        case 'GET_PRODUCTS_PENDING':
            return {
                ...state,
                loading: true
            }
        
        case 'GET_PRODUCTS_FULFILLED':
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case 'GET_PRODUCTS_REJECTED':
            return {
                ...state,
                loading: false,
                error: true
            }
        default: 
            return state;
    }
}

export default Products