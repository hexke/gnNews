import { createSlice } from '@reduxjs/toolkit';

interface IDisplayState {
    showAsGrid: boolean;
}

const initialState: IDisplayState = {
    showAsGrid: false,
}

export const displaySlice = createSlice({
    name: 'display',
    initialState,
    reducers: {
        toggle: state => {
            state.showAsGrid = !state.showAsGrid
        }
    }
});

export default displaySlice;