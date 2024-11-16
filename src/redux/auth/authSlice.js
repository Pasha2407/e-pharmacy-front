import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { loginThunk, currentThunk, logoutThunk } from './authServices';

const initialState = {
    isLoading: false,
    error: null,
    authenticated: false,
    token: null,
    userData: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(loginThunk.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.authenticated = true;
                state.token = payload.token;
                state.userData = payload.user;
            })
            .addCase(currentThunk.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.authenticated = true;
                state.userData = payload;
            })
            .addCase(logoutThunk.fulfilled, () => {
                return initialState
            })
            .addMatcher(
                isAnyOf(
                    loginThunk.pending,
                    currentThunk.pending,
                    logoutThunk.pending,
                ),
                state => {
                    state.isLoading = true;
                    state.error = null;
                }
            )
            .addMatcher(
                isAnyOf(
                    loginThunk.rejected,
                    currentThunk.rejected,
                    logoutThunk.rejected,
                ),
                (state, { payload }) => {
                    state.isLoading = false;
                    state.error = payload;
                }
            )
    },
});

export const authReducer = authSlice.reducer;