const initialState = {
    products: [],
    filteredProducts: [],
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_PRODUCTS":
            return {
                ...state,
                products: action.payload,
            };
        case "SET_FILTERED_PRODUCTS":
            return {
                ...state,
                filteredProducts: action.payload,
            };
        default:
            return state;
    }
};

export default productReducer;
