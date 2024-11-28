import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const instance = axios.create({
    baseURL: 'http://localhost:4000/api',
});

export const ordersThunk = createAsyncThunk('/orders',
    async (_, thunkApi) => {
        try {
            const { data } = await instance.get('/orders');
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    })