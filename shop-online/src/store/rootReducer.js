


import { combineReducers } from 'redux';
import productReducer from '../../src/store/productReducer'; // nhớ đúng đường dẫn

const rootReducer = combineReducers({
    product: productReducer, // tên 'product' -> để lấy state.product
});

export default rootReducer;
