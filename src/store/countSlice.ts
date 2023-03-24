import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ICountSlice {
    articlesCount: number | null;
}

const initialState: ICountSlice = {
    articlesCount: null,
}

export const countSlice = createSlice({
    name: 'display',
    initialState,
    reducers: {
        set: (state, action: PayloadAction<number>) => {
            state.articlesCount = action.payload;
        }
    }
});

export default countSlice;