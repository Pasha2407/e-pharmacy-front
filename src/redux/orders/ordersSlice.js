import { createSlice } from "@reduxjs/toolkit";
import { ordersThunk } from "./ordersServices";

const initialState = {
    ordersData: null,
    isLoading: false,
    error: null,
    userName: '',
    page: 1,
};

const ordersSlice = createSlice({
    name: 'orders',
    initialState: initialState,
    reducers: {
        setUserName(state, action) {
            state.userName = action.payload.userName;
            state.page = 1;
        },
        setPage(state, action) {
            state.page = action.payload;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(ordersThunk.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(ordersThunk.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.ordersData = payload.result;
            })
            .addCase(ordersThunk.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            })
    },
});

export const { setUserName, setPage } = ordersSlice.actions;
export const ordersReducer = ordersSlice.reducer;