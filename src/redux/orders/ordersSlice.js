import { createSlice } from "@reduxjs/toolkit";
import { ordersThunk } from "./ordersServices";

const initialState = {
    ordersData: null,
    isLoading: false,
    error: null,
};

const ordersSlice = createSlice({
    name: 'orders',
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(ordersThunk.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.ordersData = payload.result;
            })
            .addCase(ordersThunk.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(ordersThunk.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            })
    },
});

export const ordersReducer = ordersSlice.reducer;