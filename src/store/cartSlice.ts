/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

interface SliceState {
    id: string | number;
    name: string;
    image: string;
    price: number;
    quantity: number;
}

const initialState: SliceState[] = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (
            state,
            action: {
                payload: {
                    id: string | number;
                    name: string;
                    image: string;
                    price: number;
                };
                type: string;
            }
        ) => {
            const isAlreadyAdded = !!state.filter((product) => product.id === action.payload.id)
                .length;

            if (!isAlreadyAdded) state.push({ ...action.payload, quantity: 1 });
        },

        increaseQuantity: (
            state,
            action: {
                payload: {
                    id: string | number;
                };
                type: string;
            }
        ) => {
            const index = state.findIndex((product) => product.id === action.payload.id);

            state[index].quantity += 1;
        },

        decreaseQuantity: (
            state,
            action: {
                payload: {
                    id: string | number;
                };
                type: string;
            }
        ) => {
            const index = state.findIndex((product) => product.id === action.payload.id);

            if (state[index].quantity > 1) state[index].quantity -= 1;
        },

        removeProduct: (
            state,
            action: {
                payload: {
                    id: string | number;
                };
                type: string;
            }
        ) => {
            const index = state.findIndex((product) => product.id === action.payload.id);

            state.splice(index, 1);
        },

        removeAllProduct: (state) => {
            state.splice(0, state.length);
        },
    },
});

export const { addProduct, increaseQuantity, decreaseQuantity, removeProduct, removeAllProduct } =
    cartSlice.actions;

const cartReducer = cartSlice.reducer;

export default cartReducer;
