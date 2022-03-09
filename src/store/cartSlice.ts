/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        setCartProduct: (
            state,
            action: {
                payload: {
                    productId: string | number;
                    quantity: number;
                };
                type: string;
            }
        ) => {
            state.push(action.payload);
        },
    },
});

export const { setCartProduct } = cartSlice.actions;

const cartReducer = cartSlice.reducer;

export default cartReducer;
