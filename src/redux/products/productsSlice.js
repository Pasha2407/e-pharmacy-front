import { createSlice } from "@reduxjs/toolkit";
import { productsThunk } from "./productsServices";

const initialState = {
    productsData: null,
    isLoading: false,
    error: null,
    fieldName: '',
    page: 1,
};

const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        setProductName(state, action) {
            state.fieldName = action.payload.fieldName;
            state.page = 1;
        },
        setPage(state, action) {
            state.page = action.payload;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(productsThunk.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(productsThunk.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.productsData = payload.result;
            })
            .addCase(productsThunk.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            })
    },
});

export const { setProductName, setPage } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;