import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export default store;

// eslint-disable-next-line no-undef
export type RootState = ReturnType<typeof store.getState>;
