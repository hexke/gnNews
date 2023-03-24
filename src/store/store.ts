import countSlice from "./countSlice";
import { displaySlice } from "./displaySlice";

import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        display: displaySlice.reducer,
        count: countSlice.reducer,
    }
});

export const displayActions = displaySlice.actions;
export const countActions = countSlice.actions;

export type TRootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;