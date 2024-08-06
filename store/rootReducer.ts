// store/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'; // Import your reducers

const rootReducer = combineReducers({
    cart: cartReducer,
    // Add other reducers here
});

export default rootReducer;
